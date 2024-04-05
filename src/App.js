import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import QuizTest from './pages/QuizTest';
import HomePage from './pages/HomePage';
import Information from './pages/Information';
import Leaderboard from './pages/Leaderboard';
import FlippCard from './pages/FlippCard';
import Impressum from './pages/Impressum';
import Hilfe from './pages/Help';
import AnanasAI from './pages/AnanasAI';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/information" element={<Information />} />
          <Route path="/flipp-card" element={<FlippCard />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/quiz-test" element={<QuizTest />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Hilfe />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/ananasAI" element={<AnanasAI />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
