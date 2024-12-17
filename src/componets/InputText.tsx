import {  Input } from 'antd';
import { useEffect, useState } from 'react';

export interface InputTextProps {
    data: {
      value: string;
      name: string;
      label: string;
      message?: string;
      required?: boolean;
      email?: boolean;
      status?: boolean; // Indicates whether to show an error
      onChange: (e: { name: string; value: string }) => void;
    };
  }
  export const inputTextStyle={
    tyography:{
        width: '100%', display:'flex',alignItems:'center',margin:'5px auto'
    },
    input:{
        height: '40px' ,width: '100%', display:'flex',alignItems:'center',margin:'0 auto'
    },
    message:{
        color: 'red', marginTop: '5px',width: '90%', display:'flex',alignItems:'center',margin:'0 auto' 
    }
  }
export default function InputText({ data }: InputTextProps) {
  const [props, setProps] = useState(data);

  useEffect(() => {
    setProps(data); // Set initial props from parent data
  }, [data.value, data.status, data.message]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProps((prev) => ({
      ...prev,
      value,
    }));

    data.onChange({ name, value });
  };

  return (
  
    <>
    <Input
        style={{...inputTextStyle.input}}
        onChange={onChange} // Handle input change
        value={props.value} // Maintain the value from the state
        name={props.name}
        placeholder={props.label}
        status={props.status ? 'error' : undefined} // Ant Design error status
      />
      {/* Show error message if status is true */}
      {props.status && (
        <div style={{...inputTextStyle.message}}>{props.message}</div>
      )}
    </>
      
  );
}
