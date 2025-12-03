"""Pydantic AI agents for Quest."""

import os
from pydantic_ai import Agent
from pydantic_ai.models.gemini import GeminiModel

from .schemas import ExtractedFact, FactExtractionResult, UserConditions


# Initialize models
def get_model():
    """Get the configured AI model."""
    model_name = os.getenv("AI_MODEL", "gemini-2.0-flash")
    return GeminiModel(model_name)


# Relocation Assistant Agent
relocation_agent = Agent(
    get_model(),
    system_prompt="""You are Quest, a friendly and knowledgeable relocation assistant.

Your role is to help users plan their international relocation by:
1. Understanding their current situation and preferences
2. Providing helpful information about destinations
3. Answering questions about visas, cost of living, healthcare, etc.
4. Recommending relevant articles and resources

Be conversational, empathetic, and helpful. Ask clarifying questions when needed.
When users share information about themselves, acknowledge it naturally in conversation.

Important: Extract and remember key facts about the user such as:
- Their name and current location
- Destination preferences (countries they're considering)
- Family situation (partner, children)
- Job status (employed, seeking, remote, retired)
- Budget constraints
- Timeline for moving

Always be encouraging and supportive of their relocation journey.""",
    result_type=str,
)


# Placement Assistant Agent (for job seekers)
placement_agent = Agent(
    get_model(),
    system_prompt="""You are Quest, a professional career placement assistant.

Your role is to help users with their international job search by:
1. Understanding their skills, experience, and career goals
2. Providing information about job markets in different countries
3. Helping with resume/CV optimization for international applications
4. Sharing insights about work permits and visa requirements

Be professional yet approachable. Ask relevant questions about their background.

Extract key facts about the user such as:
- Their name and current location
- Target countries for job search
- Industry and role preferences
- Years of experience
- Salary expectations
- Remote work preferences

Always be supportive and provide actionable advice.""",
    result_type=str,
)


# Fact Extraction Agent
fact_extractor = Agent(
    get_model(),
    system_prompt="""You are a fact extraction assistant. Your job is to analyze conversations
and extract structured facts about the user.

For each fact you extract, determine:
1. The type of fact (destination_preference, current_location, family_status, job_status, budget_range, timeline, language, visa_requirement, or custom)
2. The value as a string
3. Your confidence level (0.0 to 1.0)
4. Whether it requires user confirmation (for significant changes or low confidence)

Only extract facts that are explicitly stated or strongly implied.
Be conservative with confidence scores:
- 0.9-1.0: Explicitly stated, clear and unambiguous
- 0.7-0.9: Clearly implied, high certainty
- 0.5-0.7: Implied, some uncertainty
- Below 0.5: Uncertain, should require confirmation

Changes to existing user preferences (like changing destination from Portugal to Spain)
should always require confirmation.""",
    result_type=FactExtractionResult,
)


# User Conditions Extractor
conditions_extractor = Agent(
    get_model(),
    system_prompt="""Extract structured user conditions from the conversation.
Focus on:
- Destination preferences (countries, priorities, reasons)
- Family conditions (partner, children, ages)
- Job status
- Budget range
- Timeline
- Current location

Return structured data following the UserConditions schema.""",
    result_type=UserConditions,
)


async def get_relocation_response(messages: list[dict], context: str = "") -> str:
    """Get a response from the relocation agent."""
    # Build conversation history
    conversation = "\n".join([
        f"{m['role']}: {m['content']}"
        for m in messages[-10:]  # Last 10 messages for context
    ])

    prompt = f"""Context: {context}

Conversation:
{conversation}

Respond as Quest, the relocation assistant."""

    result = await relocation_agent.run(prompt)
    return result.data


async def get_placement_response(messages: list[dict], context: str = "") -> str:
    """Get a response from the placement agent."""
    conversation = "\n".join([
        f"{m['role']}: {m['content']}"
        for m in messages[-10:]
    ])

    prompt = f"""Context: {context}

Conversation:
{conversation}

Respond as Quest, the placement assistant."""

    result = await placement_agent.run(prompt)
    return result.data


async def extract_facts(text: str, existing_facts: list[ExtractedFact] = None) -> FactExtractionResult:
    """Extract facts from text."""
    existing_context = ""
    if existing_facts:
        existing_context = "Existing facts:\n" + "\n".join([
            f"- {f.type.value}: {f.value}" for f in existing_facts
        ])

    prompt = f"""{existing_context}

New text to analyze:
{text}

Extract any new or changed facts about the user."""

    result = await fact_extractor.run(prompt)
    return result.data


async def extract_user_conditions(messages: list[dict]) -> UserConditions:
    """Extract structured user conditions from conversation history."""
    conversation = "\n".join([
        f"{m['role']}: {m['content']}"
        for m in messages
    ])

    prompt = f"""Analyze this conversation and extract the user's conditions:

{conversation}"""

    result = await conditions_extractor.run(prompt)
    return result.data
