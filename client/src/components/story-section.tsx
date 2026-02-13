import { trackEvent } from "../lib/analytics";
import heroImage from "../../../attached_assets/IMG_4448_edit_no_sky_1752537525049.webp";

const CHAPTER_MAX_W = "max-w-[720px]";

export default function StorySection() {
  return (
    <section id="our-story-chapters" className="bg-casa-light">
      {/* Chapter 1: A Love Story in Taos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <img
              src="/story-love-taos.png"
              alt="Vintage photograph evoking Taos heritage and tradition"
              className="w-full h-80 lg:h-96 object-cover object-[center_28%] rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Early 1900s</p>
            <h2 className="luxury-subheading text-3xl md:text-4xl font-light text-casa-navy tracking-wide mb-8">
              A Love Story in Taos
            </h2>
            <div className={`space-y-6 luxury-body text-gray-800 text-lg leading-loose ${CHAPTER_MAX_W}`}>
              <p>
                As is often the case in stories of happenstance, the arrival of the McCarthy and Benavides families to Taos in the early 1900s set a life-long chain of events in motion for Tom McCarthy and Barbara Benavides, the owners of The Casa Benavides Inn.
              </p>
              <p>
                By the time Tom and Barbara were born, while the country was recovering from The Great Depression, their parents had already established successful businesses in the Taos Community.
              </p>
              <p>
                Tom and Barbara's families lived near each other in homes on Kit Carson Road. Over time, their neighborhood friendship blossomed from childhood sweethearts, into a high school romance and onto a lifetime of love and marriage. After graduating from college, Tom & Barbara remained in Taos to begin raising their own family of three children. They launched careers as educators with Barbara teaching physical education and Tom coaching basketball, leading his team to three state championships.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 2: From Educators to Innkeepers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 bg-casa-cream">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:order-2">
            <img
              src={heroImage}
              alt="Casa Benavides Inn - Adobe Architecture at Sunset with Turquoise Accents"
              className="w-full h-80 lg:h-96 object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="lg:order-1">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">1988</p>
            <h2 className="luxury-subheading text-3xl md:text-4xl font-light text-casa-navy tracking-wide mb-8">
              From Educators to Innkeepers
            </h2>
            <div className={`space-y-6 luxury-body text-gray-800 text-lg leading-loose ${CHAPTER_MAX_W}`}>
              <p>
                But eventually they became restless, deciding to change directions and bought the McCarthy family business, The El Mercado, opened The Old Mexico Shop and The Village Weavers Shop and eventually launched their own lodging business.
              </p>
              <p>
                In 1988, Tom and Barbara acquired the Lewis Art Gallery Building on Kit Carson Road, originally built by Barbara's father, Carlos Benavides. The Gallery, along with three other adjacent homes built by Carlos, and the original McCarthy family home, were converted into the living quarters and multiple guest rooms, and were officially named The Casa Benavides Inn.
              </p>
              <p>
                Now, over 30 years later, with the infusion of much artistic flair, hard work, sacrifice and dedication, The Casa Benavides Inn has become the premier hospitality lodging for visitors to Taos and Northern New Mexico.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 3: Continuing the Legacy — no image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">2016</p>
          <h2 className="luxury-subheading text-3xl md:text-4xl font-light text-casa-navy tracking-wide mb-8">
            Continuing the Legacy
          </h2>
          <div className={`space-y-6 luxury-body text-gray-800 text-lg leading-loose ${CHAPTER_MAX_W}`}>
            <p>
              Barbara McCarthy passed in June of 2016. Tom and a dedicated staff continue with the daily management of The Casa Benavides, preserving the warmth and hospitality that has made this inn a beloved destination for over three decades.
            </p>
          </div>
          <div className="mt-10">
            <div className="textured-btn-wrap inline-block">
              <div className="textured-btn-border" />
              <a
                href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
                target="_blank"
                rel="noopener noreferrer"
                className="textured-btn"
                onClick={() => trackEvent("click", "reservation", "story_check_availability")}
              >
                Check Availability
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
