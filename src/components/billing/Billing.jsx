import React from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import "./Billing.css";

const stripePromise = loadStripe("pk_test_51RDqisR43KlDWUc5Qmf3c1BryXUPhyo5qWwCozw0zeVuZDXmpdO7bgfi4LpIclChztC6dLiFU5wc2Hq2aYezrlhL00Om8BZupr"); // 🔑 Replace with your actual Stripe publishable key

const Billing = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const price = queryParams.get("price");
  const planName = queryParams.get("planname");

  const handlePayment = async () => {
    const stripe = await stripePromise;

    // Example: Create mock items (you can customize this)
    const response = await fetch("http://localhost:5000/api/payment/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            name: planName,
            price: price,
            quantity: 1,
          },
        ],
      }),
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="billing-container">
      <div className="billing-card">
        <h2>Billing Details</h2>

        <div className="billing-info">
          <p><span>Plan:</span> {planName}</p>
          <p><span>Price:</span> ${price}</p>
          <p><span>Billing Cycle:</span> Monthly</p>
        </div>

     
        
        <button className="billing-button" onClick={handlePayment}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Billing;
