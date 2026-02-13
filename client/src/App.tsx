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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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

// Loading component: Casa Benavides sign as loading signal
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-stone-50">
    <img
      src="/casa-benavides-loading.webp"
      alt="Casa Benavides"
      className="h-32 w-auto object-contain animate-pulse"
      width={200}
      height={256}
    />
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
