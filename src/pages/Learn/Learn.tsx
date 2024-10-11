import React from 'react';
import './Learn.css'; // We'll write custom CSS for styling.
import sunIcon from "../../assets/images/sun2.png"
import starIcon from "../../assets/images/star.png"
import Footter from '../../components/Footter';

const Learn: React.FC = () => {
  return (
    <div>
    <div className="learn-page">
      <header className="header">
        <h1>Financial & Mental Wellbeing Hub</h1>
        <div className="profile-icon">
          <div className="profile-initials">AM</div>
        </div>
      </header>

      <section className="sun-section">
        <img src={sunIcon} alt="sun icon" className="sun-icon" /> {/* You can use a sun icon here */}
      </section>

      <section className="category-buttons">
        <button className="category-button">Finance</button>
        <button className="category-button">Mental Health</button>
      </section>

      <section className="search-section">
        <input
          type="text"
          placeholder="search for a topic"
          className="search-input"
        />
      </section>

      <div className="section-box">
        <section className="topics-section">
          <h2>Topics</h2>
          <p className="topic-subtitle">based on what we think you might prefer</p>
          <ul className="topic-list">
            <li>what is budgeting?</li>
            <li>how to be happier?</li>
            <li>raising low self-esteem</li>
            <li>how to set personal finance goals?</li>
          </ul>
        </section>
      </div>

      <div className="section-box">
      <section className="learning-path-section">
        <h2>continue learning...</h2>
        <div className="learning-path">
          <div className="path-step">
            <img src={starIcon} alt="PCP" className="step-icon" />
            <span>PCP</span>
          </div>
          <div className="path-step">
            <img src={starIcon} alt="HP" className="step-icon" />
            <span>HP</span>
          </div>
          <div className="path-step">
            <img src={starIcon} alt="Lease" className="step-icon" />
            <span>Lease</span>
          </div>
        </div>
      </section>
    </div>

    </div>
    <Footter/>
    </div>
  );
};

export default Learn;
