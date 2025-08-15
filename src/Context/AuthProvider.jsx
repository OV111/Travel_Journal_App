import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
const AuthProvider = ({ children }) => {
  // const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return JSON.parse(localStorage.getItem("isAuthenticated")) || false
  });
  
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username && password) {
      setIsAuthenticated(true);
      setUser(username);
      localStorage.setItem("isAuthenticated",JSON.stringify(true))
      localStorage.setItem("user",username)
      return true;
    }
    return false;
  };
  const logout = () => {
    // navigate("/")  
    setIsAuthenticated(false);
    setUser(null);
    localStorage.setItem("isAuthenticated",false)
    localStorage.removeItem("user")
  };

  const value = { isAuthenticated, user, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
