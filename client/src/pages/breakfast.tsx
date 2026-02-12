import { useEffect } from "react";
import Navigation from "../components/navigation";
import BreakfastSection from "../components/breakfast-section";
import Footer from "../components/footer";

export default function Breakfast() {
  // #region agent log
  useEffect(() => {
    fetch("http://127.0.0.1:7244/ingest/9a088c47-6bd0-4d1f-afe9-90cd2280186b", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hypothesisId: "H3",
        location: "breakfast.tsx:Breakfast",
        message: "Breakfast mounted",
        data: { windowScrollY: window.scrollY, docScrollTop: document.documentElement.scrollTop },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
  }, []);
  // #endregion
  return (
    <div className="min-h-screen pb-14 md:pb-0">
      <Navigation />
      <main className="pt-24 md:pt-28">
        <BreakfastSection />
      </main>
      <Footer />
    </div>
  );
}