import React from "react";
import { CheckCircle } from "lucide-react";
import "./Success.css"; // custom CSS file

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-box">
        <CheckCircle size={60} color="#4BB543" />
        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase. Your payment has been processed successfully.</p>
      </div>
    </div>
  );
};

export default Success;
