import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Map from "../components/map/Map.tsx";
import StatePage from "../components/state/StatePage.tsx"; // Component to render state-specific details
import Navigate from "../components/navigate/Navigate.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/map" element={<Navigate />} />
      <Route path="/state/:stateName" element={<StatePage />} />
    </Routes>
  </BrowserRouter>
);
