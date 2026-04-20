from fastapi import Request, HTTPException
from app.database.redis import get_redis

async def rate_limit_middleware(request: Request, call_next, max_requests: int = 100, window: int = 60):
    client_ip = request.client.host
    redis = get_redis()
    
    key = f"rate_limit:{client_ip}"
    current = redis.get(key)
    
    if current and int(current) >= max_requests:
        raise HTTPException(status_code=429, detail="Too many requests")
    
    pipe = redis.pipeline()
    pipe.incr(key)
    pipe.expire(key, window)
    pipe.execute()
    
    return await call_next(request)