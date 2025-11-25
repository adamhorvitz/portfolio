import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Hero = ({ data }) => {
    const heroStyles = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '60px',
    };

    const nameStyles = {
        fontSize: 'clamp(3rem, 8vw, 5rem)',
        fontWeight: '800',
        background: 'linear-gradient(to right, var(--primary-color), var(--accent-color))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '1rem',
    };

    const contactStyles = {
        display: 'flex',
        gap: '1.5rem',
        marginTop: '2rem',
        flexWrap: 'wrap',
    };

    const buttonStyles = {
        padding: '0.75rem 1.5rem',
        borderRadius: '0.25rem',
        border: '1px solid var(--primary-color)',
        color: 'var(--primary-color)',
        fontWeight: '600',
        transition: 'all 0.2s',
    };

    return (
        <section id="about" style={heroStyles}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '2rem' }}>
                <div style={{ flex: '1 1 500px' }}>
                    <ScrollReveal>
                        <p style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Hi, my name is</p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h1 style={nameStyles}>{data.name}</h1>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>
                            I build things for the web.
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
                        <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--secondary-color)' }}>
                            I'm a Computer Science student at the University of Florida with a passion for building exceptional digital experiences.
                            Currently focused on full-stack development and AI applications.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div style={contactStyles}>
                            <a href={`mailto:${data.email}`} style={{ ...buttonStyles, background: 'var(--primary-color)', color: '#0f172a' }}>
                                Get In Touch
                            </a>
                            <a href={data.github} target="_blank" rel="noopener noreferrer" style={buttonStyles}>
                                GitHub
                            </a>
                            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" style={buttonStyles}>
                                LinkedIn
                            </a>
                        </div>
                    </ScrollReveal>
                </div>

                {data.profileImage && (
                    <motion.div
                        style={{ flex: '0 0 auto' }}
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 100 }}
                    >
                        <img
                            src={data.profileImage}
                            alt={data.name}
                            style={{
                                width: '300px',
                                height: '300px',
                                objectFit: 'cover',
                                borderRadius: '20px',
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                border: '2px solid var(--primary-color)'
                            }}
                        />
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Hero;
