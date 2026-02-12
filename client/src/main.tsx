import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Prevent browser from restoring scroll on refresh/navigation so our ScrollToTop logic can take effect.
if (typeof history !== "undefined" && history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

createRoot(document.getElementById("root")!).render(<App />);
