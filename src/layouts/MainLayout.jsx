import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import apiService from "../service/api.js";

const MainLayout = () => {
  useEffect(() => {
    async function fetchData() {
      await apiService.request(
        "/journals",
        {},
        "Fail to load trips!",
        "Trips successfully loaded!"
      );
    }
    fetchData();
  }, []);
  return (
    <div className="bg-zinc-100 py-0">
      {/* <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      /> */}
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;