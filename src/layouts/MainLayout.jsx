import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const MainLayout = () => {
  return (
    <div className="bg-zinc-100 py-0">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
