import React from "react";
import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <div>
      <Link to="/accordion">Go to accordion</Link>
      <Link to="/dropdown">Go to dropdown</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={0} />
        </Route>
      </div>
    </div>
  );
}

export default App;
