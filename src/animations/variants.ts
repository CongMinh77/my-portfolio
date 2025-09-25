import { Variants } from 'framer-motion';

/**
 * Fade in animation variants
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
};

/**
 * Fade in up animation variants
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
};

/**
 * Fade in down animation variants
 */
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
};

/**
 * Fade in left animation variants
 */
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
};

/**
 * Fade in right animation variants
 */
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
};

/**
 * Scale animation variants
 */
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

/**
 * Stagger children animation variants
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

/**
 * Bounce animation variants
 */
export const bounce: Variants = {
  hidden: { 
    opacity: 0,
    y: 0 
  },
  visible: {
    opacity: 1,
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.5, 1],
      ease: 'easeInOut'
    }
  }
};

/**
 * Rotate animation variants
 */
export const rotate: Variants = {
  hidden: { 
    opacity: 0,
    rotate: -90 
  },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

/**
 * Flip animation variants
 */
export const flip: Variants = {
  hidden: { 
    opacity: 0,
    rotateY: 90 
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

/**
 * Text character animation variants
 */
export const textCharacter: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};
