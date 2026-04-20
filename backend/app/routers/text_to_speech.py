from fastapi import APIRouter, HTTPException
from app.services.elevenlabs_service import generate_speech

router = APIRouter()

@router.post("/")
async def text_to_speech(text: str, voice_id: str = "21m00Tcm4TlvDq8ikWAM"):
    try:
        audio_url = await generate_speech(text, voice_id)
        return {"audio_url": audio_url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))