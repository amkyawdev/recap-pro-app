from fastapi import APIRouter, Depends, HTTPException
from typing import List
from app.schemas.recap_schema import RecapResponse, RecapCreate, RecapUpdate

router = APIRouter()

@router.get("/", response_model=List[RecapResponse])
async def get_recaps():
    return []

@router.get("/{recap_id}", response_model=RecapResponse)
async def get_recap(recap_id: str):
    return {
        "id": recap_id,
        "movieId": "1",
        "userId": "1",
        "title": "Sample Recap",
        "content": "This is a sample recap",
        "likes": 0,
        "views": 0,
        "isPublic": True,
        "createdAt": "2024-01-01T00:00:00",
        "updatedAt": "2024-01-01T00:00:00"
    }

@router.post("/", response_model=RecapResponse)
async def create_recap(recap: RecapCreate):
    return {**recap.dict(), "id": "1", "likes": 0, "views": 0, "createdAt": "2024-01-01T00:00:00", "updatedAt": "2024-01-01T00:00:00"}

@router.put("/{recap_id}", response_model=RecapResponse)
async def update_recap(recap_id: str, recap: RecapUpdate):
    return {"id": recap_id, "movieId": "1", "userId": "1", "title": "Updated", "content": "Updated content", "likes": 0, "views": 0, "isPublic": True, "createdAt": "2024-01-01T00:00:00", "updatedAt": "2024-01-01T00:00:00"}

@router.delete("/{recap_id}")
async def delete_recap(recap_id: str):
    return {"message": "Recap deleted"}