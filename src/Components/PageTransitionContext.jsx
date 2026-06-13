import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PageTransitionContext = createContext();

export const PageTransitionProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);
  const [transitionStep, setTransitionStep] = useState('idle'); // 'idle' | 'starting' | 'covered' | 'revealing'
  const navigate = useNavigate();

  const transitionTo = (url, cardId = null) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTransitionStep('starting');
    setActiveCardId(cardId);

    // Disable scrolling and interaction
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';
    window.lenis?.stop();

    // Layer 1 and 2 animation takes ~850ms to meet in center and cover screen
    setTimeout(() => {
      setTransitionStep('covered');

      // Perform routing
      navigate(url);

      // Scroll to top of page before revealing
      window.scrollTo(0, 0);

      // Short delay for route component mount, then start reveal
      setTimeout(() => {
        setTransitionStep('revealing');

        // Let the reveal complete, then unlock page interaction
        setTimeout(() => {
          setIsTransitioning(false);
          setTransitionStep('idle');
          setActiveCardId(null);
          document.body.style.overflow = '';
          document.body.style.pointerEvents = '';
          window.lenis?.start();
        }, 900);
      }, 150);
    }, 850);
  };

  return (
    <PageTransitionContext.Provider value={{ isTransitioning, activeCardId, transitionStep, transitionTo }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider');
  }
  return context;
};
