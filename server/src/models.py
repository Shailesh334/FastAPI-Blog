import string
from pydantic import BaseModel , ConfigDict , Field





class BlogBase(BaseModel):
    id : int
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
 
    




