import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}