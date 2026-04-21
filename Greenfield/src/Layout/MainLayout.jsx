import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="layout-wrapper">
      <Navbar />

      <div className="page-content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;