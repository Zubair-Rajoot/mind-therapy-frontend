import React from "react";
import "./SubscriptionCard.css";

const SubscriptionCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <h2>Premium Plan</h2>
        <p className="price">$5/month</p>
        <p className="description">Perfect for professionals and teams</p>
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
