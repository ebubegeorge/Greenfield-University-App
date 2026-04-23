import React from 'react';
import Hero from '../../Components/Hero/Hero';
import newsHero from '../../assets/campusImg.jpg';
import "./News.css";

const News = () => {
  return (
    <>
      <Hero
        title="Latest News"
        subtitle="Stay updated with events and happenings at Greenfield University"
        background={newsHero}
      />

      <section className="news-section">

        <h2>Campus News</h2>

        <div className="news-container">

          <div className="news-card">
            <h3>Greenfield Celebrates 100 Years</h3>
            <p>
              Greenfield University marked its 100th anniversary with a grand celebration
              featuring alumni, students, and faculty members.
            </p>
          </div>

          <div className="news-card">
            <h3>New Engineering Building Opened</h3>
            <p>
              The university has launched a state-of-the-art engineering complex
              to enhance learning and innovation.
            </p>
          </div>

          <div className="news-card">
            <h3>Graduation Ceremony 2026</h3>
            <p>
              Hundreds of students graduated this year, marking a milestone in their academic journey.
            </p>
          </div>

          <div className="news-card">
            <h3>Campus Sports Festival</h3>
            <p>
              Students participated in various sporting events promoting unity and healthy competition.
            </p>
          </div>

        </div>

      </section>
    </>
  );
};

export default News;