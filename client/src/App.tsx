import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import { addImageLoadListeners, optimizeImagesForMobile } from "./utils/imageOptimization";

// Import pages normally for production stability
import Home from "@/pages/home";
import Breakfast from "@/pages/breakfast";
import Contact from "@/pages/contact";
import Experiences from "@/pages/experiences";
import OurStory from "@/pages/our-story";
import Policies from "@/pages/policies";
import GroupReservations from "@/pages/group-reservations";
import Map from "@/pages/map";
import NotFound from "@/pages/not-found";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/breakfast" component={Breakfast} />
      <Route path="/contact" component={Contact} />
      <Route path="/experiences" component={Experiences} />
      <Route path="/our-story" component={OurStory} />
      <Route path="/policies" component={Policies} />
      <Route path="/group-reservations" component={GroupReservations} />
      <Route path="/map" component={Map} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Google Analytics and mobile optimizations when app loads
  useEffect(() => {
    initGA();
    
    // Initialize mobile image optimizations
    optimizeImagesForMobile();
    addImageLoadListeners();
    
    // Re-apply optimizations when images load dynamically
    const observer = new MutationObserver(() => {
      addImageLoadListeners();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
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
