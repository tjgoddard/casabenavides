// Define the dataLayer globally for Google Tag Manager
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize Google Tag Manager (already loaded in HTML head)
export const initGA = () => {
  // Google Tag Manager is already initialized in the HTML head
  // This function is kept for compatibility but does nothing
  console.log('Google Tag Manager is initialized');
};

// Track page views - useful for single-page applications
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