from pymongo import MongoClient
from app.config import settings

client = MongoClient(settings.MONGODB_URL)
db = client[settings.MONGODB_DB]

def get_db():
    return db