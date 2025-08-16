import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import AuthProvider from "./Context/AuthProvider";
import TripsProvider from "./Context/TripsProvider";
import Login from "./pages/Login";
import MyJournal from "./pages/MyJournal";
import AddTrip from "./pages/AddTrip";
import ProtectedRoutes from "./components/ProtectedRoutes";
const App = () => {
  return (
    <AuthProvider>
      <TripsProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/login" element={<Login />} />
              
              <Route
                path="/my-journal"
                element={
                  <ProtectedRoutes>
                    <MyJournal />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/add-trip"
                element={
                  <ProtectedRoutes>
                    <AddTrip />
                  </ProtectedRoutes>
                }
              />
            </Route>

            <Route path="*" element={<NotFound></NotFound>}/>
          </Routes>
        </BrowserRouter>
      </TripsProvider>
    </AuthProvider>
  );
};

export default App;
