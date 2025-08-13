import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [theme, setTheme] = useState();
  return (
    <React.Fragment>
      <nav className="bg-gradient-to-r  from-sky-500  to-sky-600 flex items-center content-center justify-center gap-230 px-4  py-4">
        <h1 className="text-white font-medium text-3xl ">Travel Journal</h1>
        <div className="flex items-center content-center space-x-4">
          <Link to="/" className="text-white font-normal text-xl">
            Home
          </Link>
          <Link to="/explore" className="text-white font-normal text-xl">
            Explore
          </Link>
          <Link to="/login" className="text-white font-normal text-xl">
            Login
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;