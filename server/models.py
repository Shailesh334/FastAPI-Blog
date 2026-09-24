
from datetime import UTC , datetime 
from sqlalchemy import String , DateTime , Text , Integer , ForeignKey
from sqlalchemy.orm import DeclarativeBase , Mapped , mapped_column , relationship 


class Base(DeclarativeBase):
    pass


class User(Base):
    __tablename__ = "users"

    id : Mapped[int] = mapped_column(Integer , primary_key=True , index=True , autoincrement=True)
    username : Mapped[str] = mapped_column(String(50), unique=True , nullable=False )
    email : Mapped[str] = mapped_column( String(120),unique=True , nullable=False)
    image_file : Mapped[str | None] = mapped_column( String(255) , nullable=True , default= None )
    
    blogs : Mapped[list["Blog"]] =  relationship(back_populates="author" , cascade="all , delete-orphan")

    @property
    def image_path(self) -> str:
        if self.image_file:
            return f"/static/profile_pics/{self.image_file}"
        
        return "/static/profile_pics/default.jpg"


class Blog(Base):
    __tablename__ = "blogs"

    id : Mapped[int] = mapped_column(Integer,primary_key=True , index=True , autoincrement=True)
    title : Mapped[str] = mapped_column( String(100), unique=True , nullable=False )
    content : Mapped[str] = mapped_column( Text, nullable=False )
    author_id : Mapped[int] = mapped_column( ForeignKey(User.id) , nullable=False , index = True)
    date_posted : Mapped[datetime] = mapped_column( DateTime(timezone = True) , default = lambda: datetime.now(UTC)) 



    author : Mapped["User"] = relationship(back_populates="blogs")
    