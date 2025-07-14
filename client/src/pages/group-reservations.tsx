import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageHeaderCarousel from "@/components/page-header-carousel";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Users, Calendar, MapPin } from "lucide-react";

export default function GroupReservations() {
  return (
    <>
      <Navigation />
      <PageHeaderCarousel 
        title="GROUP RESERVATIONS" 
        subtitle="For conferences, meetings, and special events"
      />
      <main className="pt-16 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-12">
            <section>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Group Reservations are a single reservation of four (4) rooms, or more for single or multiple nights, paid for by a single or multiple payers.</p>
                <p>Group Reservations cannot be made using our automated online reservations system.</p>
                <p><strong>Group Reservations can only be made and confirmed by calling the Casa Benavides office at: 575-758-1772</strong></p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Deposit Requirements</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Group Reservations made within 90 days of arrival require a 100% non-refundable deposit. We understand that plans can change. Any unused portion of the non-refundable deposit can be applied toward a future reservation made within one year. The non-refundable deposit will be forfeited.</p>
                <p>Advanced Group Reservations made outside the 90-day arrival window require a 50% non-refundable deposit. The remaining 50% non-refundable balance must be paid by 90 days prior to arrival, or 50% of the room reservations will be cancelled at that time. We understand that plans can change. Otherwise, the non-refundable deposit will be forfeited.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Room Rates</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Group Reservations room prices are based upon double occupancy – Two (2) guests per room per night. Our room fees include our gourmet breakfast for each guest in our dining room, between the hours of 7:00 AM and 9:30 AM every morning. Any number of guests exceeding the double occupancy shall be charged an additional rate of $20 per person per night. If the number of room guests exceed the number of guests designated at the time the original reservation was made, then the additional charges will be collected at check-in.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Discounts</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Casa Benavides is a small family operated business and unable to offer any discounted rates. We do not participate in AARP or AAA travel membership programs, nor do we offer Government or Military discounts.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Check-In</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Room Check-In time for Group Reservations is from 3:00 PM to 7:00 PM Mountain time.</p>
                <p>Room Check-In is not available outside of this time window, unless advanced arrangements have been made with the Casa Benavides by calling 575-758-1772. Additional fees may apply for early or late check-in.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Check-Out</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p><strong>Room Check-Out is by 11:00 AM Mountain time</strong></p>
                <p>Extended Check-Out time is available by calling the front desk 575-758-1772. Additional fees may apply.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Conference & Meeting Room</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Conference & Meeting Room - is available for Group Reservations with advanced notice.</p>
                <p>An additional Conference Room fee may apply.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">No Smoking</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Casa Benavides is a non-smoking, non-vaping facility. Smoking/vaping is permitted only outdoors on the Casa Benavides property at a single location. Contact our front desk at 575-758-1772 for the designated area.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Guest Criteria</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Human guests including children are welcome. Non-human pets are not.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Payment</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>All deposits and payments can be made by using Cash, Check, Visa, MasterCard, American Express, or Discovery.</p>
              </div>
            </section>

            <div className="bg-casa-light rounded-xl p-8 mt-12">
              <div className="text-center">
                <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">For Group Reservations</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Phone className="w-5 h-5 text-casa-blue mr-3" />
                    <span className="luxury-body text-gray-900 text-lg">575-758-1772</span>
                  </div>
                  <p className="luxury-body text-gray-900 text-sm">Call to discuss your group reservation needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}