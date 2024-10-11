import React, { useState, useEffect } from 'react';
import './Landing.css';

const emojis = ['😭', '😢', '😌', '🙂', '😄'];

export default function MoodTracker() {
  const [mood, setMood] = useState<number | null>(null);
  const [isGlowing, setIsGlowing] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const glowInterval = setInterval(() => {
      setIsGlowing(prev => !prev);
    }, 3000); // Toggle glow every 3 seconds

    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200); // Blink for 200ms
    }, 5000); // Blink every 5 seconds

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
      // Add your confirmation logic here
    }
  };

  return (
    <div className="mood-tracker">
      <div className="">
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