// src/Dashboard.js
import React from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

// import the Home page
import Home from "./pages/Home";

function Dashboard({ user }) {
  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          background: "#111827",
          color: "white",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>BrandPulse</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Link
            to="home"
            style={{ color: "white", textDecoration: "none" }}
          >
            Home
          </Link>
          <Link
            to="analytics"
            style={{ color: "white", textDecoration: "none" }}
          >
            Analytics
          </Link>
          <Link
            to="social"
            style={{ color: "white", textDecoration: "none" }}
          >
            Social Listening
          </Link>
          <Link
            to="settings"
            style={{ color: "white", textDecoration: "none" }}
          >
            Settings
          </Link>
          <Link
            to="profile"
            style={{ color: "white", textDecoration: "none" }}
          >
            Profile
          </Link>
        </nav>
        <button
          onClick={handleLogout}
          style={{
            marginTop: "30px",
            background: "red",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h3>Welcome, {user.email}</h3>
        <Routes>
          {/* Home page now loads from src/pages/Home.js */}
          <Route path="home" element={<Home />} />

          {/* Other pages placeholders */}
          <Route path="analytics" element={<h2>📊 Analytics (Coming Soon)</h2>} />
          <Route path="social" element={<h2>🌐 Social Listening (Coming Soon)</h2>} />
          <Route path="settings" element={<h2>⚙️ Settings (Coming Soon)</h2>} />
          <Route path="profile" element={<h2>👤 Profile (Coming Soon)</h2>} />

          {/* Default → Home */}
          <Route path="*" element={<Navigate to="home" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
