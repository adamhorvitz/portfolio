import React, { useMemo } from 'react';

const StarBackground = () => {
    // Function to generate random box-shadows for stars
    const generateStars = (count) => {
        let value = '';
        for (let i = 0; i < count; i++) {
            const x = Math.floor(Math.random() * 2000);
            const y = Math.floor(Math.random() * 2000);
            value += `${x}px ${y}px #FFF`;
            if (i < count - 1) {
                value += ', ';
            }
        }
        return value;
    };

    // Memoize stars to prevent regeneration on re-renders
    const smallStars = useMemo(() => generateStars(700), []);
    const mediumStars = useMemo(() => generateStars(200), []);
    const largeStars = useMemo(() => generateStars(100), []);

    return (
        <div className="star-background">
            <div className="stars" style={{ boxShadow: smallStars }}></div>
            <div className="stars2" style={{ boxShadow: mediumStars }}></div>
            <div className="stars3" style={{ boxShadow: largeStars }}></div>
        </div>
    );
};

export default StarBackground;
