import requests
from app.config import settings

GROQ_BASE_URL = "https://api.groq.com/openai/v1"

async def chat(messages: list, model: str = "mixtral-8x7b-32768") -> str:
    if not settings.GROQ_API_KEY:
        raise ValueError("GROQ_API_KEY is not configured")
    
    url = f"{GROQ_BASE_URL}/chat/completions"
    
    response = requests.post(url, headers={
        "Authorization": f"Bearer {settings.GROQ_API_KEY}",
        "Content-Type": "application/json",
    }, json={
        "model": model,
        "messages": messages,
    })
    
    if response.status_code != 200:
        raise Exception("Failed to get chat completion")
    
    data = response.json()
    return data["choices"][0]["message"]["content"]

async def generate_recap(movie_title: str, plot_summary: str) -> str:
    messages = [
        {"role": "system", "content": "You are a creative writer specialized in movie recaps."},
        {"role": "user", "content": f"Write a recap for '{movie_title}'. Plot: {plot_summary}"},
    ]
    return await chat(messages)