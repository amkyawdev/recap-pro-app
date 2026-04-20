import boto3
from app.config import settings

class CDNService:
    def __init__(self):
        self.s3 = boto3.client('s3',
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
        )
        self.bucket = settings.CDN_BUCKET

    async def upload_file(self, file_data: bytes, key: str):
        self.s3.put_object(Bucket=self.bucket, Key=key, Body=file_data)
        return f"https://{self.bucket}.s3.amazonaws.com/{key}"

    async def delete_file(self, key: str):
        self.s3.delete_object(Bucket=self.bucket, Key=key)

cdn_service = CDNService()