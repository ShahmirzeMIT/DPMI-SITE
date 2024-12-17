import { Input } from 'antd'
import { useEffect, useState } from 'react';
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

export interface InputPassWordTypes {
    data: {
      value: string;
      name: string;
      label: string;
      message?: string;
      required?: boolean;
      email?: boolean;
      status?:boolean;
      onChange: (e: { name: string; value: string }) => void;
    };
  }
export default function InputPassWord({data}: InputPassWordTypes) {
  const [props, setProps] = useState(data);

  useEffect(() => {
    setProps(data); // Set initial props from parent data
  }, [data]);

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
      <Input.Password
          style={{...inputTextStyle.input}}
          onChange={onChange} // Handle input change
          value={props.value} // Maintain the value from the state
          name={props.name}
          status={props.status? 'error':undefined}
          placeholder={props.label}
        />
      {props.status && (
            <div style={{...inputTextStyle.message}}>{props.message}</div>
          )}
      </>
  )
}
