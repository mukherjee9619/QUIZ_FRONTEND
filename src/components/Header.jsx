import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/header.css";
import { logout } from "../utils/auth";

export default function Header({ onSearch }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const token =
    localStorage.getItem("user_token") || sessionStorage.getItem("user_token");

  const email =
    localStorage.getItem("user_email") || sessionStorage.getItem("user_email");

  const handleLogout = () => {
    logout(); // clear storage
    navigate("/login"); // ✅ safe navigation
  };

  return (
    <header className="quiz-header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          <img src="/logo.png" alt="SM Quiz App" className="logo-img" />
          <span className="logo-text">QUIZ APP</span>
        </NavLink>

        <div className="header-search">
          <input
            type="text"
            placeholder="Search subject..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              onSearch?.(e.target.value);
            }}
          />
        </div>

        <div className="nav-links">
          {token && <div className="user-email">{email}</div>}

          {token ? (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          ) : (
            <button onClick={() => navigate("/login")} className="login-btn">
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
