// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics (already loaded in HTML head)
export const initGA = () => {
  // Google Analytics is already initialized in the HTML head
  // This function is kept for compatibility but does nothing
  console.log('Google Analytics is already initialized');
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', 'G-TDTMB2DBTF', {
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
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track Google Ads conversions
export const trackConversion = (conversionId?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  // Default to the contact form conversion
  const conversion = conversionId || 'AW-11090641794/HxekCObmo5wZEIKHt6gp';
  
  window.gtag('event', 'conversion', {
    send_to: conversion,
  });
  
  // Also track as a regular event for analytics
  trackEvent('conversion', 'contact', 'form_submission');
};