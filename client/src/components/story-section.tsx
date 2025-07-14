export default function StorySection() {
  return (
    <section id="our-story" className="py-20 bg-casa-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="luxury-heading text-5xl md:text-6xl mb-8 text-casa-navy">OUR STORY</h2>
          <p className="text-sm text-gray-900 max-w-3xl mx-auto">
            A tale of love, family, and dedication spanning generations in the heart of Taos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/casa-owners-photo.jpg" 
              alt="Tom and Barbara McCarthy, owners of Casa Benavides Inn" 
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">A Love Story in Taos</h3>
            <div className="space-y-4 text-gray-900 text-sm leading-relaxed">
              <p>
                As is often the case in stories of happenstance, the arrival of the McCarthy and Benavides families to Taos during the 19th century set a life-long chain of events in motion for Tom McCarthy and Barbara Benavides, the owners of The Casa Benavides Inn.
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

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <img 
              src="/casa-historic-building.avif" 
              alt="Historic Casa Benavides building showing family heritage" 
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
          
          <div className="lg:order-1">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">From Educators to Innkeepers</h3>
            <div className="space-y-4 text-gray-900 text-sm leading-relaxed">
              <p>
                But eventually they became restless, deciding to change directions and bought the McCarthy family business, The El Mercado, opened The Old Mexico Shop and The Village Weavers Shop and eventually launched their own lodging business.
              </p>
              <p>
                On a whim in 1989, Tom and Barbara acquired the Lewis Art Gallery Building on Kit Carson Road, originally built by Barbara's father, Carlos Benavides. The Gallery, along with three other adjacent homes built by Carlos, and the original McCarthy family home, were converted into the living quarters and multiple guest rooms, and were officially named The Casa Benavides Inn.
              </p>
              <p>
                Now, over 30 years later, with the infusion of much artistic flair, hard work, sacrifice and dedication, The Casa Benavides Inn has become the premier hospitality lodging for visitors to Taos and Northern New Mexico.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Continuing the Legacy</h3>
            <p className="text-gray-900 text-sm leading-relaxed">
              Barbara McCarthy passed in June of 2016. Tom and a dedicated staff continue with the daily management of The Casa Benavides, preserving the warmth and hospitality that has made this inn a beloved destination for over three decades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
