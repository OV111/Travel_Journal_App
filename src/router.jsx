import { createBrowserRouter } from "react-router-dom";
import React, { lazy } from "react";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./pages/Login";
import NotFound from "./components/NotFound";

const Explore = lazy(() => import("./pages/Explore"));
const MyJournal = lazy(() => import("./pages/MyJournal"));
const AddTrip = lazy(() => import("./pages/AddTrip"));
const ReadMore = lazy(() => import("./pages/ReadMore"));

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "explore", element: <Explore /> },
      { path: "explore/:id", element: <ReadMore /> },
      { path: "login", element: <Login /> },

      {
        element: <ProtectedRoutes />,
        children: [
          { path: "my-journal", element: <MyJournal /> },
          { path: "add-trip", element: <AddTrip /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
export default router;
