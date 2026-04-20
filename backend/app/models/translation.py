from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class TranslationBase(BaseModel):
    recapId: str
    language: str
    translatedContent: str

class Translation(TranslationBase):
    id: str
    createdAt: datetime

    class Config:
        from_attributes = True

class TranslationCreate(TranslationBase):
    pass

class TranslationResponse(BaseModel):
    id: str
    recapId: str
    language: str
    translatedContent: str
    createdAt: datetime