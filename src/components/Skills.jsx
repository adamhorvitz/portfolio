import React from 'react';
import ScrollReveal from './ScrollReveal';

const Skills = ({ data }) => {
    const categoryStyles = {
        marginBottom: '2rem',
    };

    const skillListStyles = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
    };

    const skillTagStyles = {
        backgroundColor: 'rgba(56, 189, 248, 0.1)',
        color: 'var(--primary-color)',
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
        fontSize: '0.9rem',
        border: '1px solid rgba(56, 189, 248, 0.2)',
        transition: 'all 0.2s',
    };

    return (
        <section id="skills">
            <div className="container">
                <ScrollReveal>
                    <h2 className="section-title">Technical Skills</h2>
                </ScrollReveal>
                <div className="grid md-grid-cols-2 gap-4">
                    <ScrollReveal delay={0.1}>
                        <div className="card">
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Languages</h3>
                            <div style={skillListStyles}>
                                {data.languages.map((skill, index) => (
                                    <span key={index} style={skillTagStyles} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <div className="card">
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Technologies</h3>
                            <div style={skillListStyles}>
                                {data.technologies.map((skill, index) => (
                                    <span key={index} style={skillTagStyles} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Skills;
