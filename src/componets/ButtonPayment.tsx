import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Spin, message } from "antd";
import { toast } from "react-toastify";

// Stripe açarınızı burada saxlayın
const stripePromise = loadStripe(
  "pk_test_51NldrbB1rL2qIZ841q0gdzCwpKlrIIM7SUp3tdlTvw76AfMT741lI6hQlDl7F7adSPQ2IVlyyC9ZVFyIMIWwmrox00PWBIpouM"
);

export interface ButtonPaymentProps {
  data: {
    Email: string;
    FkClassId?: string;
    Password: string;
    Price?: string;
    DiscountPrice?: string;
    FirstName?: string;
    LastName?: string;
    Company?: string;
    AddressLine1?: string;
    Country?: string;
    City?: string;
    ZipCode?: string;
    Promocode?: string;
    Currency?: string;
    disabled?: boolean;
  };
}
export default function ButtonPayment({ data }: ButtonPaymentProps) {
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
      const response = await fetch(
        "https://dpminstitute.org/api/billing/main/payment/init",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            createCheckoutSession: 1,
            Currency: "AZN",
          }),
        }
      );
      console.log(response);

      const session = await response.json();
      if (session.error) {
        toast.error(`${session.error}`);
      }

      if (session.sessionId) {
        // Stripe Checkout-a yönləndir
        const result = await stripe.redirectToCheckout({
          sessionId: session.sessionId,
        });
        console.log(result, "result");

        if (result.error) {
          toast.error(`${result.error}`);
        }
      }
    } catch (error:any) {
      if (error.status === 417) {
        data.disabled=false
        toast.error(error.message);
      }
      toast.error(error.message);
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
        disabled={loading || !data.disabled}
      >
        {loading ? <Spin size="small" /> : "Register and Proceed"}
      </Button>
    </div>
  );
}
