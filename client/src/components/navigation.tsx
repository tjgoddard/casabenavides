import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logoImage from "../../../attached_assets/casa-benavides-your-front-Photoroom-removebg-preview_1752360228306.png";

export default function Navigation() {
  const [location] = useLocation();
  const isHomePage = location === "/";

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBlueNav, setShowBlueNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 60;
      setIsScrolled(window.scrollY > threshold);
      // Blue bar appears with the cream header (same threshold) so the transition is one smooth step
      setShowBlueNav(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On non-home pages: always show full nav (cream header + blue bar). On home: transparent at top, full nav when scrolled.
  const showFullNav = !isHomePage || isScrolled;
  const isOverHero = isHomePage && !isScrolled;
  const showBlueNavBar = !isHomePage || showBlueNav;

  const navigationLinks: { href: string; label: string; external?: boolean }[] = [
    { href: "/", label: "HOME" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/our-story", label: "OUR STORY" },
    { href: "/breakfast", label: "BREAKFAST" },
    { href: "/experiences", label: "EXPERIENCES" },
    { href: "/newsletter", label: "SPECIALS" },
    { href: "/contact", label: "CONTACT" },
  ];

  const isActiveLink = (href: string) =>
    href === "/" ? location === "/" : location === href || location.startsWith(href + "/");

  return (
    <>
      {/* Header - Full nav (cream + blue bar) on all pages except home; on home, transparent at top then full nav when scrolled */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          showFullNav ? "shadow-sm" : "bg-transparent nav-over-hero"
        }`}
        style={{
          backgroundColor: showFullNav ? "#f5f0e8" : "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="block">
              <img 
                src={logoImage} 
                alt="Casa Benavides Inn Logo" 
                className={`hover:opacity-80 transition-all duration-500 ${
                  isOverHero ? 'h-20 w-auto' : 'h-16 w-auto'
                }`}
                style={{ aspectRatio: '1/1' }}
                loading="eager"
                decoding="async"
              />
            </a>
            
            {/* Desktop - Right Side Info */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Phone Number & Guarantee */}
              <div className="text-center">
                <div className={`text-xs uppercase tracking-wider font-semibold mb-1 transition-colors duration-500 ${
                  isOverHero ? 'text-white' : 'text-gray-900'
                }`}>
                  Best Prices Guaranteed
                </div>
                <a 
                  href="tel:+15757581772" 
                  className={`text-sm font-medium transition-colors duration-500 ${
                    isOverHero ? 'text-white hover:text-white/80' : 'text-gray-900 hover:text-casa-blue'
                  }`}
                >
                  (575) 758-1772
                </a>
              </div>
              
              {/* Check Availability Button - rough border on a separate layer so text stays crisp */}
              <div className="relative inline-block overflow-visible">
                <svg className="absolute" width="0" height="0" aria-hidden="true">
                  <defs>
                    <filter id="nav-rough-border" x="-50%" y="-50%" width="200%" height="200%">
                      <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="4" result="noise" seed="2" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                  </defs>
                </svg>
                {/* Border layer extends 3px past button so all four sides are visible and not clipped */}
                <span
                  aria-hidden="true"
                  className="absolute pointer-events-none border-[3px]"
                  style={{
                    top: -3,
                    left: -3,
                    right: -3,
                    bottom: -3,
                    borderColor: isOverHero ? 'rgba(255,255,255,0.9)' : '#1f2937',
                    filter: 'url(#nav-rough-border)',
                  }}
                />
                <a
                  href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative block px-8 py-3 text-sm font-semibold uppercase tracking-widest transition-colors duration-500 ${
                    isOverHero
                      ? 'text-white hover:bg-white/10'
                      : 'text-gray-900 hover:bg-gray-900 hover:text-white'
                  }`}
                  style={{
                    background: isOverHero ? 'transparent' : '#faf7f2',
                  }}
                >
                  Check Availability
                </a>
              </div>
            </div>
            
            {/* Mobile - Hamburger Menu */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className={`md:hidden p-2 rounded-md transition-colors duration-500 ${
                isOverHero ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              {isNavOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Desktop Navigation Bar - Blue - Always visible on non-home pages; on home, slides down when scrolled */}
        <div className="hidden md:block h-[60px] overflow-hidden">
          <div
            className="bg-casa-blue min-h-[60px] transition-transform duration-500 ease-in-out"
            style={{
              transform: showBlueNavBar ? 'translateY(0)' : 'translateY(-100%)',
            }}
          >
            <div className="max-w-7xl mx-auto px-4 h-full min-h-[60px] flex items-center">
              <nav className="flex items-center justify-center space-x-1">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`text-sm font-medium uppercase tracking-wider px-6 py-3 transition-colors duration-200 ${
                    isActiveLink(link.href)
                      ? "text-white bg-white/25"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            </div>
          </div>
        </div>
        
        {/* Mobile Dropdown Menu */}
        {isNavOpen && (
          <div className={`md:hidden shadow-lg ${isOverHero ? 'bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
            <nav className="px-4 py-2">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setIsNavOpen(false)}
                  className={`block py-3 font-medium border-b border-gray-100 last:border-b-0 ${
                    isActiveLink(link.href)
                      ? "text-casa-blue font-semibold"
                      : "text-gray-900 hover:text-casa-blue"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
      
      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 shadow-lg border-t border-gray-200">
        <div className="grid grid-cols-4 bg-casa-cream">
          <a
            href="tel:5757581772"
            className="bg-casa-cream text-casa-blue py-4 flex flex-col items-center justify-center font-semibold uppercase text-xs tracking-wider hover:bg-gray-100 transition-colors border-r border-gray-300"
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call
          </a>
          <a
            href="/gallery"
            className="bg-casa-cream text-casa-blue py-4 flex flex-col items-center justify-center font-semibold uppercase text-xs tracking-wider hover:bg-gray-100 transition-colors border-r border-gray-300"
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Gallery
          </a>
          <a
            href="/newsletter"
            className="bg-casa-cream text-casa-blue py-4 flex flex-col items-center justify-center font-semibold uppercase text-xs tracking-wider hover:bg-gray-100 transition-colors border-r border-gray-300"
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Specials
          </a>
          <a
            href="https://reserve5.resnexus.com/resnexus/Reservations/Lodging/7C459783-8167-4C52-9A85-DF5D26CA7985?forcedesktop=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-casa-cream text-casa-blue py-4 flex flex-col items-center justify-center font-semibold uppercase text-xs tracking-wider hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Reserve
          </a>
        </div>
      </div>
    </>
  );
}
