from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, movies, recaps, translate, text_to_speech

app = FastAPI(title="Recap Pro API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(movies.router, prefix="/api/movies", tags=["movies"])
app.include_router(recaps.router, prefix="/api/recaps", tags=["recaps"])
app.include_router(translate.router, prefix="/api/translate", tags=["translate"])
app.include_router(text_to_speech.router, prefix="/api/tts", tags=["tts"])

@app.get("/")
async def root():
    return {"message": "Recap Pro API"}

@app.get("/health")
async def health():
    return {"status": "healthy"}