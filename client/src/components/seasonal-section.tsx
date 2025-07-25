import { Button } from "../components/ui/button";

export default function SeasonalSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="luxury-heading text-5xl md:text-6xl mb-8 text-casa-navy">EXPERIENCE TAOS</h2>
            
            <p className="luxury-body text-sm text-gray-900 leading-relaxed">
              From world-class skiing at Taos Ski Valley to fireside evenings, vibrant art galleries, and unforgettable Southwestern cuisine. Casa Benavides puts you in the heart of it all.
            </p>
            
            
            
            <div className="pt-6">
              <Button 
                asChild 
                className="luxury-button text-white rounded-full"
              >
                <a 
                  href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1&promo=WINTER25"
                  target="_blank"
                  rel="noopener noreferrer"
                >BOOK YOUR ESCAPE</a>
              </Button>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-casa-blue/20 to-transparent rounded-2xl transform -rotate-2 group-hover:-rotate-1 smooth-transition"></div>
            <img 
              src="/casa-sunset-moon.jpg"
              alt="Casa Benavides Inn at sunset with full moon over adobe architecture"
              className="relative w-full h-[500px] object-cover rounded-2xl luxury-shadow smooth-transition group-hover:scale-105"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}