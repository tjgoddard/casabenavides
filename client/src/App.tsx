import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Breakfast from "@/pages/breakfast";
import Contact from "@/pages/contact";
import Experiences from "@/pages/experiences";
import OurStory from "@/pages/our-story";
import Policies from "@/pages/policies";
import GroupReservations from "@/pages/group-reservations";
import NotFound from "@/pages/not-found";

function Router() {
  return (
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
  );
}

function App() {
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
