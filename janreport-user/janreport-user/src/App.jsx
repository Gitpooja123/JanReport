import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/footer/Footer";
import AuthWrapper from "./components/AuthWrapper";
import About from "./components/about/About";
import ReportIssue from "./components/reportIssue/ReportIssue";

import lightLogo from "./assets/logos/lightlogo.png";
import darkLogo from "./assets/logos/darklogo.png";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Navbar lightLogo={lightLogo} darkLogo={darkLogo} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />  
        <Route path="/report-issue" element={<ReportIssue />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        {/* =====================
            PROTECTED ROUTES
        ====================== */}
        {/* <Route
          path="/report-issue"
          element={
            <AuthWrapper>
              <div className="page-inner">
                <h2>Report Issue</h2>
              </div>
            </AuthWrapper>
          }
        /> */}

        <Route
          path="/pending"
          element={
            <AuthWrapper>
              <div className="page-inner">
                <h2>Pending Issues</h2>
              </div>
            </AuthWrapper>
          }
        />

        <Route
          path="/inprogress"
          element={
            <AuthWrapper>
              <div className="page-inner">
                <h2>In Progress Issues</h2>
              </div>
            </AuthWrapper>
          }
        />

        <Route
          path="/resolved"
          element={
            <AuthWrapper>
              <div className="page-inner">
                <h2>Resolved Issues</h2>
              </div>
            </AuthWrapper>
          }
        />

        <Route
          path="/profile"
          element={
            <AuthWrapper>
              <div className="page-inner">
                <h2>User Profile</h2>
              </div>
            </AuthWrapper>
          }
        />

        {/* =====================
            FALLBACK
        ====================== */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Global Footer */}
      <Footer />
    </BrowserRouter>
  );
}
