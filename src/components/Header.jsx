import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1rem 0',
        backgroundColor: isScrolled || isMenuOpen ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        backdropFilter: isScrolled || isMenuOpen ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        zIndex: 1000,
        borderBottom: isScrolled ? '1px solid var(--card-border)' : 'none',
    };

    const linkStyles = {
        color: 'var(--text-color)',
        fontWeight: '500',
        marginLeft: '2rem',
        fontSize: '0.95rem',
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header style={navStyles}>
            <div className="container flex justify-between items-center">
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)', zIndex: 1001 }}>
                    AH.
                </a>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul className="flex">
                        <li><a href="#about" style={linkStyles}>About</a></li>
                        <li><a href="#education" style={linkStyles}>Education</a></li>
                        <li><a href="#skills" style={linkStyles}>Skills</a></li>
                        <li><a href="#experience" style={linkStyles}>Experience</a></li>
                        <li><a href="#projects" style={linkStyles}>Projects</a></li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {isMenuOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        )}
                    </svg>
                </button>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            className="mobile-nav"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ul>
                                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                                <li><a href="#education" onClick={toggleMenu}>Education</a></li>
                                <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                                <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                                <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                            </ul>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
