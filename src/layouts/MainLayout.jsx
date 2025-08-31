import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import  apiService from "../service/api.js"
import { useEffect } from "react";
const MainLayout = () => {
    useEffect(() => {
      async function fetchData() {
          await apiService.request(
            "/journals",
            {},
            "Fail to load trips!",
            "Trips successfully loaded!"
          )
      }
      fetchData()
    },[])
    // ! only need to show up for Error in case of api 
  return (
    <div className="bg-zinc-100 py-0">
      
      <ToastContainer 
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
