import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@assets/Exterior-Front-Homepage-Alt-1_1752358119635.jpg";
import heroImage2 from "@assets/iStock-1458935906_1752360314185.jpg";
import heroImage3 from "@assets/f4f18f_8c67a594acb642f79ba51f013c955aca~mv2 (1)_1752358146484.avif";
import heroImage4 from "@assets/IMG_3406_1752509363210.jpg";

interface PageHeaderCarouselProps {
  title: string;
  subtitle?: string;
}

export default function PageHeaderCarousel({ title, subtitle }: PageHeaderCarouselProps) {
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
    },
    {
      src: heroImage4,
      alt: "Casa Benavides Inn Interior - Authentic Southwest Decor"
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
        
        {/* Navigation buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-white/20 h-12 w-12 rounded-full"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-white/20 h-12 w-12 rounded-full"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
        
        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
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