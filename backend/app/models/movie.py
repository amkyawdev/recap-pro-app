from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class MovieBase(BaseModel):
    title: str
    year: int
    posterUrl: Optional[str] = None
    backdropUrl: Optional[str] = None
    overview: str
    genre: List[str] = []
    rating: float
    runtime: int
    director: str
    cast: List[str] = []

class Movie(MovieBase):
    id: str
    createdAt: datetime
    updatedAt: datetime

    class Config:
        from_attributes = True