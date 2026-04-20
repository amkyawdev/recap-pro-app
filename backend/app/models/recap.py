from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class RecapBase(BaseModel):
    movieId: str
    userId: str
    title: str
    content: str
    images: List[str] = []
    videos: List[str] = []
    isPublic: bool = True

class Recap(RecapBase):
    id: str
    likes: int = 0
    views: int = 0
    createdAt: datetime
    updatedAt: datetime

    class Config:
        from_attributes = True

class RecapCreate(RecapBase):
    pass

class RecapUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    images: Optional[List[str]] = None
    videos: Optional[List[str]] = None
    isPublic: Optional[bool] = None