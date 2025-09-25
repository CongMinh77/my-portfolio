import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Box, Typography, TypographyProps } from '@mui/material';
import { textCharacter } from '../../animations/variants';

interface AnimatedTextProps extends Omit<TypographyProps, 'component'> {
  text: string;
  type?: 'word' | 'character';
  delay?: number;
  once?: boolean;
  className?: string;
}

/**
 * AnimatedText component for text animations
 * @param {AnimatedTextProps} props - Component props
 * @returns {JSX.Element} Animated text component
 */
const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  type = 'word',
  delay = 0,
  once = true,
  className = '',
  ...typographyProps
}) => {
  // Split text into words or characters
  const items = type === 'word' 
    ? text.split(' ').map(word => `${word}\u00A0`) 
    : text.split('');

  // Container variants with delay
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={containerVariants}
      className={className}
    >
      <Typography {...typographyProps}>
        {items.map((item, index) => (
          <motion.span
            key={index}
            variants={textCharacter}
            style={{ display: type === 'word' ? 'inline-block' : 'inline' }}
          >
            {item}
          </motion.span>
        ))}
      </Typography>
    </Box>
  );
};

export default AnimatedText;
