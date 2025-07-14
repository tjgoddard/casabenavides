import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Policies() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="luxury-heading text-5xl md:text-6xl mb-8 text-casa-navy">POLICIES</h1>
            <p className="luxury-body text-sm text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Please review our hotel policies to ensure a comfortable stay for all guests.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Check-in & Check-out</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Check-in: 3:00 PM - 9:00 PM</p>
                <p>Check-out: 11:00 AM</p>
                <p>Late check-in arrangements can be made by contacting the front desk in advance.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Cancellation Policy</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Cancellations must be made at least 72 hours prior to arrival to avoid charges.</p>
                <p>No-shows will be charged the full amount of the reserved stay.</p>
                <p>During peak seasons and holidays, a 7-day cancellation notice may be required.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Pet Policy</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Casa Benavides is a pet-friendly establishment.</p>
                <p>Pet fee: $25 per night per pet.</p>
                <p>Pets must be well-behaved and supervised at all times.</p>
                <p>Pet owners are responsible for any damages caused by their pets.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Smoking Policy</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Casa Benavides is a smoke-free property.</p>
                <p>Smoking is permitted in designated outdoor areas only.</p>
                <p>A $200 cleaning fee will be charged for smoking violations in guest rooms.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Quiet Hours</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Quiet hours are observed from 10:00 PM to 8:00 AM.</p>
                <p>We ask all guests to be respectful of fellow travelers during these hours.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Parking</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Complimentary parking is available for registered guests.</p>
                <p>Parking spaces are assigned on a first-come, first-served basis.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Breakfast Service</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Breakfast is served daily from 7:00 AM to 9:30 AM in our dining room.</p>
                <p>Breakfast is included for up to two guests per room.</p>
                <p>Additional breakfast can be purchased for $18 per person.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Additional Information</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Casa Benavides reserves the right to modify these policies at any time.</p>
                <p>For questions about our policies, please contact us at 575-758-1772.</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}