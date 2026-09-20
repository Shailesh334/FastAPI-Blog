
from sqlalchemy import create_engine , sessionmaker



SQLITE_URL = "sqlite:///./blog_db.db"

# 1. Create engine
engine =  create_engine(
    SQLITE_URL,
    connect_args= {"check_same_thread" : False}
)

# 2. Create sessionLocal
SessionLocal = sessionmaker(autocommit= False , autoFlush=False , bind= engine)

# 3. Get DB
def get_db():
    with SessionLocal() as db:
        yield db

