import { useState, useEffect } from "react";
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
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-start justify-between">
        <div className="flex items-center">
          <a href="/" className="block">
            <img 
              src={logoImage} 
              alt="Casa Benavides Inn Logo" 
              className={`hover:opacity-80 transition-all duration-300 ${
                isScrolled ? 'h-16 w-auto' : 'h-32 w-auto'
              }`}
            />
          </a>
        </div>
        
        <div className="flex flex-col space-y-2 items-end">
          <a 
            href="tel:5757581772" 
            className={`text-sm font-medium tracking-wide hover:opacity-80 smooth-transition whitespace-nowrap ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            (575) 758-1772
          </a>
          <a 
            href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-sm text-xs font-medium tracking-wide hover:bg-gray-700 smooth-transition text-center whitespace-nowrap"
          >
            CHECK AVAILABILITY
          </a>
        </div>
      </div>
    </nav>
  );
}