import React from 'react';
import Hero from '../../Components/Hero/Hero';
import contactHero from '../../assets/campusImg.jpg';
import "./Contact.css";

const Contact = () => {
  return (
    <>
      {/* HERO */}
      <Hero
        title="Contact Us"
        subtitle="We’d love to hear from you"
        background={contactHero}
      />

      {/* CONTACT SECTION */}
      <section className="contact-section">

        <div className="contact-container">

          {/* LEFT - INFO */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Email: info@greenfield.edu</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Greenfield Avenue, Lagos, Nigeria</p>
          </div>

          {/* RIGHT - FORM */}
          <form className="contact-form">

            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message</button>

          </form>

        </div>

      </section>
    </>
  );
};

export default Contact;