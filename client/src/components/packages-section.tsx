import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PackagesSection() {
  const packages = [
    {
      title: "Romantic Getaway",
      description: "Celebrate romance with sparkling wine & chocolate",
      details: "Indulge in a romantic getaway including an upgrade at check-in to our next available room category, a sparkling wine and artisanal chocolate amenity, and sleep in with a 2:00pm late check-out.",
      image: "/api/placeholder/400/300",
      promo: "ROMANCE"
    },
    {
      title: "Bed & Breakfast",
      description: "Includes luxury accommodations and breakfast for two",
      details: "Start your mornings with breakfast included. Enjoy two entree breakfast items and two non-alcoholic beverage items of your choice every morning of your stay.",
      image: "/api/placeholder/400/300",
      promo: "BREAKFAST"
    },
    {
      title: "Taos Explorer",
      description: "Discover the magic of Taos with exclusive savings",
      details: "Experience outdoor adventure in the mountains, stroll through sun-drenched plazas, uncover handcrafted treasures, and savor authentic New Mexican cuisine.",
      image: "/api/placeholder/400/300",
      promo: "EXPLORE"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-casa-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-wide font-serif">SPECIALS & PACKAGES</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your stay with our carefully crafted packages designed to create unforgettable experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-casa-blue-accent bg-opacity-10 flex items-center justify-center">
                <div className="text-casa-blue text-6xl font-light">
                  {index + 1}
                </div>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-light tracking-wide mb-2">{pkg.title}</CardTitle>
                <CardDescription className="text-lg text-casa-blue font-medium">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center px-6 pb-8">
                <p className="text-gray-600 mb-6 leading-relaxed">{pkg.details}</p>
                <Button 
                  asChild 
                  className="bg-casa-blue hover:bg-casa-blue-light text-white px-8 py-3 font-medium tracking-wide"
                >
                  <a 
                    href={`https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1&promo=${pkg.promo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BOOK NOW
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-2 border-casa-blue text-casa-blue hover:bg-casa-blue hover:text-white px-8 py-4 font-medium tracking-wide"
          >
            <a href="/contact">VIEW ALL PACKAGES</a>
          </Button>
        </div>
      </div>
    </section>
  );
}