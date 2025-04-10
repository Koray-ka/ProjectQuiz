import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll style it next

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">CyberCare Quiz</h2>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/info">Info</Link></li>
        <li><Link to="/glossary">Glossary</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
