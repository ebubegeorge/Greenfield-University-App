import React from "react";
import './Hero.css'

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
                    <button className="hero-button">Learn More</button>
                </div>
            </div>

        </section>
    );
}

export default Hero;