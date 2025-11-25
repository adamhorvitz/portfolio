import React from 'react';
import { motion } from 'framer-motion';

const RocketAnimation = () => {
    // Generate random particles for the trail
    const particles = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        x: Math.random() * 40 - 20, // Random spread
        y: Math.random() * 100 + 50, // Distance behind rocket
        scale: Math.random() * 0.5 + 0.2,
        duration: Math.random() * 0.5 + 0.3,
        delay: Math.random() * 0.2,
    }));

    return (
        <motion.div
            initial={{ y: '120vh', x: '50vw', rotate: 0 }}
            animate={{ y: '-150vh', x: '50vw' }}
            transition={{
                duration: 4,
                ease: "easeInOut",
                delay: 0.5
            }}
            style={{
                position: 'fixed',
                left: 0,
                bottom: 0,
                zIndex: -1,
                pointerEvents: 'none',
                width: '100px', // Slightly smaller for mobile safety
                height: '200px',
            }}
        >
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="none">
                    {/* Rocket Body */}
                    <path
                        d="M256 16C160 16 160 144 160 144V368H352V144C352 144 352 16 256 16Z"
                        fill="#e2e8f0"
                        stroke="#334155"
                        strokeWidth="8"
                    />
                    {/* Window */}
                    <circle cx="256" cy="144" r="48" fill="#38bdf8" stroke="#334155" strokeWidth="8" />
                    {/* Fins */}
                    <path d="M160 368H96L64 448H160V368Z" fill="#ef4444" stroke="#334155" strokeWidth="8" />
                    <path d="M352 368H416L448 448H352V368Z" fill="#ef4444" stroke="#334155" strokeWidth="8" />
                    <path d="M224 368H288V448H224V368Z" fill="#ef4444" stroke="#334155" strokeWidth="8" />

                    {/* Main Flame */}
                    <motion.path
                        d="M224 448H288L256 512L224 448Z"
                        fill="#f59e0b"
                        animate={{
                            d: [
                                "M224 448H288L256 540L224 448Z",
                                "M224 448H288L256 580L224 448Z",
                                "M224 448H288L256 520L224 448Z"
                            ]
                        }}
                        transition={{
                            duration: 0.15,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />

                    {/* Inner Flame */}
                    <motion.path
                        d="M240 448H272L256 496L240 448Z"
                        fill="#fef08a"
                        animate={{
                            d: [
                                "M240 448H272L256 480L240 448Z",
                                "M240 448H272L256 510L240 448Z"
                            ]
                        }}
                        transition={{
                            duration: 0.1,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </svg>

                {/* Fire Trail Particles */}
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        style={{
                            position: 'absolute',
                            left: '50%',
                            bottom: -20, // Start at the nozzle
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: '#f97316',
                            x: '-50%', // Center horizontally
                        }}
                        animate={{
                            y: [0, p.y], // Move downwards (relative to rocket)
                            opacity: [0.8, 0], // Fade out
                            scale: [1, p.scale], // Shrink
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default RocketAnimation;
