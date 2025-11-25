import React from 'react';

const Footer = ({ data }) => {
    const footerStyles = {
        padding: '2rem 0',
        textAlign: 'center',
        color: 'var(--secondary-color)',
        borderTop: '1px solid var(--card-border)',
        marginTop: '4rem',
    };

    return (
        <footer style={footerStyles}>
            <div className="container">
                <p style={{ marginBottom: '0.5rem' }}>Designed & Built by {data.name}</p>
                <p style={{ fontSize: '0.9rem' }}>
                    <a href={data.github} target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem' }}>GitHub</a>
                    |
                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem' }}>LinkedIn</a>
                    |
                    <a href={`mailto:${data.email}`} style={{ margin: '0 0.5rem' }}>Email</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
