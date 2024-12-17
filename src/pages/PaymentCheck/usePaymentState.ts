import { useState } from "react";

export default function usePaymentState() {
    const inputChange = (e: { name: string; value: string }) => {
        setPaymentState((prev) => ({    
            ...prev,
            [e.name]: {
                ...prev[e.name as keyof typeof prev],
                value: e.value
            }
        }))
    }
  const [paymentState, setPaymentState] = useState({
    Email:{
            label:"Email",
            name:"Email",
            value:"",
            placheolder:"",
            onChange:inputChange,
            mandatory: true
    },
     Password:{
        name: 'Password',
        value: '',
        label: 'Password',
        required: true,
        onChange: inputChange,
        status: false,
    }
  });
  return {paymentState, setPaymentState};
}
