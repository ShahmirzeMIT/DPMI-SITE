import { Box } from '@mui/material'
import { Input, Typography } from 'antd'
// import { InputPassWordTypes } from '../types/inputPassword';
import { useEffect, useState } from 'react';


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
export default function FormPassWord( {data}:InputPassWordTypes) {
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
    <Box sx={{display:'flex', alignItems:'center',margin:'10px 0', padding: "15px 56px 0",}}>
        <Typography style={{width:'40%',
            color:" #010101",
            display: "block",
            fontSize: "16px",
            fontWeight: 600,}}>
                {data.label} </Typography>
        <Input.Password   style={{height:'48px',width:'55%',}}
         onChange={onChange} // Handle input change
         value={props.value} // Maintain the value from the state
         name={props.name}
         status={props.status? 'error':undefined}
        />
     
    </Box>
  )
}
