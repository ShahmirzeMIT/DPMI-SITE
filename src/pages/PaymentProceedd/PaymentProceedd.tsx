import { useLocation, useNavigate } from "react-router-dom";
import { callApi } from "../../utils/callApi";
import { useEffect, useState } from "react";
import { Button, Result } from "antd";

export default function PaymentProceedd() {
  const navigate=useNavigate()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get("checkout_session_id");
  const [checkStatus, setCheckStatus] = useState<'completed' | 'error' | ''>('');

  useEffect(() => {
    const paymentSuccess = async () => {
      try {
        const res = await callApi("/billing/main/payment/success", {
          CheckoutSessionId: sessionId,
        });
        if(res.error){
          console.error(res.error);
        }
        else{
          setCheckStatus("completed");
          window.location.href = "https://dpmi.netlify.app/login"; 
        }
        
        if(res.error){
          setCheckStatus("error");
        }
      } catch (error) {
    
        console.error("Payment verification failed:", error);
      }
    };

    if (sessionId) {
      paymentSuccess();
    }
  }, [sessionId]);

  return (
    <div style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:'120px' }}>
      {
        checkStatus === "completed" ? (
          <Result
            status="success"
            title="Successfully Purchased"
            subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quibusdam?"
            extra={[
              <Button type="primary" key="console">
                Go Home
              </Button>,
            ]}
          />
        ) : checkStatus === "error" ? (
          <Result
            status="error"
            title="Submission Failed"
            subTitle="Please check and modify the following information before resubmitting."
            extra={[
              <Button type="primary" key="console" onClick={()=>navigate('/')}>
                Go Home
              </Button>,
            ]}
          />
        ) : (
          <></>
        )
      }
    </div>
  );
}
