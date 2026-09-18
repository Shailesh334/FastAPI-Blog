import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const loggedIn = false;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#59a0d3] text-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 h-14 flex items-center justify-between">
        {/* Left: Brand + Desktop Nav Links */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/"
            className="text-lg sm:text-xl font-medium tracking-tight text-white hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            FastAPI Blog
          </Link>
          <Link
            to="/"
            className="hidden sm:inline-block text-white/90 hover:text-white text-sm transition-colors"
          >
            Home
          </Link>
        </div>

        {/* Right: Desktop Auth Buttons + Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop Auth */}
          <div className="hidden sm:flex items-center gap-2">
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
          </div>

          {/* Theme Toggle */}
          <div className="sm:border-l sm:border-white/20 sm:pl-2">
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-1.5 rounded text-white/90 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#4d8fbf] border-t border-white/15 px-4 py-3 space-y-2.5 transition-all">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white/90 hover:text-white text-sm py-1 font-medium"
          >
            Home
          </Link>
          <div className="pt-2 border-t border-white/15 flex flex-col gap-2">
            {!loggedIn ? (
              <>
                <button className="w-full text-center px-3 py-1.5 text-sm text-white border border-white/40 hover:bg-white/10 rounded font-medium">
                  Login
                </button>
                <button className="w-full text-center px-3 py-1.5 text-sm bg-white text-gray-800 hover:bg-gray-100 rounded font-medium shadow-xs">
                  Register
                </button>
              </>
            ) : (
              <>
                <button className="w-full text-center px-3 py-1.5 text-sm text-white border border-white/40 hover:bg-white/10 rounded font-medium">
                  New Blog
                </button>
                <button className="w-full text-center px-3 py-1.5 text-sm bg-white text-gray-800 hover:bg-gray-100 rounded font-medium shadow-xs">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

