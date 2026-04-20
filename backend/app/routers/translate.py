from fastapi import APIRouter, HTTPException
from app.schemas.translation_schema import TranslationRequest, TranslationResponse
from app.services.translation_service import translate_text

router = APIRouter()

@router.post("/", response_model=TranslationResponse)
async def translate(request: TranslationRequest):
    try:
        translated = await translate_text(
            request.text,
            request.source_language,
            request.target_language
        )
        return TranslationResponse(
            original_text=request.text,
            translated_text=translated,
            source_language=request.source_language,
            target_language=request.target_language
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))