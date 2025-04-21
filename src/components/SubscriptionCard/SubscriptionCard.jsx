import React from "react";
import "./SubscriptionCard.css";
import { useNavigate } from "react-router-dom";

const SubscriptionCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Send price as a query parameter
    navigate("/billing?price=9.9&planname=premium");

  };

  return (
    <div className="card-container">
      <div className="card">
        <h2>Premium Plan</h2>
        <p className="price">$9.9/month</p>
        <p className="description">Perfect for professionals and teams</p>
        <button className="subscribe-btn" onClick={handleClick}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
