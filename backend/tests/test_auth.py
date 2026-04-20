import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Recap Pro API"}

def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}

def test_login():
    response = client.post("/api/auth/login", data={"username": "test@example.com", "password": "password"})
    assert response.status_code == 200

def test_register():
    response = client.post("/api/auth/register", json={
        "email": "test@example.com",
        "password": "password",
        "displayName": "Test User"
    })
    assert response.status_code == 200