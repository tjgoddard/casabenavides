import { useEffect } from "react";
import Navigation from "@/components/navigation";
import PageHeaderCarousel from "@/components/page-header-carousel";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Phone } from "lucide-react";
import { trackEvent, trackReservationClick } from "@/lib/analytics";
import mapImage from "@assets/Casa-Benavides-Room-Map-web_1752848895132.jpg";

export default function Map() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    trackEvent('download', 'map', 'room_map_download');
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = mapImage;
    link.download = 'Casa-Benavides-Room-Map.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageHeaderCarousel 
        title="PROPERTY MAP"
        subtitle="Navigate Our Historic Grounds"
      />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <div className="text-center mb-16">
            <h2 className="luxury-heading text-4xl md:text-5xl mb-6 text-casa-navy">
              CASA BENAVIDES ROOM MAP
            </h2>
            <p className="luxury-body text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Explore our historic property layout featuring 36 uniquely designed rooms and suites, 
              multiple patios, and convenient parking areas. Each space showcases authentic Southwest 
              architecture and one-of-a-kind character.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleDownload}
                className="bg-casa-blue hover:bg-casa-blue-light text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Map
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-casa-blue text-casa-blue hover:bg-casa-blue hover:text-white"
              >
                <a 
                  href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackReservationClick('map_page_book_now')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Book Your Stay
                </a>
              </Button>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-casa-light rounded-2xl p-8 mb-16">
            <div className="max-w-5xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-casa-blue/10 to-transparent rounded-xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                <img 
                  src={mapImage}
                  alt="Casa Benavides Inn detailed room map showing all 36 rooms, patios, and parking areas"
                  className="relative w-full h-auto rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                  loading="lazy"
                  sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, 1000px"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent rounded-xl"></div>
              </div>
              
              {/* Map Legend */}
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="luxury-subheading text-xl mb-4 text-casa-navy">Room Features</h3>
                  <ul className="luxury-body text-sm space-y-2 text-gray-700">
                    <li><strong>1st Floor Layout:</strong> Easily accessible rooms with patio access</li>
                    <li><strong>2nd Floor Layout:</strong> Elevated rooms with enhanced privacy</li>
                    <li><strong>Multiple Patios:</strong> Outdoor spaces for relaxation</li>
                    <li><strong>Parking Areas:</strong> Convenient guest parking throughout property</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="luxury-subheading text-xl mb-4 text-casa-navy">Common Areas</h3>
                  <ul className="luxury-body text-sm space-y-2 text-gray-700">
                    <li><strong>Dining Room:</strong> Where breakfast is served daily</li>
                    <li><strong>Great Room:</strong> Community gathering space</li>
                    <li><strong>Reception:</strong> Check-in and guest services</li>
                    <li><strong>Lobby:</strong> Welcome area with local information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="text-center">
            <h3 className="luxury-subheading text-2xl mb-6 text-casa-navy">
              Need Help Finding Your Room?
            </h3>
            <p className="luxury-body text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Our staff is always available to help you navigate the property. Don't hesitate to ask for directions or assistance during your stay.</p>
            
            <Button 
              asChild 
              className="bg-casa-blue hover:bg-casa-blue-light text-white"
            >
              <a 
                href="tel:+15757581772"
                onClick={() => trackEvent('click', 'contact', 'map_page_phone')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call (575) 758-1772
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}