
from pydantic import BaseModel , ConfigDict , Field , EmailStr

from datetime import datetime , UTC



class UserBase(BaseModel):
    username : str = Field(min_length=4 , max_length=20)
    email : EmailStr = Field(max_length= 20)
    
class UserCreate(UserBase):
    pass

class UserResponse(UserBase):
    model_config = ConfigDict(from_attributes=True)

    id : int 
    image_file : str | None
    image_path : str




class BlogBase(BaseModel):
    title : str = Field(min_length=1 , max_length=100)
    content : str = Field(min_length=1 , max_length=1000)
  
class BlogCreate(BlogBase):
    author_id : int
    
class BlogResponse(BlogBase):
    model_config = ConfigDict(from_attributes=True)

    id : int 
    date_posted : datetime
    author_id : int 
    author : UserResponse


 
    




