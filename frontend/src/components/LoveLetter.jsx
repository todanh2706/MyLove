import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import './LoveLetter.css';

const LoveLetter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        setTimeout(() => {
            setShowButton(true);
        }, 3000);
    };

    return (
        <div className="love-letter-container">
            <AnimatePresence mode="wait">
                {!isOpen ? (
                    <motion.div
                        key="envelope"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.2, opacity: 0, rotateX: 90 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="glass envelope"
                        onClick={handleOpen}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="envelope-icon"
                        >
                            <FaHeart />
                        </motion.div>
                        <h1 className="envelope-title">
                            For You, My Love
                        </h1>
                        <p className="envelope-subtitle">
                            Click to Open
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="letter"
                        initial={{ scale: 0.5, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ duration: 1, cubicBezier: [0.175, 0.885, 0.32, 1.275] }}
                        className="glass letter"
                    >
                        <div className="corner-tl"></div>
                        <div className="corner-br"></div>

                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="letter-heading"
                        >
                            I Love You
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1.5 }}
                            className="letter-content"
                        >
                            <p>
                                Every single day, you make my life infinitely better. You are my sunshine on cloudy days, my peace in the chaos, and the most beautiful part of my world.
                            </p>
                            <p>
                                Words cannot fully capture the depth of what I feel for you. I built this just to remind you that my love for you is eternal, dynamic, and ever-growing.
                            </p>
                            <p className="letter-signature">
                                Forever yours. ❤️
                            </p>
                        </motion.div>

                        {showButton && (
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)" }}
                                whileTap={{ scale: 0.95 }}
                                className="close-btn"
                                onClick={() => setIsOpen(false)}
                            >
                                Close Letter
                            </motion.button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LoveLetter;
