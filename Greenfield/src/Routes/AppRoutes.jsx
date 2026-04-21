import { Routes, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import About from '../Pages/About/About'
import Admmissions from '../Pages/Admissions/Admissions'
import Contact from '../Pages/Contact/Contact'
import Home from '../Pages/Home/Home'
import News from '../Pages/News/News'
import Programs from '../Pages/Programs/Programs'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admmissions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/programs" element={<Programs />} />
        </Routes>
    );
}

export default AppRoutes;