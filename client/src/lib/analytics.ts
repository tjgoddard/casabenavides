// Google Tag Manager integration
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize GTM (already loaded in HTML head)
export const initGA = () => {
  // GTM is already initialized in the HTML head
  console.log('Google Tag Manager is initialized');
};

// Track page views using GTM dataLayer
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  
  window.dataLayer.push({
    event: 'page_view',
    page_path: url
  });
};

// Track events using GTM dataLayer
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