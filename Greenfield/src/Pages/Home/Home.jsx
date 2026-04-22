import React from 'react';
import Hero from '../../Components/Hero/Hero';
import homeHero from '../../assets/home-hero.jpg';

const Home = () => {
    return (
    <>   
        <div className="home-container">
            <Hero
                title="Welcome to Greenfield University"
                subtitle="Empowering the Future, One Student at a Time"
                background={homeHero}
            >
            </Hero>
            
            {/* <h1>Welcome to Greenfield University</h1>
            <p>This is the home page of our application.</p> */}
        </div>
        <div className="home-content">
            <h2>About Greenfield University</h2>
            <p>Greenfield University is a prestigious institution dedicated to providing quality education and fostering innovation. Our mission is to empower students with knowledge and skills to excel in their chosen fields.</p>
        </div>
        <div>
            <h2>Our Programs</h2>
            <p>We offer a wide range of programs across various disciplines, including Science, Technology, Engineering, Arts, and Humanities. Our programs are designed to meet the needs of our diverse student body and prepare them for successful careers.</p>
        </div>
        <div>
            <h2>Join Us</h2>
            <p>Become a part of the Greenfield University community and embark on a journey of learning and growth. Apply now to start your academic adventure with us!</p>
        </div>
    </>
    );
}
export default Home;
