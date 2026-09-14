

const Navbar = () => {
    const loggedIn = true;
  return (
    <div className="navbar bg-amber-50 shadow-md sticky top-0 z-50">

      <div className="flex-1">
        <a className="text-black text-lg lg:text-2xl ">
          FastAPI Blog
        </a>
      </div>


      <div className="flex gap-4">
      
        <div className="hidden lg:flex gap-4">

            <button className="btn bg-amber-100 text-black hover:bg-amber-50">
              {!loggedIn ? "Login" : "New Blog"}
            </button>

            <button className="btn bg-amber-100 text-black hover:bg-amber-50">
              {!loggedIn ? "Register" : "Logout"}
            </button>

        </div>


        <div className="dropdown dropdown-end ml-2">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
              <div className="w-8 lg:w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />

          </div>
        </div>

        <ul
          tabIndex={-1}
          className="text-black menu menu-sm dropdown-content bg-amber-100 z-1 mt-3 w-52 p-2 shadow"
        >

          {/* Mobile options */}
          <li className="lg:hidden">
            <a>
              {!loggedIn ? "Login" : "New Blog"}
            </a>
          </li>

          <li className="lg:hidden">
            <a>
              {!loggedIn ? "Register" : "Logout"}
            </a>
          </li>

          {/* Profile options */}
          <li>
            <a>Profile</a>
          </li>

          <li>
            <a>Settings</a>
          </li>

        </ul>

          </div>
        </div>
    </div>
  );
};

export default Navbar;
