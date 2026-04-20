from pydantic import BaseModel
from typing import Optional

class MovieBase(BaseModel):
    title: str
    year: int
    posterUrl: Optional[str] = None
    overview: str
    rating: float

class MovieCreate(MovieBase):
    pass

class MovieResponse(MovieBase):
    id: str

    class Config:
        from_attributes = True