import React from 'react';
import { motion, AnimatePresence, Transition } from 'framer-motion';
import { useLocation } from 'react-router-dom';

/**
 * Page transition animation variants
 */
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

/**
 * Page transition animation settings
 */
const pageTransition: Transition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.5,
};

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * PageTransition component that wraps page content with animation effects
 * @param {PageTransitionProps} props - Component props
 * @returns {JSX.Element} Animated page transition component
 */
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="page-transition-container"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
