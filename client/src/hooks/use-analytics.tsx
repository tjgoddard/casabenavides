import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { trackPageView } from '../lib/analytics';

export const useAnalytics = () => {
  const [location] = useLocation();
  const prevLocationRef = useRef<string>(location);
  
  useEffect(() => {
    if (location !== prevLocationRef.current) {
      // Scroll to top on route change
      window.scrollTo(0, 0);
      
      // Track page view
      trackPageView(location);
      prevLocationRef.current = location;
    }
  }, [location]);
};