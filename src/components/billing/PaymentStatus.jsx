// src/pages/PaymentStatus.jsx
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentStatus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const status = new URLSearchParams(location.search).get("status");

  useEffect(() => {
    if (status === "success") {
      alert(" Payment Successful!");
      setTimeout(() => {
        navigate("/chat");
      }, 2000);
    } else if (status === "cancel") {
      alert("Payment Canceled");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      alert("⚠️ Payment Failed");
      setTimeout(() => {
        navigate("/billing");
      }, 2000);
    }

  }, [status, navigate]);

  return null;r
};


export default PaymentStatus;
