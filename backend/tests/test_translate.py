import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_translate():
    response = client.post("/api/translate/", json={
        "text": "Hello",
        "source_language": "en",
        "target_language": "es"
    })
    assert response.status_code == 500  # No API key configured

def test_translate_missing_text():
    response = client.post("/api/translate/", json={
        "text": "",
        "source_language": "en",
        "target_language": "es"
    })
    assert response.status_code == 422