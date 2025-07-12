import { Link } from "wouter";
import bannerImage from "@assets/f4f18f_a6469b265dcd46f3a644733b43dd2045~mv2 (2)_1752359016794.jpeg";

export default function HeaderBanner() {
  return (
    <header className="relative py-4 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-white font-medium text-xl tracking-wide hover:text-white/80 smooth-transition">
            CASA BENAVIDES
          </Link>
        </div>
        
        <nav className="flex items-center space-x-12">
          <Link href="/" className="text-white hover:text-white/80 smooth-transition text-sm font-medium tracking-wide uppercase">
            HOME
          </Link>
          <Link href="/our-story" className="text-white hover:text-white/80 smooth-transition text-sm font-medium tracking-wide uppercase">
            OUR STORY
          </Link>
          <Link href="/breakfast" className="text-white hover:text-white/80 smooth-transition text-sm font-medium tracking-wide uppercase">
            BREAKFAST
          </Link>
          <Link href="/contact" className="text-white hover:text-white/80 smooth-transition text-sm font-medium tracking-wide uppercase">
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}