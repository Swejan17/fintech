import React, { useState } from 'react';
import './Reflect.css'; // Import CSS file for styling (adjust based on your project)
import sunIcon from "../../assets/images/sun1.png"
import micIcon from "../../assets/images/mic.png"

const Reflect = () => {
  // State to handle input and conversation
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([
    { from: 'you', message: "I’m having some hard time saving money..." },
    {
      from: 'sunny',
      message:
        'Saving money can be challenging, especially when there are so many demands on your income, what are you finding challenging?',
    },
    { from: 'you', message: 'I am so reckless in spending, whenever I want to buy something, I just buy it' },
    {
      from: 'sunny',
      message:
        'It sounds like impulsive spending is a challenge for you. Here are some tips you can try that can help you manage that...',
    },
  ]);

  // Handle the input submission
  const handleSubmit = () => {
    if (input) {
      setConversation([...conversation, { from: 'you', message: input }]);
      setInput(''); // Clear input field
    }
  };

  return (
    <div className="reflect-container">
      {/* Header */}
      <header className="reflect-header">
        <h1>Reflection Hub</h1>
        <div className="profile-icon">AM</div>
      </header>

      {/* Main Content */}
      <main className="reflect-main">
        <div className="sunny-icon">
          {/* Add sunny image/icon here */}
          <img src={sunIcon} alt="sunny" />
        </div>
        <h2>let’s talk about you</h2>

        {/* Input Section */}
        <div className="input-section">
          <input
            type="text"
            placeholder="type here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSubmit}>
            {/* Icon for voice input */}
            <img src={micIcon} alt="mic" />
          </button>
        </div>

        {/* Conversation Box */}
        <div className="conversation-box">
          {conversation.map((msg, index) => (
            <p key={index}>
              <strong>{msg.from}:</strong> {msg.message}
            </p>
          ))}
        </div>

        {/* Tips Section */}
        <div className="tips-section">
          <h3>based on our previous convo...</h3>
          <div className="tips">
            <p>try out these tips</p>
            <ul>
              <li>meditate</li>
              <li>eat some good food</li>
              <li>get some good sleep</li>
            </ul>
            <a href="#learn-more">click to learn more!</a>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Reflect;
