import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Users, Calendar, MapPin } from "lucide-react";

export default function GroupReservations() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="luxury-heading text-5xl md:text-6xl mb-8 text-casa-navy">GROUP RESERVATIONS</h1>
            <p className="luxury-body text-sm text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Plan your special event, retreat, or group getaway at Casa Benavides Historic Bed & Breakfast. We offer personalized service and authentic Taos charm for groups of all sizes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Perfect for Groups</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Casa Benavides is the ideal venue for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Wedding parties and celebrations</li>
                  <li>Corporate retreats and meetings</li>
                  <li>Family reunions and gatherings</li>
                  <li>Art and photography workshops</li>
                  <li>Wellness and yoga retreats</li>
                  <li>Special interest group tours</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Group Benefits</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-casa-blue mt-1 mr-3 flex-shrink-0" />
                  <p>Exclusive group rates for 8+ rooms</p>
                </div>
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-casa-blue mt-1 mr-3 flex-shrink-0" />
                  <p>Flexible booking terms for group events</p>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-casa-blue mt-1 mr-3 flex-shrink-0" />
                  <p>Prime location near Taos Plaza</p>
                </div>
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-casa-blue mt-1 mr-3 flex-shrink-0" />
                  <p>Personalized concierge services</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-casa-light rounded-xl p-8 mb-12">
            <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide text-center">Group Rates & Packages</h2>
            <div className="space-y-6 luxury-body text-gray-900">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="luxury-subheading text-xl font-medium mb-2 text-casa-navy">Small Groups</h3>
                  <p className="text-sm">8-15 rooms</p>
                  <p className="text-sm font-medium">10% discount</p>
                </div>
                <div className="text-center">
                  <h3 className="luxury-subheading text-xl font-medium mb-2 text-casa-navy">Medium Groups</h3>
                  <p className="text-sm">16-25 rooms</p>
                  <p className="text-sm font-medium">15% discount</p>
                </div>
                <div className="text-center">
                  <h3 className="luxury-subheading text-xl font-medium mb-2 text-casa-navy">Large Groups</h3>
                  <p className="text-sm">26+ rooms</p>
                  <p className="text-sm font-medium">20% discount</p>
                </div>
              </div>
              <p className="text-center text-sm mt-6">
                *Group rates are subject to availability and blackout dates may apply during peak seasons.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide text-center">Contact Our Group Coordinator</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-casa-blue mr-3" />
                  <span className="luxury-body text-gray-900">575-758-1772</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-casa-blue mr-3" />
                  <span className="luxury-body text-gray-900">groups@casabenavides.com</span>
                </div>
              </div>
              <div className="text-center">
                <Button 
                  asChild 
                  className="luxury-button text-white rounded-full"
                >
                  <a href="mailto:groups@casabenavides.com">
                    REQUEST GROUP QUOTE
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Booking Information</h2>
            <div className="space-y-4 luxury-body text-gray-900">
              <p>
                <strong>Advance Notice:</strong> We recommend booking group reservations at least 30 days in advance, especially during peak seasons (December-March and June-August).
              </p>
              <p>
                <strong>Deposit:</strong> A 25% deposit is required to secure group reservations, with the balance due 14 days prior to arrival.
              </p>
              <p>
                <strong>Cancellation:</strong> Group cancellations must be made at least 14 days prior to arrival. Special cancellation terms may apply for large groups.
              </p>
              <p>
                <strong>Payment:</strong> We accept major credit cards, checks, and wire transfers for group bookings.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}