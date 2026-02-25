import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaUnlock } from 'react-icons/fa';
import './PasswordPage.css';

const PasswordPage = ({ onUnlock, passwordToMatch = "140323" }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isUnlocking, setIsUnlocking] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.toLowerCase().trim() === passwordToMatch.toLowerCase().trim()) {
            setError(false);
            setIsUnlocking(true);
            setTimeout(() => {
                onUnlock();
            }, 1000); // give time for unlock animation
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="password-container">
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 1.1, opacity: 0 }}
                className="glass password-card"
            >
                <motion.div
                    animate={{
                        x: error ? [-10, 10, -10, 10, 0] : 0,
                        scale: isUnlocking ? 1.2 : 1
                    }}
                    transition={{ duration: error ? 0.4 : 0.5 }}
                    className="lock-icon"
                >
                    {isUnlocking ? <FaUnlock style={{ color: '#ffb3c6' }} /> : <FaLock />}
                </motion.div>

                <h2 className="password-title">
                    {isUnlocking ? "Unlocked..." : "Only for You"}
                </h2>

                {!isUnlocking && (
                    <form onSubmit={handleSubmit} className="password-form">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (error) setError(false);
                            }}
                            placeholder="Enter the magic word..."
                            className={`password-input ${error ? 'error' : ''}`}
                        />
                        {error && <span className="error-message">Hmm, that's not quite right...</span>}

                        <button type="submit" className="unlock-btn">
                            Unlock
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
    );
};

export default PasswordPage;
