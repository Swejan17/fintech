import React from 'react';
import sunIcon from '../../assets/images/sun1.png';
import heartIcon from "../../assets/images/heart.png"
import "./Home.css"

const Home: React.FC = () => {
  return (
    <div className="dashboard">
      {/* Header Section */}
      <header className="header">
        <img src={sunIcon} alt="sun1" className="sun-icon" />
        <div className="user-profile">
          <span className="user-initials">AM</span>
        </div>
      </header>

      {/* News Section */}
      <section className="news-section">
        <h2>in the news...</h2>
        <div className="news-box">
          <ul>
            <li>Biden announces tax cuts</li>
            <li>UK prime minister cuts winter fuel payment</li>
            <li>Hurricane Milton wrecks havoc in Florida</li>
          </ul>
        </div>
      </section>

       {/* Learning Section */}
       <div className="section-box">
        <section className="learning-section">
          <h2>continue learning...</h2>
          <div className="learning-box">
            <div className="learning-path">
              <span className="learning-step">PCP</span>
              <span className="learning-step">HP</span>
              <span className="learning-step">Lease</span>
            </div>
            <span className="learning-label">car finance</span>
          </div>
        </section>
      </div>

      {/* Peace Section */}
      <div className="section-box">
        <section className="peace-section">
          <h2>find your peace...</h2>
          <div className="peace-box">
            <div className="peace-item">
              <img src={heartIcon} alt="Meditate" className="heart-icon" />
              <span>Meditate</span>
            </div>
            <div className="peace-item">
              <img src={heartIcon} alt="Stretch" className="heart-icon" />
              <span>Stretch</span>
            </div>
            <div className="peace-item">
              <img src={heartIcon} alt="Journal" className="heart-icon" />
              <span>Journal</span>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Home;
