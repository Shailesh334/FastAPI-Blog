
from sqlalchemy.ext.asyncio import create_async_engine , async_sessionmaker , AsyncSession



SQLITE_URL = "sqlite+aiosqlite:///./blog_db.db"

# 1. Create engine
engine =  create_async_engine(
    SQLITE_URL,
    connect_args= {"check_same_thread" : False}
)

# 2. Create sessionLocal
AsyncSessionLocal = async_sessionmaker(bind=engine , class_ = AsyncSession , expire_on_commit=False)

# 3. Get DB
async def get_db():
    async with AsyncSessionLocal() as db:
        yield db

