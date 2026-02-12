import Navigation from "../components/navigation";
import ExperiencesSection from "../components/experiences-section";
import Footer from "../components/footer";

export default function Experiences() {
  return (
    <div className="min-h-screen pb-14 md:pb-0">
      <Navigation />
      <main className="pt-24 md:pt-28">
        <ExperiencesSection />
      </main>
      <Footer />
    </div>
  );
}