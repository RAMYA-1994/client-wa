import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import '../css/App.css';

import LoadLoginPage from "./Login.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Dashboard from "./Dashboard.jsx";
import LoadWelcome from "./Welcome.jsx";
import LoadRegisterPage from "./Register.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="NavBar">
        <Link className="home" to="/">Home</Link>
        <Link className="home" to="/dashboard">Dashboard</Link>
        <Link className="home" to="/about">About</Link>
        <Link className="home" to="/contact">Contact</Link>
      </nav>

      {/* Wrap all Routes inside a <Routes> component */}
      <Routes>
        <Route path="/" element={<LoadWelcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoadLoginPage />} />
        <Route path="/register" element={<LoadRegisterPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
