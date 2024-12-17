import { useState } from "react";

export default function usePaymentState() {

  const validateEmail = (value: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(value)) {
      setPaymentState((prev) => ({
        ...prev,
        Email:{
          ...prev.Email,
          status: false
        }
      }))
    } else {
      setPaymentState((prev) => ({
        ...prev,
        Email:{
          ...prev.Email,    
          status: true,
          message: 'Please enter a valid email!',
        }
    
      }));
    }
  };

  const validatePassword = (value: string) => {
    // Şərtləri yoxlamaq üçün dəyişənlər
    let errorMessage = "";
  
    if (!value) {
      errorMessage = "Password is required!";
    } else if (value.length < 8) {
      errorMessage = "Password must be at least 8 characters long.";
    } else if (!/[A-Z]/.test(value)) {
      errorMessage = "Password must include at least one uppercase letter.";
    } else if (!/[a-z]/.test(value)) {
      errorMessage = "Password must include at least one lowercase letter.";
    } else if (!/\d/.test(value)) {
      errorMessage = "Password must include at least one number.";
    } else if (!/[\W_]/.test(value)) {
      errorMessage = "Password must include at least one special character (e.g., @, #, $, etc.).";
    }
  
    // Geribildirim nəticələrini təyin et
    setPaymentState((prev) => ({
      ...prev,
      Password: {
        ...prev.Password,
        status: !!errorMessage, // Xəta varsa true, yoxdursa false
        message: errorMessage,  // Xəta mesajını təyin et
      },
    }));
  };
  
  
    const inputChange = (e: { name: string; value: string }) => {
        setPaymentState((prev) => ({    
            ...prev,
            [e.name]: {
                ...prev[e.name as keyof typeof prev],
                value: e.value
            }
        }))
        if(e.name==="Email"){
          validateEmail(e.value)
        }
        if(e.name==="Password"){
          validatePassword(e.value)
        }
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
