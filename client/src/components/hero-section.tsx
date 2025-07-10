import { Button } from "@/components/ui/button";
import heroImage from "@assets/Exterior-Front-Homepage-Alt-1_1751842464150.jpeg";

export default function HeroSection() {
  return (
    <section id="home" className="relative">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[500px] sm:min-h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat hero-bg"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">Casa Benavides Inn</h1>
            <p className="text-xl md:text-2xl mb-8 font-light">Historic Bed & Breakfast in the Heart of Taos</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-casa-blue hover:bg-casa-blue-light text-lg shadow-lg">
                <a 
                  href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Your Stay
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-casa-blue text-lg"
              >
                <a href="tel:5757581772">Call: 575-758-1772</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
