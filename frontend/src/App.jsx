import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoveLetter from './components/LoveLetter';
import FloatingHearts from './components/FloatingHearts';
import PasswordPage from './components/PasswordPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <FloatingHearts />
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <PasswordPage key="password" onUnlock={() => setIsAuthenticated(true)} passwordToMatch="iloveyou" />
        ) : (
          <LoveLetter key="letter" />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
