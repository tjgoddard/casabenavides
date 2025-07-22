import { useState, useEffect } from "react";
import { trackReservationClick } from "@/lib/analytics";
import logoImage from "@assets/casa-benavides-your-front-Photoroom-removebg-preview_1752360228306.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <a href="/" className="block">
            <img 
              src={logoImage} 
              alt="Casa Benavides Inn Logo" 
              className={`hover:opacity-80 transition-all duration-300 ${
                isScrolled ? 'h-16 w-auto' : 'h-32 w-auto'
              }`}
              style={{ aspectRatio: '1/1' }}
              sizes="(max-width: 640px) 128px, 128px"
              loading="eager"
              decoding="async"
            />
          </a>
          {isScrolled && (
            <a 
              href="/"
              className="text-lg font-medium tracking-wide hover:opacity-80 smooth-transition py-2 px-4 text-center min-h-[40px] flex items-center justify-center border rounded-sm text-gray-900 border-gray-300 hover:border-gray-500 active:bg-gray-100"
            >
              HOME
            </a>
          )}
        </div>
        
        <div className="flex flex-col space-y-2 items-end">
          <a 
            href="tel:+15757581772" 
            className={`text-sm font-medium tracking-wide hover:opacity-80 smooth-transition whitespace-nowrap ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            +1 (575) 758-1772
          </a>
          <a 
            href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 text-gray-800 px-3 py-1 text-xs font-medium tracking-wide hover:bg-gray-300 smooth-transition text-center whitespace-nowrap"
            onClick={() => trackReservationClick('navigation_check_availability')}
          >
            CHECK AVAILABILITY
          </a>
        </div>
      </div>
    </nav>
  );
}