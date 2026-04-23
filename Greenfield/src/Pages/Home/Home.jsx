import React from 'react';
import Hero from '../../Components/Hero/Hero';
import homeHero from '../../assets/home-hero.jpg';
import "./Home.css";
import { Link } from 'react-router-dom';

import studentsImg from '../../assets/studentsImg.jpg';
import admissionsImg from '../../assets/admissionsImg.jpg';
import campusImg from '../../assets/campusImg.jpg';
import about1Img from '../../assets/about1Img.jpg';

const Home = () => {
    return (
        <>
            <div className="home-container">
                <Hero
                    title="Welcome to Greenfield University"
                    subtitle="Empowering the Future, One Student at a Time"
                    background={homeHero}
                />
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

            <section className='about-overlay'>

                <div className='about-image'>
                    <img src={about1Img} alt="About Greenfield University" />
                </div>

                <div className='about-text1'>
                    <h2>About Greenfield University</h2>
                    <p>
                        Greenfield University is committed to excellence in education,
                        research, and innovation. We prepare students for global impact.
                    </p>

                    <Link to="/about">Learn More</Link>
                </div>

            </section>

            <section className='major-section'>
                <h2>Find Your Major</h2>
                <p>Explore academic programs that match your interests and career goals.</p>

                <div className='major-container'>
                    <div className='major-card'>
                        <h3>Science & Technology</h3>
                        <p>Engineering, IT, Computer Science, and more.</p>
                        <Link to="/programs">Explore</Link>
                    </div>

                    <div className='major-card'>
                        <h3>Business & Management</h3>
                        <p>Business Administration, Marketing, Finance, and more.</p>
                        <Link to="/programs">Explore</Link>
                    </div>

                    <div className='major-card'>
                        <h3>Arts & Humanities</h3>
                        <p>English, History, Philosophy, and more.</p>
                        <Link to="/programs">Explore</Link>
                    </div>
                </div>
            </section>

            <section
                className="join-us"
                style={{
                    backgroundImage: `url(${campusImg})`
                }}
            >
                <div className='join-overlay'>
                    <h2>Join Greenfield University</h2>
                    <p>Take the next step toward your future. Apply now and become part of our community!</p>
                    <Link to="/admissions">Apply Now</Link>
                </div>
            </section>
        </>
    );
};

export default Home;