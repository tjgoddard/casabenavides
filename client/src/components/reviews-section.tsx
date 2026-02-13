import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const reviews = [
  {
    quote:
      "Beautiful B & B well located in Taos. The spacious rooms are each unique and very comfortable. The staff were warm and helpful, cleanliness was excellent and the breakfast along with service was exceptional. Breakfast is phenomenal. Friendly table service & breakfast made to order. The fluffy egg bake with green chile & fresh tortillas were absolutely delicious. The fresh muffins were lovely and not sweet. Continuous coffee refills as well. Ample parking and an overflow parking lot nearby besides street parking. Lovely stay during your visit to Taos and the surrounding area.",
    author: "Betsy C.",
  },
  {
    quote:
      "This visit to Taos was my twelfth stay at Casa Benavides. That alone should tell you how I feel about this fantastic B&B. It's a perfect place to stay while exploring Taos and the surrounding area. Rooms are comfortable and well maintained. The walk to the Plaza is less than two blocks during which there are numerous shops and galleries to explore. Included in the daily room charge is a wonderful hot breakfast every morning. The menu and service is excellent. All that's required is to sign in and find a seat. The entire meal is delivered to you from the kitchen. They have a set menu but are willing to comply with requests if able. The grounds are well kept and buildings well maintained. Sitting areas are supplied in several locations besides numerous attached patio areas. It's my only choice in Taos for a comfortable stay.",
    author: "M Paula Willis",
  },
  {
    quote:
      "If you are visiting Taos and Casa Benavides has availability, just stay with them and do not look anywhere else. The accommodations are great, centrally located, and offer ample parking, not too far EV charging, and easy access to the city center. The rooms were spotless and well-stocked, but what really sets them apart is the atmosphere—the rustic furniture and beautiful wall decor make the stay feel so much more authentic and special. The homemade breakfast was a true delight—don't miss their \"family favorite\" or the baked egg dish! With almost everything in walking distance, Casa Benavides will be our first choice every time we visit Taos.",
    author: "Raja B.",
  },
];

const ROTATE_MS = 8000;

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Casa+Benavides+Inn+Taos+reviews";

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % reviews.length);
  }, []);

  useEffect(() => {
    const t = setInterval(goNext, ROTATE_MS);
    return () => clearInterval(t);
  }, [goNext]);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" aria-label="Guest reviews">
      {/* Textured background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/reviews-bg.webp')" }}
      />
      <div className="absolute inset-0 bg-black/15" aria-hidden="true" />
      {/* Top fade: gallery bottom fade continues into reviews (warm tan → transparent) */}
      <div
        className="absolute top-0 left-0 right-0 h-[220px] md:h-[260px] pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #e8e0d8 0%, rgba(232, 224, 216, 0.5) 45%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative w-full max-w-4xl mx-auto px-6 py-4 sm:px-8 sm:py-6 lg:px-10 text-center box-border">
        <h2
          className="text-5xl md:text-6xl mb-8 md:mb-12 text-[#faf7f2]"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Reviews
        </h2>

        <div className="relative min-h-[280px] md:min-h-[320px] w-full overflow-hidden">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-500 flex flex-col items-center"
              style={{
                opacity: i === index ? 1 : 0,
                pointerEvents: i === index ? "auto" : "none",
              }}
            >
              <blockquote
                className="luxury-body text-base sm:text-lg md:text-xl text-[#faf7f2] leading-relaxed drop-shadow-sm w-full max-w-full min-w-0 break-words line-clamp-[10] md:line-clamp-[7]"
              >
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <p className="mt-6 text-[#f5f0e8] text-sm sm:text-base w-full">— {review.author}</p>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="mt-6 text-[#faf7f2] text-sm font-medium underline underline-offset-2 hover:text-white transition-colors"
              >
                Read full review
              </button>
            </div>
          ))}
        </div>

        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#faf7f2] border border-[#faf7f2]/70 hover:bg-[#faf7f2]/10 rounded-sm transition-colors"
        >
          Read more reviews
        </a>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#faf7f2] focus:ring-offset-2 focus:ring-offset-[#c4b59a]"
              style={{
                backgroundColor: i === index ? "#faf7f2" : "rgba(250, 247, 242, 0.5)",
              }}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-lg bg-[#f5f0e8] border-[#c4b59a] text-[#2c2419]">
          <DialogHeader>
            <DialogTitle className="luxury-heading text-lg">Full review</DialogTitle>
          </DialogHeader>
          <blockquote className="luxury-body text-base text-[#2c2419] leading-relaxed">
            &ldquo;{reviews[index].quote}&rdquo;
          </blockquote>
          <p className="mt-4 text-[#2c2419]/80 text-sm">— {reviews[index].author}</p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold uppercase tracking-wider text-[#2c2419] underline underline-offset-2 hover:no-underline"
          >
            Read more reviews on Google
          </a>
        </DialogContent>
      </Dialog>
    </section>
  );
}
