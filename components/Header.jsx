'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import joysLuxuryLogo from '/public/joysluxurylogo.jpg';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
       <img src="/joysluxurylogo.jpg" alt="joy's luxury"  className="logo" />
        <h1 className="brand-name">Joy's Luxury</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/products" onClick={closeMenu}>Products</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
      </nav>

      {/* Menu Button (Mobile) */}

      
      <div
        className={`menu-btn ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        
      </div>

      {/* Background Overlay */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
