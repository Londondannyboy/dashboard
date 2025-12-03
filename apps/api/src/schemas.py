"""Pydantic schemas for validated AI outputs."""

from datetime import datetime
from enum import Enum
from typing import Optional
from pydantic import BaseModel, Field


class JobStatus(str, Enum):
    EMPLOYED = "employed"
    SEEKING = "seeking"
    REMOTE = "remote"
    RETIRED = "retired"


class FactType(str, Enum):
    DESTINATION_PREFERENCE = "destination_preference"
    CURRENT_LOCATION = "current_location"
    FAMILY_STATUS = "family_status"
    JOB_STATUS = "job_status"
    BUDGET_RANGE = "budget_range"
    TIMELINE = "timeline"
    LANGUAGE = "language"
    VISA_REQUIREMENT = "visa_requirement"
    CUSTOM = "custom"


# Structured outputs for Pydantic AI
class DestinationPreference(BaseModel):
    """A user's destination preference."""
    country: str = Field(description="Country name")
    priority: int = Field(ge=1, le=10, description="Priority from 1-10")
    reasons: list[str] = Field(default_factory=list, description="Reasons for choosing this destination")


class FamilyCondition(BaseModel):
    """User's family situation."""
    has_partner: bool = False
    has_children: bool = False
    children_ages: list[int] = Field(default_factory=list)
    partner_nationality: Optional[str] = None
    partner_work_status: Optional[str] = None


class BudgetRange(BaseModel):
    """User's budget constraints."""
    monthly_min: Optional[int] = None
    monthly_max: Optional[int] = None
    currency: str = "USD"
    includes_housing: bool = True


class UserConditions(BaseModel):
    """Complete user conditions extracted from conversation."""
    destination_preferences: list[DestinationPreference] = Field(default_factory=list)
    family_condition: Optional[FamilyCondition] = None
    job_status: Optional[JobStatus] = None
    budget: Optional[BudgetRange] = None
    timeline: Optional[str] = None
    current_location: Optional[str] = None


class ExtractedFact(BaseModel):
    """A fact extracted from conversation."""
    type: FactType
    value: str
    confidence: float = Field(ge=0, le=1, description="Confidence score 0-1")
    requires_confirmation: bool = Field(
        default=False,
        description="Whether this fact needs user confirmation"
    )
    context: str = Field(default="", description="Context from the conversation")


class FactExtractionResult(BaseModel):
    """Result of fact extraction from conversation."""
    facts: list[ExtractedFact] = Field(default_factory=list)
    user_conditions: Optional[UserConditions] = None
    has_changes: bool = False
    summary: str = ""


class PendingConfirmation(BaseModel):
    """A pending confirmation for HITL workflow."""
    id: Optional[str] = None
    user_id: str
    fact_type: FactType
    old_value: Optional[str] = None
    new_value: str
    confidence: float
    context: str
    status: str = "pending"
    created_at: Optional[datetime] = None


class ChatMessage(BaseModel):
    """A chat message."""
    role: str = Field(pattern="^(user|assistant|system)$")
    content: str


class ChatRequest(BaseModel):
    """Request for chat endpoint."""
    messages: list[ChatMessage]
    user_id: Optional[str] = None
    session_id: Optional[str] = None


class ArticleRecommendation(BaseModel):
    """An article recommendation."""
    id: str
    title: str
    slug: str
    summary: str
    relevance_score: float
    tags: list[str] = Field(default_factory=list)


class ChatResponse(BaseModel):
    """Response from chat endpoint (non-streaming)."""
    content: str
    extracted_facts: list[ExtractedFact] = Field(default_factory=list)
    pending_confirmations: list[PendingConfirmation] = Field(default_factory=list)
    recommendations: list[ArticleRecommendation] = Field(default_factory=list)
