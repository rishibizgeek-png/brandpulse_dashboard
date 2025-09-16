import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";
import Dashboard from "./Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Listen for login/logout across refreshes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSignup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
      <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
          <h2>BrandPulse Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" onClick={() => handleSignup(email, password)}>Sign Up</button>
          <button type="button" onClick={() => handleLogin(email, password)}>Login</button>
          <button type="button" onClick={handleGoogleLogin}>Login with Google</button>
        </form>
      </div>
    );
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LoginForm />} />
        <Route path="/dashboard/*" element={user ? <Dashboard user={user} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
