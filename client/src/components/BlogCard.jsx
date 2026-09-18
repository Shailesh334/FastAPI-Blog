const BlogCard = ({
  author = "Corey Schafer",
  date = "April 20, 2025",
  title = "FastAPI is Awesome",
  content = "This framework is really easy to use and super fast.",
  avatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
}) => {
  return (
    <article className="bg-white dark:bg-[#282a2d] border border-gray-200 dark:border-gray-700/60 rounded-md p-4 sm:p-5 mb-4 sm:mb-5 shadow-xs transition-colors duration-200">
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Author Avatar */}
        <img
          src={avatar}
          alt={author}
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover shrink-0 border border-gray-300 dark:border-gray-600/40"
        />

        {/* Content Body */}
        <div className="flex-1 min-w-0">
          {/* Metadata Header */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pb-1.5 border-b border-gray-200 dark:border-gray-700/70">
            <a
              href="#"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-xs sm:text-sm transition-colors"
            >
              {author}
            </a>
            <span className="text-gray-500 dark:text-gray-400 text-xs">{date}</span>
          </div>

          {/* Post Title */}
          <h2 className="mt-1.5 sm:mt-2 text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors leading-snug">
            {title}
          </h2>

          {/* Post Content */}
          <p className="mt-1 text-gray-700 dark:text-gray-300 text-xs sm:text-base leading-relaxed break-words">
            {content}
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
