import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Box } from '@mui/material';

interface ScrollProgressBarProps {
  color?: string;
  height?: number;
  position?: 'top' | 'bottom';
  zIndex?: number;
}

/**
 * ScrollProgressBar component to show scroll progress
 * @param {ScrollProgressBarProps} props - Component props
 * @returns {JSX.Element} Scroll progress bar component
 */
const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  color = 'primary.main',
  height = 4,
  position = 'top',
  zIndex = 1100,
}) => {
  // Use Framer Motion's useScroll hook
  const { scrollYProgress } = useScroll();
  
  // Add spring physics for smoother animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Box
      component={motion.div}
      sx={{
        position: 'fixed',
        left: 0,
        right: 0,
        [position]: 0,
        height: `${height}px`,
        backgroundColor: color,
        transformOrigin: '0%',
        zIndex,
      }}
      style={{ scaleX }}
    />
  );
};

export default ScrollProgressBar;
