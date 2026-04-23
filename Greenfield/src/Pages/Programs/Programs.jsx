import React from 'react';
import Hero from '../../Components/Hero/Hero';
import studentsImg from '../../assets/studentsImg.jpg';
import './Programs.css';
import { Link } from 'react-router-dom';


const Programs = () => {
    return (
        <>
            <Hero
                title="Our Programs"
                subtitle="Discover a wide range of courses designed for your future"
                background={studentsImg}
            />

            <section className="levels-section">

                <h2>Study Levels</h2>

                <div className="levels-container">

                    <div className="level-card">
                        <h3>Undergraduate Programs</h3>
                        <p>Build a strong academic foundation with our bachelor's degrees.</p>
                    </div>

                    <div className="level-card">
                        <h3>Postgraduate Programs</h3>
                        <p>Advance your expertise with master's and doctoral programs.</p>
                    </div>

                    <div className="level-card">
                        <h3>Diploma & Certificates</h3>
                        <p>Short-term programs designed for skill development and career growth.</p>
                    </div>

                    <div className="level-card">
                        <h3>Continuing Education</h3>
                        <p>Flexible learning options for professionals and lifelong learners.</p>
                    </div>

                </div>

            </section>


            <section className="programs-section">

                <h2>Explore Our Programs</h2>
                <p>Choose from a variety of academic paths tailored to your goals.</p>

                <div className='programs-container'>

                    <div className="program-card">
                        <h3>Computer Science</h3>
                        <p> Learn software development, AI, and modern computing systems.</p>
                    </div>

                    <div className='program-card'>
                        <h3>Business Administration</h3>
                        <p>Build leadership skills in finance, marketing and management.</p>

                    </div>

                    <div className="program-card">
                        <h3>Engineering</h3>
                        <p>Explore civil, mechanical, and electrical engineering fields.</p>
                    </div>

                    <div className='program-card'>
                        <h3>Mass Communication</h3>
                        <p>Develop skills in media, journalism, and digital communication</p>
                    </div>

                    <div className='program-card'>
                        <h3>Biological Sciences</h3>
                        <p>Study life sciences, research, and enviromental systems</p>

                    </div>

                    <div className='program-card'>
                        <h3>Law</h3>
                        <p>Gain knowledge in legal systems, advocacy, and justice.</p>
                    </div>

                </div>

            </section>
        </>
    );
};

export default Programs;