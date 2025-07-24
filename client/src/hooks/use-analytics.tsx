import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';

// Global dataLayer declaration for GTM
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Track page views with GTM dataLayer
const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  
  // Push page view event to dataLayer (GTM will handle this)
  window.dataLayer.push({
    event: 'page_view',
    page_path: url
  });
};

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