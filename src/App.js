import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import InfoPage from './components/InfoPage';
import QuizPage from './components/QuizPage';
import GlossaryPage from './components/GlossaryPage';
import Navbar from './components/Navbar'; // import here

function App() {
  return (
    <Router>
      <Navbar /> {/* Include the navbar here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
