"""SuperMemory integration for long-term conversation context."""

import os
import httpx
from typing import Optional


SUPERMEMORY_API = os.getenv("SUPERMEMORY_API_URL", "https://api.supermemory.ai/v1")
SUPERMEMORY_API_KEY = os.getenv("SUPERMEMORY_API_KEY", "")


async def store_memory(user_id: str, content: str, metadata: Optional[dict] = None) -> dict:
    """Store a memory/conversation in SuperMemory."""
    if not SUPERMEMORY_API_KEY:
        return {"status": "skipped", "reason": "No API key configured"}

    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(
                f"{SUPERMEMORY_API}/memory",
                json={
                    "user_id": user_id,
                    "content": content,
                    "metadata": metadata or {}
                },
                headers={
                    "Authorization": f"Bearer {SUPERMEMORY_API_KEY}",
                    "Content-Type": "application/json"
                },
                timeout=30.0
            )
            response.raise_for_status()
            return response.json()
        except httpx.HTTPError as e:
            return {"status": "error", "error": str(e)}


async def search_memory(user_id: str, query: str, limit: int = 5) -> list[str]:
    """Search user's memories using natural language."""
    if not SUPERMEMORY_API_KEY:
        return []

    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(
                f"{SUPERMEMORY_API}/memory/search",
                json={
                    "user_id": user_id,
                    "query": query,
                    "limit": limit
                },
                headers={
                    "Authorization": f"Bearer {SUPERMEMORY_API_KEY}",
                    "Content-Type": "application/json"
                },
                timeout=30.0
            )
            response.raise_for_status()
            data = response.json()
            return data.get("results", [])
        except httpx.HTTPError:
            return []


async def get_relevant_context(user_id: str, current_message: str) -> str:
    """Get relevant context from user's memory for the current message."""
    memories = await search_memory(user_id, current_message, limit=3)
    if not memories:
        return ""

    return "Previous relevant context:\n" + "\n".join([
        f"- {memory}" for memory in memories
    ])


async def store_conversation(
    user_id: str,
    session_id: str,
    user_message: str,
    assistant_response: str
) -> dict:
    """Store a conversation exchange in memory."""
    content = f"User: {user_message}\nAssistant: {assistant_response}"
    metadata = {
        "session_id": session_id,
        "type": "conversation"
    }
    return await store_memory(user_id, content, metadata)
