import { useState } from 'react';

export default function useSignState() {
  const validatePassword = (value: string) => {
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

    setProfileState((prev) => ({
      ...prev,
      Password: {
        ...prev.Password,
        status: !!errorMessage, 
        message: errorMessage, 
      },
    }));
  };

  const validateConfirmPassword = () => {
    if (profileState.Password.value !== profileState.ConfirmPassword.value) {
      setProfileState((prev) => ({
        ...prev,
        ConfirmPassword: {
          ...prev.ConfirmPassword,
          status: true,
          message: "Passwords do not match!",
        },
      }));
    } else {
      setProfileState((prev) => ({
        ...prev,
        ConfirmPassword: {
          ...prev.ConfirmPassword,
          status: false,
          message: "",
        },
      }));
    }
  };

  const validateEmail = (value: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(value)) {
      setProfileState((prev) => ({
        ...prev,
        Email: {
          ...prev.Email,
          status: false,
        },
      }));
    } else {
      setProfileState((prev) => ({
        ...prev,
        Email: {
          ...prev.Email,
          status: true,
          message: 'Please enter a valid email!',
        },
      }));
    }
  };

  const dateChange = (e: { name: string; value: string }) => {
    setProfileState((prev) => ({
      ...prev,
      date: {
        ...prev.date,
        value: e.value,
      },
    }));
  };

  const inputChange = (e: { name: string; value: string }) => {
    setProfileState((prev) => ({
      ...prev,
      [e.name]: {
        ...prev[e.name as keyof typeof prev],
        value: e.value,
      },
    }));

    if (e.name === 'Password') {
      validatePassword(e.value);
      validateConfirmPassword(); // Check if ConfirmPassword matches after Password changes
    }

    if (e.name === 'ConfirmPassword') {
      validateConfirmPassword(); // Validate if ConfirmPassword matches Password
    }

    if (e.name === 'Email') {
      validateEmail(e.value);
    }
  };

  const selectChange = (e: { name: string; value: string }) => {
    setProfileState((prev) => ({
      ...prev,
      [e.name]: {
        ...prev[e.name as keyof typeof prev],
        value: e.value,
      },
    }));
  };

  const numberChange = (e: { name: string; value: number, code: string }) => {
    setProfileState((prev) => ({
      ...prev,
      [e.name]: {
        ...prev[e.name as keyof typeof prev],
        value: e.value,
        code: e.code,
      },
    }));
  };

  const [profileState, setProfileState] = useState({
    date: {
      label: "Date of Birth",
      value: "2024-12-11",
      name: "date",
      placheolder: "11.12.2022",
      onChange: dateChange,
      mandatory: true,
    },
    firstName: {
      label: "First Name",
      name: "firstName",
      value: "",
      placheolder: "",
      onChange: inputChange,
      mandatory: true,
    },
    lastName: {
      label: "Last Name",
      name: "lastName",
      value: "",
      placheolder: "",
      onChange: inputChange,
      mandatory: true,
    },
    Email: {
      label: "Email",
      name: "Email",
      value: "",
      placheolder: "",
      message: "",
      onChange: inputChange,
      mandatory: true,
    },
    Password: {
      name: 'Password',
      value: '',
      label: 'Password',
      message: '',
      required: true,
      onChange: inputChange,
      status: false,
    },
    ConfirmPassword: {
      name: 'ConfirmPassword',
      value: '',
      label: 'Confirm Password',
      required: true,
      onChange: inputChange,
      status: false,
    },
    amount: {
      label: "Amount",
      name: "amount",
      value: "",
      placheolder: "",
      onChange: inputChange,
      mandatory: true,
    },
    transactionId: {
      label: "Transaction ID",
      name: "transactionId",
      value: "",
      placheolder: "",
      onChange: inputChange,
      mandatory: true,
    },
    description: {
      label: "Description",
      name: "description",
      value: "",
      placheolder: "",
      onChange: inputChange,
      mandatory: true,
    },
    billingAddress: {
      label: "Billing Address",
      name: "billingAddress",
      value: "",
      placheolder: "",
      onChange: inputChange,
      mandatory: true,
    },
    jobTitle: {
      api: "",
      name: "jobTitle",
      value: "2",
      label: "Job Title",
      payload: {},
      status: "",
      onChange: selectChange,
    },
    company: {
      label: "Company",
      name: "company",
      value: "",
      placheolder: "",
      onChange: inputChange,
      mandatory: true,
    },
    mobile: {
      label: "Mobile",
      name: "mobile",
      value: 432432,
      code: "994",
      placheolder: "",
      onChange: numberChange,
    },
    addressLine1: {
      label: "Address Line 1",
      name: "addressLine1",
      value: "",
      placheolder: "",
      onChange: inputChange,
      mandatory: true,
    },
    addressLine2: {
      label: "Address Line 2",
      name: "addressLine2",
      value: "",
      placheolder: "",
      onChange: inputChange,
      mandatory: true,
    },
    linkedin: {
      label: "Linkedin",
      name: "linkedin",
      value: "",
      placheolder: "",
      onChange: inputChange,
      mandatory: true,
    },
    website: {
      label: "Website",
      name: "website",
      value: "",
      placheolder: "",
      onChange: inputChange,
      mandatory: true,
    },
    zipCode: {
      label: "Zip Code",
      name: "zipCode",
      value: "",
      placheolder: "",
      onChange: inputChange,
      mandatory: true,
    },
    city: {
      label: "City",
      name: "city",
      value: "",
      placheolder: "City",
      onChange: inputChange,
      mandatory: true,
    },
    country: {
      api: "",
      name: "country",
      value: "2",
      label: "Country",
      payload: {},
      onChange: selectChange,
    },
  });

  return { profileState, setProfileState };
}
