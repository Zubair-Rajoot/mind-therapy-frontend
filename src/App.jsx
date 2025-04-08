import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SubscriptionCard from "./components/SubscriptionCard/SubscriptionCard";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./App.css";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<SubscriptionCard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
