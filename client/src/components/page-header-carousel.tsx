import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@assets/IMG_4448 edit no sky_(2)_1752537525049.jpg";
import heroImage2 from "@assets/iStock-1458935906_1752360314185.jpg";
import heroImage3 from "@assets/IMG_4446_1752533547603.jpg";
import heroImage4 from "@assets/IMG_4445_1752533547607.jpg";

interface PageHeaderCarouselProps {
  title: string;
  subtitle?: string;
}

export default function PageHeaderCarousel({ title, subtitle }: PageHeaderCarouselProps) {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  return (
    <section className="relative">
      {/* Page Header Carousel */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        {/* Image carousel */}
        {images.map((image, index) => (
          <img 
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            } object-cover object-center`}
            style={{
              objectPosition: index === 0 ? '25% 30%' : index === 2 ? '25% center' : 'center center'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        
        
        {/* Down arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </div>
        
        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <div className="text-white px-4 max-w-4xl mx-auto">
            <h1 className="luxury-heading text-4xl md:text-5xl lg:text-6xl mb-4 text-white drop-shadow-lg">
              {title}
            </h1>
            {subtitle && (
              <p className="luxury-subheading text-lg md:text-xl font-light tracking-wide text-white/90 drop-shadow-lg">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}