

from models import Base
from sqlalchemy import select
from starlette.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from sqlalchemy.util.typing import Annotated
from fastapi import FastAPI , HTTPException , status , Depends


import models
from schemas import BlogCreate , BlogResponse , UserCreate , UserResponse
from database import  engine , get_db

Base.metadata.create_all(bind=engine)


app =  FastAPI()

app.mount("/static" , StaticFiles(directory="static") , name="static")
app.mount("/media" , StaticFiles(directory="media") , name="media")


# Create a user
@app.post("/api/users" , response_model=UserResponse , status_code=status.HTTP_201_CREATED)
def create_user(user : UserCreate , db : Annotated[Session , Depends(get_db)]):
    result = db.execute(select(models.User).where(models.User.username == user.username))
    existing_user = result.scalars().first()
    if existing_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Username already exists")
    
    result = db.execute(select(models.User).where(models.User.email == user.email))
    existing_user = result.scalars().first()
    if existing_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already exists")
    
    new_user = models.User(
        username = user.username,
        email = user.email
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


# Get all users
@app.get("/api/users" , response_model=list[UserResponse] , status_code=status.HTTP_200_OK)
def get_users(db : Annotated[Session , Depends(get_db)]):
    result = db.execute(select(models.User))
    users = result.scalars().all()
    return users

# Get a single user
@app.get("/api/users/{id}" , response_model=UserResponse , status_code=status.HTTP_200_OK)
def get_user(id : int , db:Annotated[Session , Depends(get_db)]):
    result = db.execute(select(models.User).where(models.User.id == id))    
    user = result.scalars().first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return user


# Create new blog
@app.post("/api/blogs" , response_model=BlogResponse , status_code=status.HTTP_201_CREATED)
def create_blog(blog: BlogCreate , db : Annotated[Session , Depends(get_db)]):
    result = db.execute(select(models.User).where(models.User.id == blog.author_id))
    user = result.scalars().first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
        
    new_blog = models.Blog(
        title = blog.title,
        content = blog.content,
        author_id = blog.author_id
    )
    db.add(new_blog)
    db.commit()
    db.refresh(new_blog)

    return new_blog

# get all blogs
@app.get("/api/blogs" , response_model=list[BlogResponse])
def home(db : Annotated[Session , Depends(get_db)]):
    result = db.execute(select(models.Blog))
    blogs = result.scalars().all()
    return blogs


# Get a single blog
@app.get("/api/blogs/{id}" , response_model=BlogResponse , status_code=status.HTTP_200_OK)
def get_blog(id : int , db : Annotated[Session , Depends(get_db)]):
    result = db.execute(select(models.Blog).where(models.Blog.id == id))
    blog = result.scalars().first()

    if not blog:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND , detail = "Blog not found")
    
    return blog



# Get blogs of specific user
@app.get("/api/users/{id}/posts" , response_model=list[BlogResponse])
def get_users_posts(id : int , db : Annotated[Session , Depends(get_db)]):
    result = db.execute(select(models.User).where(models.User.id == id))
    user = result.scalars().first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    result = db.execute(select(models.Blog).where(models.Blog.author_id == id))
    posts = result.scalars().all()
    return posts
    




    








