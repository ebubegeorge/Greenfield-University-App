import { Routes, Route } from "react-router-dom";
import About from '../Pages/About'
import Admmissions from '../Pages/Admissions'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import News from '../Pages/News'
import Programs from '../Pages/Programs'


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