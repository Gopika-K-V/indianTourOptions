import { useState, useEffect } from 'react';

const useHeaderToFix = (threshold) => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerThreshold = threshold ? threshold : 200;

      if (scrollY > headerThreshold) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isHeaderFixed;
};

export default useHeaderToFix;