from pydantic import BaseModel
from typing import List, Optional

class RecapBase(BaseModel):
    title: str
    content: str
    movieId: str

class RecapCreate(RecapBase):
    images: List[str] = []
    videos: List[str] = []
    isPublic: bool = True

class RecapUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    images: Optional[List[str]] = None
    videos: Optional[List[str]] = None
    isPublic: Optional[bool] = None

class RecapResponse(RecapBase):
    id: str
    userId: str
    likes: int
    views: int
    isPublic: bool
    createdAt: str
    updatedAt: str

    class Config:
        from_attributes = True