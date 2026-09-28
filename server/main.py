

from sqlalchemy.orm import selectinload
import contextlib
from models import Base
from sqlalchemy import select
from starlette.staticfiles import StaticFiles
from sqlalchemy.ext.asyncio import AsyncSession
from contextlib import asynccontextmanager
from sqlalchemy.util.typing import Annotated
from fastapi import FastAPI , HTTPException , status , Depends


import models
from schemas import BlogCreate , BlogResponse , UserCreate , UserResponse , BlogUpdate , UserUpdate
from database import  engine , get_db



@asynccontextmanager
async def lifespan(_app : FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    await engine.dispose()


app =  FastAPI(lifespan=lifespan)

app.mount("/static" , StaticFiles(directory="static") , name="static")
app.mount("/media" , StaticFiles(directory="media") , name="media")


# Create a user
@app.post("/api/users" , response_model=UserResponse , status_code=status.HTTP_201_CREATED)
async def create_user(user : UserCreate , db : Annotated[AsyncSession , Depends(get_db)]):
    result = db.execute(select(models.User).where(models.User.username == user.username))
    existing_user = result.scalars().first()
    if existing_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Username already exists")
    
    result = await db.execute(select(models.User).where(models.User.email == user.email))
    existing_user = result.scalars().first()
    if existing_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already exists")
    
    new_user = models.User(
        username = user.username,
        email = user.email
    )
    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)
    return new_user


# Get all users
@app.get("/api/users" , response_model=list[UserResponse] , status_code=status.HTTP_200_OK)
async def get_users(db : Annotated[AsyncSession , Depends(get_db)]):
    result = await db.execute(select(models.User))
    users = result.scalars().all()
    return users

# Get a single user
@app.get("/api/users/{id}" , response_model=UserResponse , status_code=status.HTTP_200_OK)
async def get_user(id : int , db:Annotated[AsyncSession , Depends(get_db)]):
    result = await db.execute(select(models.User).where(models.User.id == id))    
    user = result.scalars().first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return user

# Update a user fully
@app.put("/api/users/{user_id}" , response_model=UserResponse , status_code= status.HTTP_200_OK)
async def update_user_fully(user_id : int , user : UserCreate , db : Annotated[AsyncSession , Depends(get_db)]):
    result = await db.execute(select(models.User).where(models.User.id == user_id))
    existing_user = result.scalars().first()
    if not existing_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    existing_user.username = user.username
    existing_user.email = user.email
    
    await db.commit()
    await db.refresh(existing_user)

    return existing_user

# Update a user partially
@app.patch("/api/users/{user_id}" , response_model=UserResponse , status_code=status.HTTP_200_OK)
async def update_user_partially(user_id : int , user : UserUpdate , db : Annotated[AsyncSession , Depends(get_db)]):
    result = await db.execute(select(models.User).where(models.User.id == user_id))
    existing_user = result.scalars().first()
    if not existing_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    user_data = user.model_dump(exclude_unset=True)

    if "username" in user_data:
        already_username = db.execute(select(models.User).where(models.User.username == user_data["username"])).scalars().first()
        if already_username:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST , detail= "Username already exists")
    
    if "email" in user_data:
        already_email = db.execute(select(models.User).where(models.User.email == user.email)).scalars().first()
        if already_email:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST , detail= "Email already exists")


   

    for key , value in user_data.items():
        setattr(existing_user, key , value)
    
    await db.commit()
    await db.refresh(existing_user)
    return existing_user 

# Delete a user
@app.delete("/api/users/{user_id}" , status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id : int , db : Annotated[AsyncSession , Depends(get_db)]):
    result = await db.execute(select(models.User).where(models.User.id == user_id))
    existing_user = result.scalars().first()
    if not existing_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    await db.delete(existing_user)
    await db.commit()
    return 

# Create new blog
@app.post("/api/blogs" , response_model=BlogResponse , status_code=status.HTTP_201_CREATED)
async def create_blog(blog: BlogCreate , db : Annotated[AsyncSession , Depends(get_db)]):
    result = await db.execute(select(models.User).where(models.User.id == blog.author_id))
    user = result.scalars().first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
        
    new_blog = models.Blog(
        title = blog.title,
        content = blog.content,
        author_id = blog.author_id
    )
    db.add(new_blog)
    await db.commit()
    await db.refresh(new_blog , attribute_names=["author"])

    return new_blog

# get all blogs
@app.get("/api/blogs" , response_model=list[BlogResponse])
async def home(db : Annotated[AsyncSession , Depends(get_db)]):
    result = await db.execute(select(models.Blog).options(selectinload(models.Blog.author)))
    blogs = result.scalars().all()
    return blogs


# Get a single blog
@app.get("/api/blogs/{id}" , response_model=BlogResponse , status_code=status.HTTP_200_OK)
async def get_blog(id : int , db : Annotated[AsyncSession , Depends(get_db)]):
    result = await db.execute(select(models.Blog).options(selectinload(models.Blog.author).where(models.Blog.id == id)))
    blog = result.scalars().first()

    if not blog:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND , detail = "Blog not found")
    
    return blog


# Update a blog fully (put)
@app.put("/api/blogs/{post_id}" , response_model=BlogResponse , status_code=status.HTTP_200_OK)
async def updtae_blog_full(post_id : int , post : BlogCreate , db : Annotated[AsyncSession , Depends(get_db)]):
    result = await db.execute(select(models.Blog).options(selectinload(models.Blog.author)).where(models.Blog.id == post_id))
    blog = result.scalars().first()

    if not blog:
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND , detail = "Blog not found")
    
    blog.title = post.title
    blog.content = post.content
    blog.id = post_id
    blog.author_id = post.author_id

    await db.commit()
    await db.refresh(blog)
    return blog


# Update a blog partially
@app.patch("/api/blogs/{post_id}" , response_model=BlogResponse , status_code=status.HTTP_200_OK)
async def update_blog_partially(post_id : int , post : BlogUpdate , db : Annotated[AsyncSession , Depends(get_db)]):
    result = await db.execute(select(models.Blog).options(selectinload(models.Blog.author)).where(models.Blog.id == post_id))
    blog = result.scalars().first()
    if not blog:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Blog not found")

    blog_data = post.model_dump(exclude_unset=True)
    for key , value in blog_data.items():
        setattr(blog , key , value)

    await db.commit()
    await db.refresh(blog)
    return blog

# Delete a blog
@app.delete("/api/blogs/{post_id}" , status_code=status.HTTP_204_NO_CONTENT)
async def delete_blog(post_id : int , db : Annotated[AsyncSession , Depends(get_db)]):
    result = await db.execute(select(models.Blog).where(models.Blog.id == post_id))
    blog = result.scalars().first()

    if not blog:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Blog not found")

    await db.delete(blog)
    await db.commit()
   

    return {"message" : "Blog deleted successfully"}

# Get blogs of specific user
@app.get("/api/users/{id}/posts" , response_model=list[BlogResponse])
async def get_users_posts(id : int , db : Annotated[AsyncSession , Depends(get_db)]):
    result = await db.execute(select(models.User).where(models.User.id == id))
    user = result.scalars().first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    result = await db.execute(select(models.Blog).options(selectinload(models.Blog.author)).where(models.Blog.author_id == id))
    posts = result.scalars().all()
    return posts
    




    








