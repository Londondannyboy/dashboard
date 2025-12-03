"""ZEP Knowledge Graph integration."""

import os
import httpx
from typing import Optional


ZEP_API_URL = os.getenv("ZEP_API_URL", "https://api.getzep.com/api/v2")
ZEP_API_KEY = os.getenv("ZEP_API_KEY", "")

# Graph IDs from environment
RELOCATION_GRAPH_ID = os.getenv("ZEP_RELOCATION_GRAPH_ID", "")
PLACEMENT_GRAPH_ID = os.getenv("ZEP_PLACEMENT_GRAPH_ID", "")
USERS_GRAPH_ID = os.getenv("ZEP_USERS_GRAPH_ID", "")


def get_headers() -> dict:
    """Get headers for ZEP API requests."""
    return {
        "Authorization": f"Api-Key {ZEP_API_KEY}",
        "Content-Type": "application/json"
    }


async def search_graph(graph_id: str, query: str, limit: int = 10) -> list[dict]:
    """Search a ZEP knowledge graph."""
    if not ZEP_API_KEY or not graph_id:
        return []

    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(
                f"{ZEP_API_URL}/graphs/{graph_id}/search",
                json={
                    "query": query,
                    "limit": limit
                },
                headers=get_headers(),
                timeout=30.0
            )
            response.raise_for_status()
            data = response.json()
            return data.get("results", [])
        except httpx.HTTPError:
            return []


async def search_relocation_content(query: str, limit: int = 5) -> list[dict]:
    """Search relocation-related content."""
    return await search_graph(RELOCATION_GRAPH_ID, query, limit)


async def search_placement_content(query: str, limit: int = 5) -> list[dict]:
    """Search placement/job-related content."""
    return await search_graph(PLACEMENT_GRAPH_ID, query, limit)


async def get_user_graph(user_id: str) -> Optional[dict]:
    """Get user's knowledge graph data."""
    if not ZEP_API_KEY or not USERS_GRAPH_ID:
        return None

    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(
                f"{ZEP_API_URL}/graphs/{USERS_GRAPH_ID}/users/{user_id}",
                headers=get_headers(),
                timeout=30.0
            )
            response.raise_for_status()
            return response.json()
        except httpx.HTTPError:
            return None


async def sync_user_facts(user_id: str, facts: list[dict]) -> dict:
    """Sync user facts to ZEP knowledge graph."""
    if not ZEP_API_KEY or not USERS_GRAPH_ID:
        return {"status": "skipped", "reason": "ZEP not configured"}

    async with httpx.AsyncClient() as client:
        try:
            # Add facts as nodes/edges in the user's graph
            response = await client.post(
                f"{ZEP_API_URL}/graphs/{USERS_GRAPH_ID}/users/{user_id}/facts",
                json={"facts": facts},
                headers=get_headers(),
                timeout=30.0
            )
            response.raise_for_status()
            return response.json()
        except httpx.HTTPError as e:
            return {"status": "error", "error": str(e)}


async def add_memory_to_graph(user_id: str, content: str, metadata: Optional[dict] = None) -> dict:
    """Add a memory/conversation to the user's graph."""
    if not ZEP_API_KEY or not USERS_GRAPH_ID:
        return {"status": "skipped", "reason": "ZEP not configured"}

    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(
                f"{ZEP_API_URL}/graphs/{USERS_GRAPH_ID}/users/{user_id}/memory",
                json={
                    "content": content,
                    "metadata": metadata or {}
                },
                headers=get_headers(),
                timeout=30.0
            )
            response.raise_for_status()
            return response.json()
        except httpx.HTTPError as e:
            return {"status": "error", "error": str(e)}


async def get_article_recommendations(user_id: str, query: str, graph_type: str = "relocation") -> list[dict]:
    """Get article recommendations based on user context and query."""
    if graph_type == "placement":
        results = await search_placement_content(query)
    else:
        results = await search_relocation_content(query)

    # Transform results to article recommendations
    articles = []
    for result in results:
        if result.get("type") == "article":
            articles.append({
                "id": result.get("id", ""),
                "title": result.get("title", ""),
                "slug": result.get("slug", ""),
                "summary": result.get("summary", ""),
                "relevance_score": result.get("score", 0.0),
                "tags": result.get("tags", [])
            })

    return articles
