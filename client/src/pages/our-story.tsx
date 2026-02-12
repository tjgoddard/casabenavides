import { trackEvent } from "../lib/analytics";
import Navigation from "../components/navigation";
import StorySection from "../components/story-section";
import Footer from "../components/footer";

export default function OurStory() {
  return (
    <div className="min-h-screen pb-14 md:pb-0">
      <Navigation />
      <main className="pt-24 md:pt-28">
        {/* Above-the-fold hero: H1 → subtitle → intro paragraphs → CTA; two-column with image */}
        <section className="relative overflow-hidden py-12 md:py-16 bg-casa-cream">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-center">
              {/* Left: H1, subtitle, intro copy, CTA — mobile: order-2 so image stacks above */}
              <div className="order-2 lg:order-1 flex flex-col justify-center">
                <h1 className="luxury-heading text-4xl md:text-5xl lg:text-6xl text-casa-navy mb-4">
                  Our Story
                </h1>
                <p className="luxury-subheading text-lg md:text-xl font-light text-gray-700 mb-8 max-w-xl leading-relaxed">
                  A tale of love, family, and dedication spanning generations in the heart of Taos
                </p>
                <div className="space-y-6 max-w-[720px]">
                  <p className="luxury-body text-lg text-gray-800 leading-loose">
                    Nestled in the heart of historic Taos, Casa Benavides Inn offers a peaceful retreat surrounded by classic adobe architecture and Taos mountains.
                  </p>
                  <p className="luxury-body text-lg text-gray-800 leading-loose">
                    Our award-winning Inn is known for its breakfast - thoughtfully crafted with local flavors - and its warm, welcoming atmosphere rooted in Southwest charm. Guests enjoy the perfect blend of comfort, culture, and cuisine in an authentic Taos setting.
                  </p>
                  <p className="luxury-body text-lg text-gray-800 leading-loose">
                    Casa Benavides has proudly been named one of the top bed and breakfasts in Taos for multiple years. With 36 individually styled rooms and suites, each space showcases artistic details, traditional New Mexican furnishings, and one-of-a-kind character - offering a truly unique Taos lodging experience.
                  </p>
                </div>
                <div className="mt-8 textured-btn-wrap inline-block">
                  <div className="textured-btn-border" />
                  <a
                    href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="textured-btn"
                    onClick={() => trackEvent("click", "reservation", "our_story_hero_cta")}
                  >
                    Check Availability
                  </a>
                </div>
              </div>
              {/* Right: featured image — mobile: order-1 so image on top */}
              <div className="order-1 lg:order-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-casa-blue/10 to-transparent rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-300" />
                <img
                  src="/casa-owners-photo.jpg"
                  alt="Tom and Barbara McCarthy, owners of Casa Benavides Inn"
                  className="relative w-full h-[360px] sm:h-[420px] lg:h-[520px] object-cover rounded-2xl shadow-xl"
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
        <StorySection />
      </main>
      <Footer />
    </div>
  );
}
