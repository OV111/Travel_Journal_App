import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../Context/useAuthStore";

const ProtectedRoutes = () => {
  const { auth } = useAuthStore();

  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet/>; 
};

export default ProtectedRoutes;
