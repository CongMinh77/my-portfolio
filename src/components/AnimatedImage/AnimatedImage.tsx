import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Box, SxProps, Theme } from '@mui/material';
import { fadeIn, fadeInUp, scaleUp } from '../../animations/variants';

interface AnimatedImageProps {
  className?: string;
  src: string;
  alt: string;
  effect?: 'fade' | 'fadeUp' | 'scale';
  delay?: number;
  duration?: number;
  once?: boolean;
  width?: string | number;
  height?: string | number;
  customVariants?: Variants;
  sx?: SxProps<Theme>;
}

/**
 * AnimatedImage component for image animations
 * @param {AnimatedImageProps} props - Component props
 * @returns {JSX.Element} Animated image component
 */
const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  effect = 'fade',
  delay = 0,
  duration = 0.6,
  once = true,
  width = '100%',
  height = 'auto',
  customVariants,
  sx,
  className
}) => {
  // Select animation variant based on effect
  let variants: Variants;
  
  switch (effect) {
    case 'fadeUp':
      variants = fadeInUp;
      break;
    case 'scale':
      variants = scaleUp;
      break;
    case 'fade':
    default:
      variants = fadeIn;
  }

  // Apply custom delay
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

  const boxSx: SxProps<Theme> = {
    overflow: 'hidden',
    width,
    height,
    ...sx,
  };

  return (
    <div className={className || ''}>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        variants={animationVariants}
      >
        <Box
          sx={boxSx}
        >
          <Box
            component="img"
            src={src}
            alt={alt}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
      </motion.div>
    </div>
  );
};

export default AnimatedImage;
