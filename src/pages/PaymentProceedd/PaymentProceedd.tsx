import { useLocation } from "react-router-dom";
import { callApi } from "../../utils/callApi";
import { useEffect } from "react";

export default function PaymentProceedd() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get("checkout_session_id");

  useEffect(() => {
    const paymentSuccess = async () => {
      try {
        await callApi("/billing/main/payment/success", {
          CheckoutSessionId: sessionId,
        });
        console.log("Payment success!");
      } catch (error) {
        console.error("Payment verification failed:", error);
      }
    };

    if (sessionId) {
      paymentSuccess();
    }
  }, [sessionId]);

  return <div>Okay</div>;
}
