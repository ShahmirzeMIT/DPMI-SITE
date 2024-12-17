import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Spin, message } from "antd";
import { callApi } from "../utils/callApi";

// Stripe açarınızı burada saxlayın
const stripePromise = loadStripe(
  "pk_test_51NldrbB1rL2qIZ841q0gdzCwpKlrIIM7SUp3tdlTvw76AfMT741lI6hQlDl7F7adSPQ2IVlyyC9ZVFyIMIWwmrox00PWBIpouM"
);


export interface ButtonPaymentProps {
  
 data:{ 
  Email: string;
  FkClassId: string;
  Password: string;
  disabled?:boolean
}
}
export default function ButtonPaymentForLogin({data}:ButtonPaymentProps) {
  const [loading, setLoading] = useState(false);



  
  const handlePayment = async () => {
    setLoading(true); // Yüklənmə spinnerini göstər
    const stripe = await stripePromise;

    // stripe obyektini yoxlayın
    if (!stripe) {
      message.error("Stripe.js could not be loaded. Please refresh the page.");
      setLoading(false);
      return;
    }

    try {
      const res= await callApi('/user/main/login',{
            "Email":data.Email,
            "Password":data.Password
          })

          if(!res.token)  return
      const response = await fetch(
        "https://api.dpminstitute.org/billing/main/payment/init",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
            `Bearer ${res.token}`,
          },
          body: JSON.stringify({
            ...data,
            createCheckoutSession: 1,
          }),
        }
      );

      const session = await response.json();

      if (session.sessionId) {
        // Stripe Checkout-a yönləndir
        const result = await stripe.redirectToCheckout({
          sessionId: session.sessionId,
        });

        if (result.error) {
          message.error(result.error.message); // Error mesajını göstər
        }
      } else {
        message.error("Failed to initialize payment session.");
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Payment failed! Please try again.");
    } finally {
      setLoading(false); // Spinneri gizlət
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Button
         type="primary"
         style={{ width: "100%", backgroundColor: "#3b82f6" }}
        onClick={handlePayment}
        disabled={loading || data.disabled}
      >
        {loading ? <Spin size="small" /> : "Apply"}
      </Button>
    </div>
  );
}
