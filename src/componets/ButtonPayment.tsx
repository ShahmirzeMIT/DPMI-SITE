import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Spin, message } from "antd";

// Stripe açarınızı burada saxlayın
const stripePromise = loadStripe(
  "pk_test_51NldrbB1rL2qIZ841q0gdzCwpKlrIIM7SUp3tdlTvw76AfMT741lI6hQlDl7F7adSPQ2IVlyyC9ZVFyIMIWwmrox00PWBIpouM"
);


export interface ButtonPaymentProps {
 data:{ Email: string;
  Password: string;
  Price: string;
  DiscountedPrice: string;
  FirstName: string;
  LastName:string;
  Company:string;
  AddressLine1:string;
  Country:string;
  City:string;
  ZipCode:string;
  Promocode?:string;
  Currency?:string
  disabled?:boolean}
}
export default function ButtonPayment({data}:ButtonPaymentProps) {
  const [loading, setLoading] = useState(false);

  console.log(data,'data');
  
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
      const response = await fetch(
        "https://api.dpminstitute.org/billing/main/payment/init",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer ced02711947c8775f39afdeb3c44903764a12d731975f16608fb6660d1bf6f9f17919be32b8b368a9c82d94b648b8adc6cc87208e533c58ec7acac795060c4bf",
          },
          body: JSON.stringify({
            ...data,
            createCheckoutSession: 1,
            FkClassId: "2",
            Promocode: "Camish090",
            Currency: "AZN",
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
