import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Google Analytics pageview bij elke routewijziging
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-W9C56ELPW7', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop; 