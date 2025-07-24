import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, Suspense, lazy } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

// Lazy load pages to reduce initial bundle size
const Home = lazy(() => import("@/pages/home"));
const Breakfast = lazy(() => import("@/pages/breakfast"));
const Contact = lazy(() => import("@/pages/contact"));
const Experiences = lazy(() => import("@/pages/experiences"));
const OurStory = lazy(() => import("@/pages/our-story"));
const Policies = lazy(() => import("@/pages/policies"));
const GroupReservations = lazy(() => import("@/pages/group-reservations"));
const NotFound = lazy(() => import("@/pages/not-found"));

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
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/breakfast" component={Breakfast} />
        <Route path="/contact" component={Contact} />
        <Route path="/experiences" component={Experiences} />
        <Route path="/our-story" component={OurStory} />
        <Route path="/policies" component={Policies} />
        <Route path="/group-reservations" component={GroupReservations} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  // Initialize Google Tag Manager when app loads
  useEffect(() => {
    // Initialize dataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];
    
    // Load GTM script with proper typing
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-TD9DT6M6';
    
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(gtmScript, firstScript);
    }
    
    // Initialize GTM
    (window as any).dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
    
    console.log('Google Tag Manager loaded from React app');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
