import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Spin, message } from "antd";
import { callApi } from "../utils/callApi";
import { toast } from "react-toastify";

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
  Promocode?:string
}
}
export default function ButtonPaymentForLogin({data}:ButtonPaymentProps) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    if (!stripe) {
      message.error("Stripe.js could not be loaded. Please refresh the page.");
      setLoading(false);
      return;
    }

    try {
      const { disabled, ...payload } = data;

      // Step 1: Authenticate user
      const res = await callApi("/user/main/login", {
        Email: data.Email,
        Password: data.Password,
      });

      if (!res.token) {
        throw new Error("Authentication failed. Please check your credentials.");
      }

      // Step 2: Initialize payment
      const response = await fetch(
        "https://dpminstitute.org/api/billing/main/payment/init",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${res.token}`,
          },
          body: JSON.stringify({
            ...payload,
            FkClassId: +data.FkClassId,
            createCheckoutSession: 1,
            Price: 4,
            DiscountPrice: 5,
            FirstName: "dksakoif",
            LastName: "kdsao",
            Company: "fdsklfklds",
            ZipCode: "samdlkasm",
            AddressLine1: "213",
            AddressLine2: "lwqplep",
            Country: "koq",
            City: "4",
            Currency: "USD",
          }),
        }
      );

  

      const session = await response.json();
      if (session.error) {
      toast.error(session.error);
      }
      if (session.sessionId) {
        const result = await stripe.redirectToCheckout({
          sessionId: session.sessionId,
        });

        if (result.error) {
          throw new Error(result.error.message || "Stripe Checkout error.");
        }
      }
    } catch (error: any) {
      console.log(error,'error');
      
        if (error.status === 417) {
          data.disabled=false
        }
     
        toast.error(error);
     
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Button
         type="primary"
         style={{ width: "100%", backgroundColor: "#3b82f6" }}
        onClick={handlePayment}
        disabled={loading || !data.disabled}
      >
        {loading ? <Spin size="small" /> : "Login and Proceed"}
      </Button>
    </div>
  );
}
