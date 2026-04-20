import requests
from app.config import settings

GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta"

async def generate_content(prompt: str, max_tokens: int = 1024, temperature: float = 0.7) -> str:
    if not settings.GEMINI_API_KEY:
        raise ValueError("GEMINI_API_KEY is not configured")
    
    url = f"{GEMINI_BASE_URL}/models/gemini-pro:generateContent?key={settings.GEMINI_API_KEY}"
    
    response = requests.post(url, json={
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "maxOutputTokens": max_tokens,
            "temperature": temperature,
        },
    })
    
    if response.status_code != 200:
        raise Exception("Failed to generate content")
    
    data = response.json()
    return data["candidates"][0]["content"]["parts"][0]["text"]