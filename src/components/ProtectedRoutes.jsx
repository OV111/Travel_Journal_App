import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />; 
};

export default ProtectedRoutes;
