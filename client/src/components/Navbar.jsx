import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const loggedIn = false; 

  return (
    <header className="bg-[#5f788a] text-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
    
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-xl font-medium tracking-tight text-white hover:opacity-90 transition-opacity"
          >
            FastAPI Blog
          </Link>
          <Link
            to="/"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            Home
          </Link>
        </div>

      
        <div className="flex items-center gap-3">
          {!loggedIn ? (
            <>
              <button className="px-3 py-1 text-sm text-white border border-white/40 hover:border-white hover:bg-white/10 rounded transition-all">
                Login
              </button>
              <button className="px-3 py-1 text-sm bg-white text-gray-800 hover:bg-gray-100 font-medium rounded shadow-xs transition-all">
                Register
              </button>
            </>
          ) : (
            <>
              <button className="px-3 py-1 text-sm text-white border border-white/40 hover:border-white hover:bg-white/10 rounded transition-all">
                New Blog
              </button>
              <button className="px-3 py-1 text-sm bg-white text-gray-800 hover:bg-gray-100 font-medium rounded shadow-xs transition-all">
                Logout
              </button>
            </>
          )}

          <div className="border-l border-white/20 pl-2 ml-1">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
