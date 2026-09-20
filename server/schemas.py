
from pydantic import BaseModel , ConfigDict , Field , EmailStr

from datetime import datetime , UTC

class UserBase(BaseModel):
    username : str = Field(min_length=4 , max_length=20)
    email : EmailStr = Field(max_length= 20)
    

class UserCreate(UserBase):
    hashed_password : str = Field(min_length=6 , max_length=20)

class UserResponse(UserBase):
    id : int 
    


class BlogBase(BaseModel):
    title : str = Field(min_length=1 , max_length=100)
    author : str = Field(min_length=1 , max_length=50)
    content : str = Field(min_length=1 , max_length=1000)
    date_posted : str = Field(min_length=1 , max_length=100)
    
class BlogResponse(BlogBase):
    model_config = ConfigDict(from_attributes=True)
    pass

class BlogRequest(BaseModel):
    title : str = Field(min_length=1 , max_length=100)
    author : str = Field(min_length=1 , max_length=50)
    content : str = Field(min_length=1 , max_length=1000)
 
    




