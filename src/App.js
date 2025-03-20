import React from "react";
import "./index.css";
import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "nn5sd5",
      label: "Can I use React?",
      content: "You can use React if you want to.",
    },
    {
      id: "nn545sd5",
      label: "Can I use Javascript?",
      content: "You can use Javascript",
    },

    { id: "nn546sd5", label: "Can I use Java?", content: "I can use Java" },
  ];
  return <Accordion items={items} />;
}

export default App;
