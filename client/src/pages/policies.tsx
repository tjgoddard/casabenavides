import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import HeaderBanner from "@/components/header-banner";

export default function Policies() {
  return (
    <>
      <Navigation />
      <HeaderBanner />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="luxury-heading text-5xl md:text-6xl mb-8 text-casa-navy">OUR POLICIES</h1>
            <p className="luxury-body text-sm text-gray-900 max-w-3xl mx-auto leading-relaxed">
              Policies for Individual Room Reservations
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Room Rates</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>ROOM RATES are published on our "Rates & Reservations" page. Room Rates are guaranteed through the duration of your reservation. Applicable New Mexico Gross Receipts tax and Lodgers tax are added at check-out.</p>
                <p><strong>ROOM RATES ARE BASED ON DOUBLE OCCUPANCY - TWO GUESTS</strong></p>
                <p><strong>$20.00 ADDITIONAL FEE CHARGED PER GUEST PER NIGHT OVER TWO GUESTS</strong></p>
                <p>Room rates & additional guest fees include the Casa Benavides gourmet breakfast each morning in our Guest Dining Room between the hours of 7:00 AM and 9:30 AM Mountain time. Entering the correct number of guests when completing your online reservation is required. You MUST call to reserve a room more than 7 nights.</p>
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
                <p><strong>3:00 PM to 7:00 PM Mountain Time</strong></p>
                <p>Advance notice is required to gain access to your room for early or late check-in.</p>
                <p>Additional fees may apply.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Check-Out</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p><strong>11:00 AM Mountain Time</strong></p>
                <p>Extended Check-Out time is available by calling the front desk. Additional fees WILL apply.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Deposit</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>One night minimum on all reserved rooms.</p>
                <p>50% deposit on all room reservations over one night.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Cancellations</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Must be made at least 15 days prior to reservation date to receive a refund of deposit. Cancellations made less than 15 days prior to arrival will forfeit the deposit.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">No Smoking</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Casa Benavides is a non-smoking, non-vaping facility. Smoking/vaping is permitted only outdoors on the Casa Benavides property at a single location.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Guest Criteria</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Children are welcome. We have a No Pet Policy.</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Payment</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Cash, Checks, Visa, Master Card, American Express, or Discovery</p>
              </div>
            </section>

            <section>
              <h2 className="luxury-subheading text-3xl md:text-4xl font-light mb-6 text-casa-navy tracking-wide">Group Reservations</h2>
              <div className="space-y-4 luxury-body text-gray-900">
                <p>Reservations of 4 rooms or more are available for conferences, meetings and event, however they cannot be made using our automated reservation system. Please call for details.</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}