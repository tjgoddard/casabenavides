import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage1 from "@assets/Exterior-Front-Homepage-Alt-1_1752358119635.jpg";
import heroImage2 from "@assets/iStock-1458935906_1752360314185.jpg";
import heroImage3 from "@assets/f4f18f_8c67a594acb642f79ba51f013c955aca~mv2 (1)_1752358146484.avif";
import logoImage from "@assets/f4f18f_a6469b265dcd46f3a644733b43dd2045~mv2 (2)-Photoroom_1752359300963.jpg";

export default function HeroSection() {
  const images = [
    {
      src: heroImage1,
      alt: "Casa Benavides Inn - Adobe Architecture at Sunset"
    },
    {
      src: heroImage2,
      alt: "Taos Mountain Landscape at Sunset"
    },
    {
      src: heroImage3,
      alt: "Casa Benavides Inn - Southwest Architecture"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Image carousel */}
        {images.map((image, index) => (
          <img 
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            } ${index === 0 ? 'object-cover object-center md:object-center' : 'object-cover object-center'}`}
            style={{
              objectPosition: index === 0 ? 'center 30%' : 'center center'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <div className="text-white px-4 max-w-6xl mx-auto">
            <p className="luxury-subheading text-2xl md:text-4xl mb-12 font-light tracking-wide text-white/90">Historic Bed & Breakfast in the Heart of Taos</p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-8">
              <a 
                href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-medium tracking-wide hover:text-white/80 smooth-transition"
              >
                STAY
              </a>
              <a 
                href="/contact"
                className="text-white text-lg font-medium tracking-wide hover:text-white/80 smooth-transition"
              >
                EXPERIENCES
              </a>
              <a 
                href="/breakfast"
                className="text-white text-lg font-medium tracking-wide hover:text-white/80 smooth-transition"
              >
                BREAKFAST
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
