// src/Dashboard.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// Import all pages
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import SocialListening from "./pages/SocialListening";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

function Dashboard({ user }) {
  return (
    <div className="flex min-h-screen bg-[#101d23] text-white">
      {/* Sidebar */}
      <aside className="w-72 bg-[#101d23] p-6 flex flex-col justify-between shadow-lg">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold">BrandPulse</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="home"
              className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#0da6f2] text-white"
            >
              Home
            </Link>
            <Link
              to="analytics"
              className="flex items-center gap-3 px-4 py-3 rounded-full hover:bg-[#223c49]"
            >
              Analytics
            </Link>
            <Link
              to="social-listening"
              className="flex items-center gap-3 px-4 py-3 rounded-full hover:bg-[#223c49]"
            >
              Social Listening
            </Link>
          </nav>
        </div>

        {/* Bottom pinned links */}
        <div className="flex flex-col gap-2">
          <Link
            to="settings"
            className="flex items-center gap-3 px-4 py-3 rounded-full hover:bg-[#223c49]"
          >
            Settings
          </Link>
          <Link
            to="profile"
            className="flex items-center gap-3 px-4 py-3 rounded-full hover:bg-[#223c49]"
          >
            Profile
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="social-listening" element={<SocialListening />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;
