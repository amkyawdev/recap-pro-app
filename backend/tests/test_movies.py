import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_get_movies():
    response = client.get("/api/movies/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_movie():
    response = client.get("/api/movies/1")
    assert response.status_code == 200
    data = response.json()
    assert "id" in data
    assert "title" in data