import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Footer() {
  return (
    <footer className="bg-dark text-center text-light py-3">
      <div>
        <Link to="/" className="text-light">Home - </Link>
        <Link to="/contact" className="text-light">Kontakt - </Link>
        <Link to="/impressum" className="text-light">Impressum - </Link>
        <Link to="/help" className="text-light">Hilfe - </Link>
        <Link to="/about-us" className="text-light">About Us</Link>
      </div>
      <p>© 2024 AnanasAI. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
