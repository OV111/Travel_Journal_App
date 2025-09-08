import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import useAuthStore from "../Context/useAuthStore";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginSuccess = login(username, password);
    if (username.trim().length >= 3 && password.length >= 6) {
      if (loginSuccess) {
        toast.success("User Logged In", { autoClose: 800 });
        setTimeout(() => {
          navigate("/my-journal");
        }, 1200);
      } else {
        toast.error("Error with login");
      }
    } else {
      console.log("username or password is incorrect.");
    }
  };
  return (
    <React.Fragment>
      <div className=" bg-gray-200 justify-center items-center space-y-6 w-100 min-h-85 mx-auto my-20 px-8 rounded-2xl">
        <div className="text-center">
          <h2 className="text-3xl pt-8 font-bold text-gray-900">
            Welcome Back
          </h2>
          <p className="pt-2 pb-0 text-m text-gray-600">
            Sign in to your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="grid items-center gap-3 py-3">
          <input
            type="text"
            placeholder="Enter Your Username"
            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-900 placeholder-gray-500 placeholder:font-light"
            onChange={(e) => {
              const value = e.target.value;
              setUsername(value);
              setUserError(value.trim().length <= 3);
            }}
          />
          {userError && (
            <span className="text-red-500 text-sm">
              Username must be at least 3 characters
            </span>
          )}
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-900 placeholder-gray-500 placeholder:font-light"
            onChange={(e) => {
              const value = e.target.value;
              setPassword(value);
              setPasswordError(value.length < 6);
            }}
          />
          {passwordError && (
            <span className="text-red-500 text-sm py-0">
              Password must be at least 6 chars!
            </span>
          )}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-[#003580] text-white font-semibold rounded-xl transition-colors duration-200 focus:ring-4 focus:ring-blue-100 outline-none shadow-md hover:shadow-lg cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};
export default Login;
