import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, width = "fit-content", direction = "up", delay = 0, duration = 0.5 }) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 75 : direction === "down" ? -75 : 0,
            x: direction === "left" ? 75 : direction === "right" ? -75 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
