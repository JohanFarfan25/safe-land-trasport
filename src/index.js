import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "./assets/scss/safe-land-transport.scss?v=1.3.0";

// pages
import Home from "./views/Home.js";
import Profile from "./views/pages/Profile.js";
import { LanguageProvider } from "./context/LanguageContext.js";
// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <LanguageProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile-page" element={<Profile />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </LanguageProvider>
  </BrowserRouter>
);
