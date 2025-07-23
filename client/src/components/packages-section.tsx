import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export default function PackagesSection() {
  const packages = [
    {
      title: "Romantic Getaway",
      description: "Celebrate romance with sparkling wine & chocolate",
      details: "Indulge in a romantic getaway including an upgrade at check-in to our next available room category, a sparkling wine and artisanal chocolate amenity, and sleep in with a 2:00pm late check-out.",
      promo: "ROMANCE"
    },
    {
      title: "Bed & Breakfast",
      description: "Includes luxury accommodations and breakfast for two",
      details: "Start your mornings with breakfast included. Enjoy two entree breakfast items and two non-alcoholic beverage items of your choice every morning of your stay.",
      promo: "BREAKFAST"
    },
    {
      title: "Taos Explorer",
      description: "Discover the magic of Taos with exclusive savings",
      details: "Experience outdoor adventure in the mountains, stroll through sun-drenched plazas, uncover handcrafted treasures, and savor authentic New Mexican cuisine.",
      promo: "EXPLORE"
    }
  ];

  return (
    <section className="py-32 bg-casa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="luxury-heading text-5xl md:text-6xl mb-8 text-casa-navy">SPECIALS & PACKAGES</h2>
          <p className="luxury-body text-sm text-gray-900 max-w-4xl mx-auto leading-relaxed">
            Enhance your stay with our carefully crafted packages designed to create unforgettable experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {packages.map((pkg, index) => (
            <div key={index} className="luxury-card rounded-3xl p-8 text-center luxury-hover group">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-casa-blue to-casa-blue-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition">
                  <span className="text-2xl font-light text-white">{index + 1}</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="luxury-subheading text-3xl font-light tracking-wide text-casa-navy mb-4">{pkg.title}</h3>
                <p className="text-sm text-casa-blue font-medium mb-6">{pkg.description}</p>
                <p className="luxury-body text-sm text-gray-900 leading-relaxed mb-8">{pkg.details}</p>
                
                <Button 
                  asChild 
                  className="luxury-button text-white rounded-full group-hover:scale-105 smooth-transition"
                >
                  <a 
                    href={`https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1&promo=${pkg.promo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BOOK NOW
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <Button 
            asChild 
            variant="outline" 
            className="border-2 border-casa-blue text-casa-blue hover:bg-casa-blue hover:text-white px-10 py-5 font-medium tracking-wide rounded-full smooth-transition"
          >
            <a href="/contact">VIEW ALL PACKAGES</a>
          </Button>
        </div>
      </div>
    </section>
  );
}