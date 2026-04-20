from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    email: EmailStr
    displayName: str
    photoURL: Optional[str] = None

class User(UserBase):
    id: str
    role: str = "user"
    createdAt: datetime

    class Config:
        from_attributes = True

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: str
    role: str
    createdAt: datetime