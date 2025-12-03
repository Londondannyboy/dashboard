"""Quest API - FastAPI + Pydantic AI."""

import os
import uuid
from contextlib import asynccontextmanager
from typing import Optional

import logfire
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from starlette.requests import Request
from starlette.responses import Response
from pydantic_ai.messages import ModelMessage, UserPromptPart

from .schemas import (
    ChatRequest,
    ChatResponse,
    ExtractedFact,
    FactExtractionResult,
    PendingConfirmation,
)
from .agents import (
    relocation_agent,
    placement_agent,
    extract_facts,
    get_relocation_response,
    get_placement_response,
)
from .memory import get_relevant_context, store_conversation
from .zep import get_article_recommendations, sync_user_facts

# Load environment variables
load_dotenv()

# Initialize Logfire for AI monitoring
logfire_token = os.getenv("LOGFIRE_TOKEN")
if logfire_token:
    logfire.configure(token=logfire_token)


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan handler."""
    # Startup
    print("Quest API starting up...")
    yield
    # Shutdown
    print("Quest API shutting down...")


app = FastAPI(
    title="Quest API",
    description="AI-powered relocation and placement assistant",
    version="0.1.0",
    lifespan=lifespan,
)

# Instrument FastAPI with Logfire
if logfire_token:
    logfire.instrument_fastapi(app)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "https://*.vercel.app",
        "https://relocation.quest",
        "https://placement.quest",
        "https://dashboard.quest",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    """Health check endpoint."""
    return {"status": "ok", "service": "quest-api"}


@app.get("/health")
async def health():
    """Health check endpoint."""
    return {"status": "healthy"}


@app.post("/chat")
async def chat_streaming(request: Request) -> Response:
    """Stream AI responses to Next.js frontend via Vercel AI protocol.

    This endpoint uses Pydantic AI's VercelAIAdapter to stream responses
    compatible with the Vercel AI SDK.
    """
    try:
        from pydantic_ai.messages import UserPromptPart

        body = await request.json()
        messages = body.get("messages", [])
        user_id = body.get("user_id")
        app_type = body.get("app_type", "relocation")  # 'relocation' or 'placement'

        if not messages:
            raise HTTPException(status_code=400, detail="No messages provided")

        # Get the last user message
        last_message = messages[-1]
        if last_message.get("role") != "user":
            raise HTTPException(status_code=400, detail="Last message must be from user")

        user_content = last_message.get("content", "")

        # Get relevant context from memory
        context = ""
        if user_id:
            context = await get_relevant_context(user_id, user_content)

        # Build conversation history for the agent
        conversation_messages = []
        for msg in messages[-10:]:  # Last 10 messages
            role = msg.get("role", "user")
            content = msg.get("content", "")
            conversation_messages.append({"role": role, "content": content})

        # Select agent based on app type
        if app_type == "placement":
            response = await get_placement_response(conversation_messages, context)
        else:
            response = await get_relocation_response(conversation_messages, context)

        # For now, return as JSON (non-streaming)
        # TODO: Implement proper streaming with VercelAIAdapter
        return Response(
            content=response,
            media_type="text/plain",
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/chat/complete", response_model=ChatResponse)
async def chat_complete(request: ChatRequest) -> ChatResponse:
    """Complete chat with fact extraction (non-streaming)."""
    try:
        messages = [{"role": m.role, "content": m.content} for m in request.messages]
        user_id = request.user_id
        session_id = request.session_id or str(uuid.uuid4())

        # Get the last user message
        last_user_msg = next(
            (m for m in reversed(messages) if m["role"] == "user"),
            None
        )
        if not last_user_msg:
            raise HTTPException(status_code=400, detail="No user message found")

        user_content = last_user_msg["content"]

        # Get context and generate response
        context = ""
        if user_id:
            context = await get_relevant_context(user_id, user_content)

        response = await get_relocation_response(messages, context)

        # Extract facts from the conversation
        extraction_result = await extract_facts(user_content)

        # Get article recommendations if relevant
        recommendations = []
        if user_id:
            recommendations = await get_article_recommendations(user_id, user_content)

        # Store conversation in memory
        if user_id:
            await store_conversation(user_id, session_id, user_content, response)

        # Create pending confirmations for low-confidence facts
        pending = []
        for fact in extraction_result.facts:
            if fact.requires_confirmation:
                pending.append(PendingConfirmation(
                    user_id=user_id or "",
                    fact_type=fact.type,
                    new_value=fact.value,
                    confidence=fact.confidence,
                    context=fact.context,
                ))

        return ChatResponse(
            content=response,
            extracted_facts=extraction_result.facts,
            pending_confirmations=pending,
            recommendations=[],  # TODO: Map to ArticleRecommendation
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/extract-facts", response_model=FactExtractionResult)
async def extract_facts_endpoint(
    text: str,
    user_id: Optional[str] = None
) -> FactExtractionResult:
    """Extract structured facts from text using Pydantic schemas."""
    try:
        result = await extract_facts(text)

        # Sync facts to ZEP if user_id provided
        if user_id and result.facts:
            await sync_user_facts(user_id, [
                {
                    "type": f.type.value,
                    "value": f.value,
                    "confidence": f.confidence
                }
                for f in result.facts
            ])

        return result

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/hitl/pending")
async def create_pending_confirmation(confirmation: PendingConfirmation) -> dict:
    """Create HITL pending confirmation."""
    # TODO: Store in Neon database
    return {
        "status": "created",
        "id": str(uuid.uuid4()),
        "confirmation": confirmation.model_dump()
    }


@app.post("/hitl/approve/{confirmation_id}")
async def approve_confirmation(confirmation_id: str, user_id: str) -> dict:
    """Approve a pending confirmation."""
    # TODO: Update in Neon database
    return {
        "status": "approved",
        "id": confirmation_id
    }


@app.post("/hitl/reject/{confirmation_id}")
async def reject_confirmation(confirmation_id: str, user_id: str) -> dict:
    """Reject a pending confirmation."""
    # TODO: Update in Neon database
    return {
        "status": "rejected",
        "id": confirmation_id
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "src.main:app",
        host="0.0.0.0",
        port=int(os.getenv("PORT", 8000)),
        reload=True
    )
