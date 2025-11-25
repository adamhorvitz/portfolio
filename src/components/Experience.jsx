import React from 'react';
import ScrollReveal from './ScrollReveal';

const Experience = ({ data }) => {
    return (
        <section id="experience">
            <div className="container">
                <ScrollReveal>
                    <h2 className="section-title">Professional Experience</h2>
                </ScrollReveal>
                <div className="grid gap-4">
                    {data.map((exp, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="card">
                                <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-color)', marginBottom: 0 }}>{exp.title}</h3>
                                    <span style={{ color: 'var(--primary-color)', fontWeight: '500' }}>{exp.date}</span>
                                </div>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
                                    {exp.company}
                                </h4>

                                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--secondary-color)' }}>
                                    {exp.description.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
