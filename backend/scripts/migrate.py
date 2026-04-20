import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.database.mongodb import client

def migrate():
    db = client['recap_pro']
    
    # Create indexes
    db.movies.create_index('title')
    db.recaps.create_index('movieId')
    db.recaps.create_index('userId')
    db.users.create_index('email', unique=True)
    
    print("Migration completed successfully!")

if __name__ == '__main__':
    migrate()