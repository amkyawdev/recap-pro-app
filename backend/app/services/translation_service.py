from app.services.gemini_service import generate_content

async def translate_text(text: str, source_language: str, target_language: str) -> str:
    prompt = f"Translate the following text from {source_language} to {target_language}:\n\n{text}"
    return await generate_content(prompt, max_tokens=2048)