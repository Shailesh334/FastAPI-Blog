import BlogCard from "../components/BlogCard";

const samplePosts = [
  {
    id: 1,
    author: "Shailesh Gurle",
    date: "April 20, 2025",
    title: "FastAPI is Awesome",
    content: "This framework is really easy to use and super fast.",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    author: "Jane Doe",
    date: "April 21, 2025",
    title: "Python is Great for Web Development",
    content:
      "Python is a great language for web development, and FastAPI makes it even better.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
];

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Blog Feed */}
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

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-4">
          <div className="bg-white dark:bg-[#282a2d] border border-gray-200 dark:border-gray-700/60 rounded-md p-5 shadow-xs transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1 tracking-tight">
              Our Sidebar
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              You can put any information here you'd like.
            </p>

            {/* Sidebar list group matching clean text list */}
            <div className="border border-gray-200 dark:border-gray-700/80 rounded-md divide-y divide-gray-200 dark:divide-gray-700/80 overflow-hidden bg-transparent">
              <div className="px-3.5 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-colors">
                <a
                  href="#latest"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white text-sm font-normal block transition-colors"
                >
                  Latest Posts
                </a>
              </div>

              <div className="px-3.5 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-colors">
                <a
                  href="#announcements"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white text-sm font-normal block transition-colors"
                >
                  Announcements
                </a>
              </div>

              <div className="px-3.5 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-colors">
                <a
                  href="#calendars"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white text-sm font-normal block transition-colors"
                >
                  Calendars
                </a>
              </div>

              <div className="px-3.5 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-colors">
                <a
                  href="#etc"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white text-sm font-normal block transition-colors"
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
