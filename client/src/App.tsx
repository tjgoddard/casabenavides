import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy, useEffect } from "react";
import { useAnalytics } from "./hooks/use-analytics";

/** Scroll to top on every route change and on initial load (e.g. refresh). */
function ScrollToTop() {
  const [location] = useLocation();

  // #region agent log
  useEffect(() => {
    const runId = "scroll-effect-location";
    const before = window.scrollY;
    const docScroll = document.documentElement.scrollTop;
    fetch("http://127.0.0.1:7244/ingest/9a088c47-6bd0-4d1f-afe9-90cd2280186b", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hypothesisId: "H1-H5",
        location: "App.tsx:ScrollToTop(location-effect)",
        message: "location effect run",
        data: {
          runId,
          location,
          scrollRestoration: history.scrollRestoration,
          beforeWindowScrollY: before,
          beforeDocScrollTop: docScroll,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    window.scrollTo(0, 0);
    const afterY = window.scrollY;
    const afterDoc = document.documentElement.scrollTop;
    fetch("http://127.0.0.1:7244/ingest/9a088c47-6bd0-4d1f-afe9-90cd2280186b", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hypothesisId: "H2-H5",
        location: "App.tsx:ScrollToTop(after-scrollTo)",
        message: "right after scrollTo(0,0)",
        data: { runId, afterWindowScrollY: afterY, afterDocScrollTop: afterDoc },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    let rafCount = 0;
    const checkAfterPaint = () => {
      rafCount++;
      const y = window.scrollY;
      const doc = document.documentElement.scrollTop;
      fetch("http://127.0.0.1:7244/ingest/9a088c47-6bd0-4d1f-afe9-90cd2280186b", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hypothesisId: "H2",
          location: "App.tsx:ScrollToTop(after-paint)",
          message: "scrollY after paint",
          data: { runId, rafCount, windowScrollY: y, docScrollTop: doc },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
      if (rafCount < 3) requestAnimationFrame(checkAfterPaint);
    };
    requestAnimationFrame(checkAfterPaint);
    return () => clearTimeout(timeoutId);
  }, [location]);

  useEffect(() => {
    const runId = "scroll-effect-mount";
    fetch("http://127.0.0.1:7244/ingest/9a088c47-6bd0-4d1f-afe9-90cd2280186b", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hypothesisId: "H4",
        location: "App.tsx:ScrollToTop(mount-effect)",
        message: "mount-only effect run",
        data: { runId, scrollRestoration: history.scrollRestoration },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    window.scrollTo(0, 0);
  }, []);
  // #endregion

  return null;
}

// Lazy load pages to reduce initial bundle size
const Home = lazy(() => import("./pages/home"));
const Breakfast = lazy(() => import("./pages/breakfast"));
const Contact = lazy(() => import("./pages/contact"));
const Experiences = lazy(() => import("./pages/experiences"));
const OurStory = lazy(() => import("./pages/our-story"));
const Policies = lazy(() => import("./pages/policies"));
const GroupReservations = lazy(() => import("./pages/group-reservations"));
const Gallery = lazy(() => import("./pages/gallery"));
const Newsletter = lazy(() => import("./pages/newsletter"));
const NotFound = lazy(() => import("./pages/not-found"));

// Loading component with critical CSS
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-casa-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600 text-sm">Loading...</p>
    </div>
  </div>
);

function Router() {
  // Track page views when routes change
  useAnalytics();

  return (
    <Suspense fallback={<PageLoader />}>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/breakfast" component={Breakfast} />
        <Route path="/contact" component={Contact} />
        <Route path="/experiences" component={Experiences} />
        <Route path="/our-story" component={OurStory} />
        <Route path="/policies" component={Policies} />
        <Route path="/group-reservations" component={GroupReservations} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/newsletter" component={Newsletter} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  // GTM is now loaded directly in HTML head for proper placement

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Global SVG filter for textured buttons */}
        <svg className="absolute" width="0" height="0" aria-hidden="true">
          <defs>
            <filter id="rough-border-global">
              <feTurbulence type="turbulence" baseFrequency="0.035" numOctaves="5" result="noise" seed="2" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
