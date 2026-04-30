import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <Link to="/" className="nav__logo">Randle.Art</Link>
      <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
        <Link to="/prints" className="nav__link">Prints</Link>
        <Link to="/apparel" className="nav__link">Apparel</Link>
        <Link to="/about" className="nav__link">About</Link>
      </div>
      <div className="nav__right">
        <button className="snipcart-checkout nav__cart" aria-label="Open cart">
          <span>Cart</span>
          <span className="snipcart-items-count nav__cart-count"></span>
        </button>
        <button
          className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
