import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footter = () => {
    const navigate = useNavigate();
  
    return (
      <div className='dashboard'>
        <footer className="footer-nav">
          <button className="nav-button" onClick={() => navigate('/home')}>Home</button>
          <button className="nav-button" onClick={() => navigate('/learn')}>Learn</button>
          <button className="nav-button" onClick={() => navigate('/reflect')}>Reflect</button>
          <button className="nav-button" onClick={() => navigate('/settings')}>Settings</button>
        </footer>
      </div>
    );
  };

export default Footter
