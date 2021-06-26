import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import RouteTracker from "./RouteTracker";
import ReactGA from "react-ga";

export default function Router() {
  const TRACKING_ID = "UA-200605455-1"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  ReactGA.event({
    category: "Tracking",
    action: "Landed on page",
  });
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/blog" component={() => <div>blog</div>} />
        <Route path="/" component={App} />
      </Switch>
      <RouteTracker />
    </BrowserRouter>
  );
}
