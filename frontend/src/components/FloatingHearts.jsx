import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const FloatingHearts = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        // Generate a fixed number of hearts for background animation
        const newHearts = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // random left position
            size: Math.random() * 20 + 10, // random size between 10px and 30px
            delay: Math.random() * 15, // random animation delay
            duration: Math.random() * 10 + 10, // random animation duration
        }));
        setHearts(newHearts);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="heart"
                    style={{
                        left: `${heart.x}%`,
                        fontSize: `${heart.size}px`,
                        animationDelay: `${heart.delay}s`,
                        animationDuration: `${heart.duration}s`,
                    }}
                >
                    <FaHeart />
                </div>
            ))}
        </div>
    );
};

export default FloatingHearts;
