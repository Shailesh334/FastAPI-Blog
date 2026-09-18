import BlogCard from "../components/BlogCard";

const samplePosts = [
  {
    id: 1,
    author: "Shailesh Gurle",
    date: "April 20, 2025",
    title: "FastAPI is Awesome",
    content:
      "This framework is really easy to use and super fast. Automatic OpenAPI docs and native async support make building scalable backends a breeze.",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    author: "Jane Doe",
    date: "April 21, 2025",
    title: "Python is Great for Web Development",
    content:
      "Python is a great language for web development, and FastAPI makes it even better with type hints, data validation via Pydantic, and high throughput.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    author: "Alex Rivera",
    date: "April 23, 2025",
    title: "Async and Await in Python: Concurrency Demystified",
    content:
      "Understanding the event loop, async tasks, and how asynchronous I/O can handle thousands of concurrent requests without breaking a sweat.",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    author: "Sarah Chen",
    date: "April 25, 2025",
    title: "Modern Frontend Architecture with React & Tailwind CSS",
    content:
      "A deep dive into clean component design, state management strategies, and creating fluid, responsive user interfaces effortlessly.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    author: "Michael Brown",
    date: "April 28, 2025",
    title: "Mastering Database Migrations with Alembic & SQLAlchemy 2.0",
    content:
      "Database schema versioning doesn't have to be stressful. Learn how to write seamless migration scripts and manage relationships reliably.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    author: "Elena Rostova",
    date: "May 02, 2025",
    title: "Securing Your REST APIs: JWT Authentication & OAuth2",
    content:
      "Learn best practices for securing API endpoints, implementing refresh token rotation, password hashing with bcrypt, and role-based access control.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    author: "David Kim",
    date: "May 05, 2025",
    title: "Containerizing Full-Stack Web Applications with Docker Compose",
    content:
      "Streamline your local development and production deployments by orchestrating FastAPI, React, PostgreSQL, and Redis in lightweight containers.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
];

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Left Column: Blog Feed (8 cols on large screens, full width on mobile/tablet) */}
        <div className="lg:col-span-8">
          {samplePosts.map((post) => (
            <BlogCard
              key={post.id}
              author={post.author}
              date={post.date}
              title={post.title}
              content={post.content}
              avatar={post.avatar}
            />
          ))}
        </div>

        {/* Right Column: Sidebar (4 cols on large screens, full width on mobile/tablet) */}
        <aside className="lg:col-span-4">
          <div className="bg-white dark:bg-[#282a2d] border border-gray-200 dark:border-gray-700/60 rounded-md p-4 sm:p-5 shadow-xs transition-colors duration-200">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-1 tracking-tight">
              Our Sidebar
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              You can put any information here you'd like.
            </p>

            {/* Sidebar list group */}
            <div className="border border-gray-200 dark:border-gray-700/80 rounded-md divide-y divide-gray-200 dark:divide-gray-700/80 overflow-hidden bg-transparent">
              <div className="px-3.5 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-colors">
                <a
                  href="#latest"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white text-xs sm:text-sm font-normal block transition-colors"
                >
                  Latest Posts
                </a>
              </div>

              <div className="px-3.5 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-colors">
                <a
                  href="#announcements"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white text-xs sm:text-sm font-normal block transition-colors"
                >
                  Announcements
                </a>
              </div>

              <div className="px-3.5 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-colors">
                <a
                  href="#calendars"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white text-xs sm:text-sm font-normal block transition-colors"
                >
                  Calendars
                </a>
              </div>

              <div className="px-3.5 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-colors">
                <a
                  href="#etc"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white text-xs sm:text-sm font-normal block transition-colors"
                >
                  etc
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;
