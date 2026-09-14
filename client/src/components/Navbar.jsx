

const Navbar = () => {
    const loggedIn = true;
  return (
    <div className="navbar bg-amber-50 shadow-md">
      <div className="flex-1">
        <a className=" text-black text-2xl">FastAPI Blog</a>
      </div>
      <div className="flex gap-4">
      
        <button className="btn bg-amber-100 text-black hover:bg-amber-50">{!loggedIn ? "Login" : "New Blog" }</button>
        <button className="btn bg-amber-100 text-black hover:bg-amber-50">{!loggedIn ? "Register" : "Logout" }</button>


        <div className="dropdown dropdown-end bg-amber-100">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content border-solid-1px  bg-amber-100 z-1 mt-3 w-52 p-2 shadow"
          >

            <li> <a className="text-black bg-amber-100"> Profile </a>  </li>
                
            <li> <a className="text-black bg-amber-100">Settings</a> </li>
                
        
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
