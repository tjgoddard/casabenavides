import { Link } from "wouter";
import bannerImage from "@assets/f4f18f_a6469b265dcd46f3a644733b43dd2045~mv2 (2)_1752358798556.avif";

export default function HeaderBanner() {
  return (
    <header className="relative py-3 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-white font-medium text-lg tracking-wide hover:text-white/80 smooth-transition">
            CASA BENAVIDES
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white/90 hover:text-white smooth-transition text-sm font-medium tracking-wide">
            HOME
          </Link>
          <Link href="/our-story" className="text-white/90 hover:text-white smooth-transition text-sm font-medium tracking-wide">
            OUR STORY
          </Link>
          <Link href="/breakfast" className="text-white/90 hover:text-white smooth-transition text-sm font-medium tracking-wide">
            BREAKFAST
          </Link>
          <Link href="/contact" className="text-white/90 hover:text-white smooth-transition text-sm font-medium tracking-wide">
            CONTACT
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a 
            href="tel:5757581772" 
            className="text-white/90 hover:text-white smooth-transition text-sm font-medium tracking-wide"
          >
            575-758-1772
          </a>
          <a 
            href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-casa-blue px-4 py-2 rounded text-sm font-medium tracking-wide hover:bg-white/90 smooth-transition"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </header>
  );
}