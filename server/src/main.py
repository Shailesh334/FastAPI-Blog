
from fastapi import FastAPI

app =  FastAPI()

data = [
  {
    "id": 1,
    "author": "Shailesh",
    "content": "FastAPI is a modern Python framework for building fast and reliable APIs."
  },
  {
    "id": 2,
    "author": "Rahul",
    "content": "React makes it easy to build reusable and interactive user interfaces."
  },
  {
    "id": 3,
    "author": "Priya",
    "content": "Learning backend development becomes easier when you build projects alongside tutorials."
  },
  {
    "id": 4,
    "author": "Amit",
    "content": "Python is a great language for beginners because of its simple and readable syntax."
  },
  {
    "id": 5,
    "author": "Neha",
    "content": "APIs allow different applications to communicate with each other."
  }
]


@app.get("/")
def home():
    return data