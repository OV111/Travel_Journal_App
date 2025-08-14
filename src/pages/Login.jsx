import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const {login} = useContext(AuthContext)
  const {isAuthenticated} = useContext(AuthContext)
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    
    login(username,password)
    console.log(isAuthenticated)
    console.log(username,password)
};
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid items-center gap-4 py-4"
      >
        <input type="email" placeholder="Enter Your Email" className=""  onChange={(e) => {setUsername(e.target.value)}}/>
        <input type="password" placeholder="Enter Your Password" className="" onChange={(e) => {setPassword(e.target.value)}} />
        <button type="submit" className="">Submit</button>
      </form>
    </div>
  );
};
export default Login;
