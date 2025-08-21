import React, { useContext } from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import Button from "@mui/material/Button";
const Navbar = () => {
  // const [theme, setTheme] = useState();
  const { isAuthenticated,  logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  return (
    <React.Fragment>
      <nav className="bg-[#003580] px-5 py-4 my-0">
        <div className="flex items-center justify-between">
          <Link to="/">
            <h1 className="text-white font-medium text-3xl ">Travel Journal</h1>
          </Link>
          <div className="flex items-center content-center space-x-5">
            <Link
              to="/"
              className="text-white font-normal text-xl hover:text-sky-200"
            >
              Home
            </Link>
            <Link
              to="/explore"
              className="text-white font-normal text-xl hover:text-sky-200"
            >
              Explore
            </Link>
            <div className="flex items-center  justify-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/my-journal"
                    className="text-white font-normal text-xl hover:text-sky-200 transition-colors"
                  >
                    My Journal
                  </Link>
                  <Link
                    to="/add-trip"
                    className="text-white font-normal text-xl hover:text-sky-200 transition-colors"
                  >
                    Add Trip
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-white font-normal text-xl hover:text-sky-200"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>

            <div className="text-white font-normal text-xl hover:text-sky-100">
              {isAuthenticated && (
                <button
                  onClick={() => {
                    handleLogout();
                  }}
                  className="cursor-pointer"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
