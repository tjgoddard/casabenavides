// Image optimization utilities for mobile performance

export const addImageLoadListeners = () => {
  // Add loaded class to lazy images when they load
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
  lazyImages.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
    }
  });
};

export const optimizeImagesForMobile = () => {
  if (window.innerWidth <= 768) {
    // Reduce image quality on mobile devices
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add mobile-specific optimization attributes
      img.style.imageRendering = 'auto';
    });
  }
};

export const preloadCriticalImages = () => {
  // Only preload hero image on desktop, skip on mobile to save bandwidth
  if (window.innerWidth > 768) {
    const heroImageUrl = '/assets/IMG_4448 edit no sky_(2)_1752537525049.jpg';
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroImageUrl;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  }
};