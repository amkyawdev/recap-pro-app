from fastapi import APIRouter, Depends
from typing import List
from app.schemas.movie_schema import MovieResponse

router = APIRouter()

@router.get("/", response_model=List[MovieResponse])
async def get_movies():
    # Mock movie list
    return []

@router.get("/{movie_id}", response_model=MovieResponse)
async def get_movie(movie_id: str):
    return {"id": movie_id, "title": "Sample Movie", "year": 2024, "overview": "Sample", "rating": 8.5}

@router.post("/")
async def create_movie(movie: MovieResponse):
    return movie