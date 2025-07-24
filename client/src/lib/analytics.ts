// Define the dataLayer globally for Google Tag Manager
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Track page views - GTM is now loaded directly in HTML head
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  
  window.dataLayer.push({
    event: 'page_view',
    page_path: url
  });
};

// Track events  
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  
  window.dataLayer.push({
    event: action,
    event_category: category,
    event_label: label,
    value: value,
  });
};