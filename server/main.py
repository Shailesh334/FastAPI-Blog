
from models import BlogRequest , BlogResponse

from fastapi import status
from fastapi import HTTPException
from fastapi import FastAPI
from data import blogs


app =  FastAPI()


@app.get("/")
@app.get("/api/blogs" , response_model=list[BlogResponse])
def home():
    return blogs


@app.get("/api/blogs/{id}" , response_model=BlogResponse)
def get_blog(id : int ):
    for blog in blogs:
        if blog['id'] == id:
            return blog
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Blog not found")

@app.post("/api/blogs" , response_model=BlogResponse)
def create_blog(blog : BlogRequest):
    max_id = max((b["id"] for b in blogs), default=0)

    new_blog = {
        "id" : max_id + 1,
        "title" : blog.title,
        "author" : blog.author,
        "content" : blog.content,
        "date_posted" : "April-20-2025"
    }

    blogs.append(new_blog)
    return new_blog