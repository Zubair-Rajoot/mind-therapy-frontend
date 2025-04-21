import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SubscriptionCard from "./components/SubscriptionCard/SubscriptionCard";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./App.css";
import Chatbot from "./components/Chatbot/Chatbot";
import Profile from "./components/auth/Profile";
import Billing from "./components/billing/Billing";
import PaymentStatus from "./components/billing/PaymentStatus";
import Success from "./components/billing/Success";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chatbot />} />

          <Route path="/billing" element={<Billing />} />
          <Route path="/payment-status" element={<PaymentStatus />} />

          <Route path="/success" element={<Success />} />


  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
