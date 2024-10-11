import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import LearningPage from './pages/Learn/Learn';
import ReflectPage from './pages/Reflect/Reflect';
import './App.css';

// Placeholder components for the new pages
const ProfilePage = () => <div>Profile Page</div>;
const SettingsPage = () => <div>Settings Page</div>;

const NavigationButtons = () => {
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

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container" style={{position:"relative"}}>
        <div className="dashboard" >
        <img src="/Mind_Your_Finance_Clear_Background.png" style={{width:"300px"  ,position:"absolute",left:"20px", top:"250px" } } />
          <div className="content">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/learn" element={<LearningPage />} />
              <Route path="/reflect" element={<ReflectPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </div>
        {/* Navigation buttons at the bottom */}
        <NavigationButtons />
      </div>
    </Router>
  );
};

export default App;