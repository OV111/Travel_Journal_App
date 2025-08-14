import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import AuthProvider from "./Context/AuthContext";
import Login from "./pages/Login";
import MyJournal from "./pages/MyJournal";
import AddTrip from "./pages/AddTrip";
import ProtectedRoutes from "./components/ProtectedRoutes";
const App = () => {
  // const [login,setLogin] = useState(true)

  // if(login) {

  // } else {

  // }
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<MainLayout />}>

            <Route path="/my-journal" element={<ProtectedRoutes><MyJournal /></ProtectedRoutes>} />
            <Route path="/add-trip" element={<AddTrip />} />
          </Route>

          <Route path="*" element="Not Found!"></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
