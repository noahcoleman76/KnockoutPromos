// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DealershipPromoPage from "./pages/DealershipPromoPage";
import SuccessPage from "./pages/SuccessPage";
import LinksPage from "./pages/LinksPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/links" element={<LinksPage />} />

      {/* Dynamic dealership route */}
      <Route path="/:dealershipId" element={<DealershipPromoPage />} />

      <Route path="*" element={<div style={{ padding: 24 }}>Not found</div>} />
    </Routes>
  );
}
