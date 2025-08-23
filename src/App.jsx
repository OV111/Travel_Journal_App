// React.DataBase Firebase
// nayel Travel Journal i hamar
// user Authenticationy
// Ui y Perfect sarqel
// Logout y Ui i tarbervox sarqel
import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AuthProvider from "./Context/AuthProvider";
import TripsProvider from "./Context/TripsProvider";
import Login from "./pages/Login";
import NotFound from "./components/NotFound";
import LoaderSpinner from "./components/LoaderSpinner";

const Explore = lazy(() => import("./pages/Explore"));
const MyJournal = lazy(() => import("./pages/MyJournal"));
const AddTrip = lazy(() => import("./pages/AddTrip"));
const ReadMore = lazy(() => import("./pages/ReadMore"));

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AuthProvider>
          <TripsProvider>
            <Suspense fallback={<LoaderSpinner />}>
              <Routes>
                <Route element={<MainLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/explore/:id" element={<ReadMore />} />
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

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </TripsProvider>
        </AuthProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
