import React from 'react';

import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (<>
    
        <div className="home-container">
            <Navbar />

            <h1>Welcome to Greenfield University</h1>
            <p>This is the home page of our application.</p>
            <Footer/>
        </div>
        </>
    );
}

export default Home;