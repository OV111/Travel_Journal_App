import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
const App = () => {
  // const [login,setLogin] = useState(true)

  // if(login) {

  // } else {

  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />}></Route>
        </Route>

        <Route path="*" element="Not Found!"></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
