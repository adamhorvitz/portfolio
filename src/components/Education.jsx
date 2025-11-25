import React from 'react';
import ScrollReveal from './ScrollReveal';

const Education = ({ data }) => {
    return (
        <section id="education">
            <div className="container">
                <ScrollReveal>
                    <h2 className="section-title">Education</h2>
                </ScrollReveal>
                <div className="grid gap-4">
                    {data.map((edu, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="card">
                                <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-color)', marginBottom: 0 }}>{edu.school}</h3>
                                    <span style={{ color: 'var(--primary-color)', fontWeight: '500' }}>{edu.graduationDate}</span>
                                </div>
                                <div className="flex justify-between items-center" style={{ marginBottom: '1rem', flexWrap: 'wrap' }}>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary-color)', fontWeight: 'normal', marginBottom: 0 }}>
                                        {edu.degree}
                                    </h4>
                                    <span style={{ color: 'var(--secondary-color)' }}>{edu.location}</span>
                                </div>

                                <div style={{ marginBottom: '1rem' }}>
                                    <span style={{ marginRight: '1rem', color: 'var(--accent-color)' }}>GPA: {edu.gpa}</span>
                                    {edu.honors.map((honor, i) => (
                                        <span key={i} style={{ color: 'var(--primary-color)' }}>{honor}</span>
                                    ))}
                                </div>

                                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--secondary-color)' }}>
                                    {edu.details.map((detail, i) => (
                                        <li key={i} style={{ marginBottom: '0.5rem' }}>{detail}</li>
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

export default Education;
