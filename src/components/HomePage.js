import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to the CyberCare Ransomware Quiz</h1>
      <p>Learn about ransomware and test your knowledge!</p>

      <Link to="/quiz">
        <button>Start Quiz</button>
      </Link>
      <br />

      <Link to="/info">
        <button>Learn More About Ransomware</button>
      </Link>
      <br />

      <Link to="/glossary">
        <button>Glossary of Terms</button>
      </Link>
    </div>
  );
}

export default HomePage;
