import React from 'react';
import ScrollReveal from './ScrollReveal';

const Projects = ({ data }) => {
    return (
        <section id="projects">
            <div className="container">
                <ScrollReveal>
                    <h2 className="section-title">Projects</h2>
                </ScrollReveal>
                <div className="grid gap-4">
                    {data.map((project, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="card">
                                <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-color)', marginBottom: 0 }}>{project.title}</h3>
                                    <span style={{ color: 'var(--primary-color)', fontWeight: '500' }}>{project.date}</span>
                                </div>
                                <p style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontWeight: '500' }}>
                                    {project.tech}
                                </p>

                                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--secondary-color)' }}>
                                    {project.description.map((item, i) => (
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

export default Projects;
