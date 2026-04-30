import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Randle.Art</span>
          <p className="footer__tagline">Original art, globally delivered.</p>
        </div>
        <div className="footer__links">
          <Link to="/prints">Prints</Link>
          <Link to="/apparel">Apparel</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="footer__info">
          <p>All orders fulfilled by Gelato.</p>
          <p>Printed locally, shipped globally.</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Randle.Art. All rights reserved.</p>
      </div>
    </footer>
  );
}
