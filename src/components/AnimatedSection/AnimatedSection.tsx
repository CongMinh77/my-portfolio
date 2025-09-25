import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Box, SxProps, Theme } from '@mui/material';
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight } from '../../animations/variants';

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  once?: boolean;
  customVariants?: Variants;
  className?: string;
  sx?: SxProps<Theme>;
}

/**
 * AnimatedSection component for section animations
 * @param {AnimatedSectionProps} props - Component props
 * @returns {JSX.Element} Animated section component
 */
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  customVariants,
  sx,
  className
}) => {
  // Select animation variant based on direction
  let variants: Variants;
  
  switch (direction) {
    case 'up':
      variants = fadeInUp;
      break;
    case 'left':
      variants = fadeInLeft;
      break;
    case 'right':
      variants = fadeInRight;
      break;
    case 'none':
    default:
      variants = fadeIn;
  }

  // Apply custom delay and duration
  const finalVariants: Variants = {
    hidden: variants.hidden,
    visible: {
      ...variants.visible,
      transition: {
        delay,
        duration,
      },
    },
  };

  // Use custom variants if provided
  const animationVariants = customVariants || finalVariants;

  return (
    <div className={className || ''}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-100px' }}
        variants={animationVariants}
      >
        <Box sx={sx}>
          {children}
        </Box>
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
