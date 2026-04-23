import React from 'react';
import './About.css';
import Hero from '../../Components/Hero/Hero';
import about1Img from '../../Assets/about1Img.jpg';

const About = () => {
    return (
        <>
            <Hero
                title="About Greenfield University"
                subtitle="Empowering the future, one student at a time."
                background={about1Img}
            />
            <section className="about-main">

                <div className="about-container">

                    <div className="about-text full-width">
                        <h2>Who We Are</h2>

                        <p>
                            Founded in 2005, Greenfield University was established with a vision
                            to provide quality education and foster innovation across disciplines.
                            From its inception, the institution has focused on building a strong
                            academic foundation that prepares students for real-world challenges.
                        </p>

                        <p>
                            At Greenfield University, we believe education goes beyond the classroom.
                            Our programs are designed to develop critical thinking, creativity, and
                            leadership skills that empower students to excel in their chosen careers.
                        </p>

                        <p>
                            With a diverse student community and a supportive learning environment,
                            we encourage collaboration, growth, and continuous development.
                            Our faculty members are dedicated to guiding students through both
                            academic and personal success.
                        </p>

                        <p>
                            Today, Greenfield University stands as a growing institution committed
                            to excellence, innovation, and global impact.
                        </p>

                    </div>

                </div>

            </section>

            <section className='mission-section'>
                <div className='mission-box'>
                    <h3>Our Mission</h3>
                    <p>
                        Our mission is to provide a transformative educational experience that
                        equips students with the knowledge, skills, and values needed to succeed
                        in a rapidly changing world. We are committed to fostering innovation,
                        critical thinking, and ethical leadership across all disciplines.
                    </p>
                </div>

                <div className='mission-box'>
                    <h3>Our Vision</h3>
                    <p>Our vision is to become a leading institution recognized globally for
                        academic excellence, research innovation, and community impact. We aim
                        to shape future leaders who will contribute meaningfully to society
                        and drive positive change in their fields.
                    </p>
                </div>

            </section>
        </>
    );
}

export default About;