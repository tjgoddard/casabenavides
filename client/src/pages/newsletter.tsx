import Navigation from "../components/navigation";
import Footer from "../components/footer";
import PageHeaderCarousel from "../components/page-header-carousel";

const NEWSLETTER_SIGNUP_URL =
  "https://resnexus.com/resnexus/reservations/signup/7C459783-8167-4C52-9A85-DF5D26CA7985/subscribe";

export default function Newsletter() {
  return (
    <div className="min-h-screen pb-14 md:pb-0">
      <Navigation />
      <PageHeaderCarousel title="NEWSLETTER" subtitle="Sign up for specials and news from Casa Benavides" />
      <main className="py-16 bg-casa-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="luxury-body text-lg text-gray-800 leading-relaxed mb-10">
            Join our list for exclusive offers, seasonal specials, and news from the inn. We’ll only send updates worth reading.
          </p>
          <a
            href={NEWSLETTER_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-base font-semibold uppercase tracking-widest text-white bg-casa-blue hover:bg-casa-blue/90 transition-colors rounded-sm shadow-md"
          >
            Sign up for our newsletter
          </a>
          <p className="mt-6 text-sm text-gray-600">
            You’ll be taken to our secure signup form in a new tab.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
