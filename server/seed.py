from datetime import datetime, UTC
from sqlalchemy import select
from database import engine, SessionLocal
from models import Base, User, Blog
from data import blogs as seed_blogs

def seed_database():
    Base.metadata.create_all(bind=engine)
    
    with SessionLocal() as db:
        print("[+] Seeding database...")
        
        # 1. Create Users
        users_data = [
            {"username": "shailesh", "email": "shailesh@example.com"},
            {"username": "rahul", "email": "rahul@example.com"},
            {"username": "priya", "email": "priya@example.com"},
            {"username": "amit", "email": "amit@example.com"},
            {"username": "neha", "email": "neha@example.com"},
            {"username": "karan", "email": "karan@example.com"},
            {"username": "ananya", "email": "ananya@example.com"},
            {"username": "vikram", "email": "vikram@example.com"},
        ]
        
        user_map = {}
        for u in users_data:
            existing = db.execute(select(User).where(User.username == u["username"])).scalars().first()
            if not existing:
                existing = db.execute(select(User).where(User.email == u["email"])).scalars().first()
                
            if not existing:
                new_user = User(username=u["username"], email=u["email"])
                db.add(new_user)
                db.commit()
                db.refresh(new_user)
                print(f"Created user: {new_user.username} (ID: {new_user.id})")
                user_map[u["username"].lower()] = new_user.id
            else:
                user_map[u["username"].lower()] = existing.id
                print(f"User already exists: {existing.username} (ID: {existing.id})")

        # 2. Create Blogs
        for item in seed_blogs:
            author_key = item["author"].lower()
            author_id = user_map.get(author_key)
            if not author_id:
                author_id = next(iter(user_map.values()))
                
            existing_blog = db.execute(select(Blog).where(Blog.title == item["title"])).scalars().first()
            if not existing_blog:
                new_blog = Blog(
                    title=item["title"],
                    content=item["content"],
                    author_id=author_id,
                    date_posted=datetime.now(UTC)
                )
                db.add(new_blog)
                db.commit()
                db.refresh(new_blog)
                print(f"Created blog: '{new_blog.title}' (Author ID: {new_blog.author_id})")
            else:
                print(f"Blog already exists: '{existing_blog.title}'")

        print("[OK] Database seeding complete!")

if __name__ == "__main__":
    seed_database()
