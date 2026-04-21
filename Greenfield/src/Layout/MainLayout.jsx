import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return(
    <>
    <Navbar/>

    <main>
      <Outlet/>
    </main>

    <Footer/>
    </>
  );
}

export default MainLayout;