import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState, useEffect, lazy } from "react";
import { trackEvent, trackReservationClick } from "@/lib/analytics";
import heroImage1 from "@assets/IMG_4448 edit no sky_(2)_1752537525049.jpg";
import heroImage2 from "@assets/iStock-1458935906_1752360314185.jpg";
import heroImage3 from "@assets/IMG_4446_1752533547603.jpg";
import heroImage4 from "@assets/IMG_4445_1752533547607.jpg";
import logoImage from "@assets/f4f18f_a6469b265dcd46f3a644733b43dd2045~mv2 (2)-Photoroom_1752359300963.jpg";

interface HeroSectionProps {
  showSubtitle?: boolean;
}

export default function HeroSection({ showSubtitle = false }: HeroSectionProps) {
  const images = [
    {
      src: heroImage1,
      alt: "Casa Benavides Inn - Adobe Architecture at Sunset with Turquoise Accents"
    },
    {
      src: heroImage2,
      alt: "Taos Mountain Landscape at Sunset"
    },
    {
      src: heroImage3,
      alt: "Casa Benavides Inn - Courtyard Patio with Colorful Umbrellas"
    },
    {
      src: heroImage4,
      alt: "Casa Benavides Inn - Interior Living Space with Southwest Decor"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [imagesLoaded, setImagesLoaded] = useState(new Set([0])); // Only load first image initially
  
  useEffect(() => {
    // Preload the first hero image for better LCP
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroImage1;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
    
    // Start carousel after initial load
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        // Lazy load the next image when it's about to be shown
        if (!imagesLoaded.has(nextIndex)) {
          setImagesLoaded(prev => new Set(Array.from(prev).concat(nextIndex)));
        }
        return nextIndex;
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length, imagesLoaded]);

  // Load remaining images after first paint to reduce initial payload
  useEffect(() => {
    const loadRemainingImages = () => {
      // Load images 2-4 after initial render with longer delay on mobile
      const isMobile = window.innerWidth <= 768;
      const delay = isMobile ? 1000 : 500; // Longer delay on mobile to prioritize initial load
      
      setTimeout(() => {
        setImagesLoaded(prev => new Set(Array.from(prev).concat([1, 2, 3])));
      }, delay);
    };
    
    // Load images after a short delay
    loadRemainingImages();
  }, []);

  return (
    <section id="home" className="relative">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Image carousel with progressive loading */}
        {images.map((image, index) => {
          // Only render images that should be loaded
          if (!imagesLoaded.has(index)) {
            // Show placeholder for unloaded images
            return (
              <div 
                key={`placeholder-${index}`}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                } bg-gradient-to-br from-casa-blue/20 to-casa-navy/30 animate-pulse`}
              />
            );
          }
          
          return (
            <img 
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              } object-cover object-center`}
              style={{
                objectPosition: index === 0 ? '25% 30%' : index === 2 ? '25% center' : index === 3 ? 'center center' : 'center center',
                aspectRatio: '16/9',
                imageRendering: 'auto'
              }}
              fetchpriority={index === 0 ? 'high' : 'low'}
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 85vw, 90vw"
              decoding="async"
            />
          );
        })}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <div className="text-white px-4 max-w-6xl mx-auto">
            
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-8">
              <a 
                href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-medium tracking-wide hover:text-white/80 smooth-transition py-3 px-6 text-center min-h-[48px] flex items-center justify-center border border-white/30 hover:border-white/60 active:bg-white/10 rounded-sm"
                onClick={() => trackReservationClick('hero_stay_button')}
              >
                STAY
              </a>
              <a 
                href="/our-story"
                className="text-white text-lg font-medium tracking-wide hover:text-white/80 smooth-transition py-3 px-6 text-center min-h-[48px] flex items-center justify-center border border-white/30 hover:border-white/60 active:bg-white/10 rounded-sm"
              >
                OUR STORY
              </a>
              <a 
                href="/breakfast"
                className="text-white text-lg font-medium tracking-wide hover:text-white/80 smooth-transition py-3 px-6 text-center min-h-[48px] flex items-center justify-center border border-white/30 hover:border-white/60 active:bg-white/10 rounded-sm"
              >
                BREAKFAST
              </a>
              <a 
                href="/experiences"
                className="text-white text-lg font-medium tracking-wide hover:text-white/80 smooth-transition py-3 px-6 text-center min-h-[48px] flex items-center justify-center border border-white/30 hover:border-white/60 active:bg-white/10 rounded-sm"
              >
                EXPERIENCES
              </a>
            </div>
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
