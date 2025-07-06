import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./mobile-menu";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection('home')}
                className="text-2xl font-bold casa-blue font-serif hover:casa-blue-light transition-colors"
              >
                Casa Benavides
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:casa-blue transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('breakfast')}
                className="text-gray-700 hover:casa-blue transition-colors duration-200 font-medium"
              >
                Breakfast
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:casa-blue transition-colors duration-200 font-medium"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('our-story')}
                className="text-gray-700 hover:casa-blue transition-colors duration-200 font-medium"
              >
                Our Story
              </button>
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
        onNavigate={scrollToSection}
      />
    </>
  );
}
