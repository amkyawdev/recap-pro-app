import requests
from app.config import settings

ELEVENLABS_BASE_URL = "https://api.elevenlabs.io/v1"

async def generate_speech(text: str, voice_id: str = "21m00Tcm4TlvDq8ikWAM") -> str:
    if not settings.ELEVENLABS_API_KEY:
        raise ValueError("ELEVENLABS_API_KEY is not configured")
    
    url = f"{ELEVENLABS_BASE_URL}/text-to-speech/{voice_id}"
    
    response = requests.post(url, headers={
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": settings.ELEVENLABS_API_KEY,
    }, json={
        "text": text,
        "model_id": "eleven_monolingual_v1",
    })
    
    if response.status_code != 200:
        raise Exception("Failed to generate speech")
    
    # In production, save to CDN and return URL
    return "data:audio/mpeg;base64," + response.content.hex()[:100]