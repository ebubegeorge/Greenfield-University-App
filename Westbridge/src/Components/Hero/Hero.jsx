import React from "react";
import './Hero.css'
import { Link } from "react-router-dom";

const Hero = ({ title, subtitle, background, height = "80vh" }) => {
    return (
        <section className="hero"
            style={{
                background: `url(${background}) center/cover no-repeat`,
                height: height,
            }}
        >

            <div className="hero-overlay">
                <div className="hero-content">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <Link to="/about" className="hero-button">
                        Learn More
                    </Link>
                </div>
            </div>

        </section>
    );
}

export default Hero;