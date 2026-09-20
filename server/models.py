
from sqlalchemy.orm import DeclarativeBase , Mapped , mapped_column , relationship , ForeignKey


class Base(DeclarativeBase):
    pass


class User(Base):
    __tablename__ = "users"

    id : Mapped[int] = mapped_column( primary_key=True , index=True , autoincrement=True)
    username : Mapped[str] = mapped_column( unique=True , nullable=False )
    email : Mapped[str] = mapped_column(unique=True , nullable=False)
    hashed_password : Mapped[str] = mapped_column( nullable=False )
    
    blogs : Mapped[list["Blog"]] =  relationship(back_populates="author")


class Blog(Base):
    __tablename__ = "blogs"

    id : Mapped[int] = mapped_column(primary_key=True , index=True , autoincrement=True)
    title : Mapped[str] = mapped_column( unique=True , nullable=False )
    content : Mapped[str] = mapped_column( nullable=False )
    author_id : Mapped[int] = mapped_column( ForeignKey(User.id) , nullable=False )

    author : Mapped["User"] = relationship(back_populates="blogs")
    