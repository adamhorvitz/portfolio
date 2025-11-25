import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
        backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
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

    return (
        <header style={navStyles}>
            <div className="container flex justify-between items-center">
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                    AH.
                </a>
                <nav>
                    <ul className="flex">
                        <li><a href="#about" style={linkStyles}>About</a></li>
                        <li><a href="#education" style={linkStyles}>Education</a></li>
                        <li><a href="#skills" style={linkStyles}>Skills</a></li>
                        <li><a href="#experience" style={linkStyles}>Experience</a></li>
                        <li><a href="#projects" style={linkStyles}>Projects</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
