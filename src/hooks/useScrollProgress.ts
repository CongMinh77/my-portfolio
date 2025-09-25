import { useState, useEffect } from 'react';

/**
 * Hook to track scroll progress on the page
 * @returns {number} Scroll progress percentage (0-100)
 */
export const useScrollProgress = (): number => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      // Calculate how much the user has scrolled
      const currentScrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        // Convert to percentage and limit between 0-100
        const calculatedProgress = Math.min(
          Math.max((currentScrollY / scrollHeight) * 100, 0),
          100
        );
        setProgress(calculatedProgress);
      } else {
        setProgress(0);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    
    // Initial calculation
    updateScrollProgress();

    // Clean up
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return progress;
};

export default useScrollProgress;
