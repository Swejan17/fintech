import React, { useState, useEffect } from 'react';
import './Landing.css';
import { useNavigate } from 'react-router-dom';

const emojis = ['😭', '😢', '😌', '🙂', '😄'];

export default function Landing() {
  const [mood, setMood] = useState<number | null>(null);
  const [isGlowing, setIsGlowing] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [showShareScreen, setShowShareScreen] = useState(false);
  const [thoughts, setThoughts] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const glowInterval = setInterval(() => {
      setIsGlowing(prev => !prev);
    }, 3000);

    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 5000);

    return () => {
      clearInterval(glowInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMood(parseInt(event.target.value));
  };

  const handleConfirm = () => {
    if (mood !== null) {
      console.log(`Mood confirmed: ${emojis[mood]}`);
      setShowShareScreen(true);
    }
  };

  const handleSkip = () => {
    console.log('Skipped sharing thoughts');
    // Add logic for what happens after skipping
  };

  const handleShare = () => {
    console.log(`Shared thoughts: ${thoughts}`);
    // Add logic for sharing thoughts
  };

  const handleVoice = () => {
    console.log('Voice button clicked');
    // Add logic for voice input
  };

  if (showShareScreen) {
    return (
      <div className="mood-tracker">
        <div className="mood-tracker-container">
          <button className="skip-button" onClick={()=>navigate("/Home")}>Skip</button>
          <div className="mood-tracker-header">
            <div className={`sun ${isGlowing ? 'glow' : ''}`}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11" fill="#FDB813" />
                <circle cx="12" cy="12" r="8" fill="#FEE133" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="9" cy="9" r="1.5" fill="#000" className={isBlinking ? 'blink' : ''} />
                <circle cx="15" cy="9" r="1.5" fill="#000" className={isBlinking ? 'blink' : ''} />
              </svg>
            </div>
            <h1>Anything you would like to <span className="underline">share</span>?</h1>
          </div>
          <div className="share-input-container">
            <input
              type="text"
              value={thoughts}
              onChange={(e) => setThoughts(e.target.value)}
              placeholder="Share your thoughts!"
              className="share-input"
            />
            <button className="voice-button" onClick={handleVoice}>Voice</button>
          </div>
          <button 
            onClick={()=>navigate("/Home")} 
            className="confirm-button"
          >
            Share
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mood-tracker">
      <div className="mood-tracker-container">
        <div className="mood-tracker-header">
          <div className={`sun ${isGlowing ? 'glow' : ''}`}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" fill="#FDB813" />
              <circle cx="12" cy="12" r="8" fill="#FEE133" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="9" cy="9" r="1.5" fill="#000" className={isBlinking ? 'blink' : ''} />
              <circle cx="15" cy="9" r="1.5" fill="#000" className={isBlinking ? 'blink' : ''} />
            </svg>
          </div>
          <h1>How are you feeling <span className="underline">today</span>?</h1>
        </div>
        <div className="mood-slider-container">
          <input
            type="range"
            min="0"
            max="4"
            step="1"
            value={mood ?? ''}
            onChange={handleSliderChange}
            className="mood-slider"
          />
          <div className="emoji-container">
            {emojis.map((emoji, index) => (
              <span 
                key={index} 
                className={`emoji ${mood === index ? 'active' : ''}`}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
        <button 
          onClick={handleConfirm} 
          disabled={mood === null}
          className={`confirm-button ${mood === null ? 'disabled' : ''}`}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}