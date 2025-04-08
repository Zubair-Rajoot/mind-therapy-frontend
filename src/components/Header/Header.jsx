import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <h1 className="logo">Mind Therapy</h1>
      <div className="auth-buttons">
        <Link to="/">
          <button className={`home-btn ${isActive("/") ? "active" : ""}`}>Home</button>
        </Link>
        <Link to="/login">
          <button className={`login-btn ${isActive("/login") ? "active" : ""}`}>Login</button>
        </Link>
        <Link to="/register">
          <button className={`signup-btn ${isActive("/register") ? "active" : ""}`}>Signup</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
