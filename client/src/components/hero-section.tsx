import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/Exterior-Front-Homepage-Alt-1_1751842464150.jpeg";

export default function HeroSection() {
  return (
    <section id="home" className="relative">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[700px] overflow-hidden">
        <img 
          src={heroImage}
          alt="Casa Benavides Inn"
          className="absolute inset-0 w-full h-full object-cover hero-image-position"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <div className="text-white px-4 max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-wide font-serif">CASA BENAVIDES</h1>
            <p className="text-2xl md:text-3xl mb-12 font-light tracking-wide">Historic Bed & Breakfast in the Heart of Taos</p>
            
            <div className="mb-16">
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Casa Benavides Inn offers a serene setting in the historic town of Taos, New Mexico. 
                Experience authentic Southwest hospitality in our beautifully restored adobe buildings, 
                just steps from the Plaza and surrounded by the natural beauty of the Sangre de Cristo Mountains.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button asChild size="lg" className="bg-casa-blue hover:bg-casa-blue-light text-lg px-8 py-6 font-medium tracking-wide">
                <a 
                  href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BOOK YOUR STAY
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-casa-blue text-lg px-8 py-6 font-medium tracking-wide"
              >
                <a href="tel:5757581772">CALL: 575-758-1772</a>
              </Button>
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
