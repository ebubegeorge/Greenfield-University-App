import React from 'react';
import Hero from '../../Components/Hero/Hero';
import homeHero from '../../assets/home-hero.jpg';
import "./Home.css";
import { Link } from 'react-router-dom';
import studentsImg from '../../assets/studentsImg.jpg';
import admissionsImg from '../../assets/admissionsImg.jpg';
import campusImg from '../../assets/campusImg.jpg';

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
            </div>
            <section className='cards-section'>
                <div className='card-container'>

                    <div className='card'>
                        <img src={studentsImg} alt="Programs" />
                        <h3>Programs</h3>
                        <p>Explore undergraduate and postgraduate programs</p>
                        <Link to="/programs">Learn More</Link>
                    </div>

                    <div className='card'>
                        <img src={admissionsImg} alt="Admissions" />
                        <h3>Admissions</h3>
                        <p>Start your Journey with Greenfield University</p>
                        <Link to="/admissions">Learn More</Link>
                    </div>

                    <div className='card'>
                        <img src={campusImg} alt="Campus Life" />
                        <h3>Campus Life</h3>
                        <p>Experience the vibrant community at Greenfield University</p>
                        <Link to="/news">Learn More</Link>
                    </div>

                </div>
            </section>
        </>
    );
}
export default Home;
