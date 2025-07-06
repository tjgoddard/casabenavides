import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import MobileMenu from "./mobile-menu";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold casa-blue font-serif hover:casa-blue-light transition-colors">
                Casa Benavides
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className={`transition-colors duration-200 font-medium ${
                location === '/' ? 'casa-blue' : 'text-gray-700 hover:casa-blue'
              }`}>
                Home
              </Link>
              <Link href="/breakfast" className={`transition-colors duration-200 font-medium ${
                location === '/breakfast' ? 'casa-blue' : 'text-gray-700 hover:casa-blue'
              }`}>
                Breakfast
              </Link>
              <Link href="/contact" className={`transition-colors duration-200 font-medium ${
                location === '/contact' ? 'casa-blue' : 'text-gray-700 hover:casa-blue'
              }`}>
                Contact
              </Link>
              <Link href="/our-story" className={`transition-colors duration-200 font-medium ${
                location === '/our-story' ? 'casa-blue' : 'text-gray-700 hover:casa-blue'
              }`}>
                Our Story
              </Link>
              <Button asChild className="bg-casa-blue hover:bg-casa-blue-light">
                <a href="tel:5757581772">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
