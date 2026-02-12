import Navigation from "../components/navigation";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div className="min-h-screen pb-14 md:pb-0">
      <Navigation />
      <main className="pt-24 md:pt-28">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}