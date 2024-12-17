import { Box } from '@mui/material';
import { InputNumber, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import { useEffect, useState } from 'react';
const selectBefore = (
    <Select defaultValue="az" style={{ width: 90,height:'48px'}}>
      <Option value="az">+994</Option>
      <Option value="us">+1</Option>
      <Option value="ru">+7</Option>
      <Option value="tr">+90</Option>
    </Select>
  );
 
  interface InputMobileOptions{
    data: {
      value: number;
      name: string;
      label: string;
      // message: string;
      required?: boolean;
      email?: boolean;
      status?:boolean;
      onChange: (e: { name: string; value: number }) => void;
    };
  }
export default function InputMobile({ data }: InputMobileOptions) {

  const [props, setProps] = useState(data);

  useEffect(() => {
    setProps(data); // Set initial props from parent data
  }, [data]);

  const onChange = (value: number | null) => {
    setProps((prev) => ({
      ...prev,
      value: value ?? 0, // Fallback to 0 if value is null
    }));
  
    // Notify parent component of the change
    data.onChange({ name: props.name, value: value ?? 0 }); // Ensure it's always a number
  };
  return (
    <Box sx={{display:'flex', alignItems:'center',margin:'10px 0'}}>
   
       <InputNumber addonBefore={selectBefore}    style={{height:'40px',width:'100%', }} 
        onChange={onChange} // Handle input change
        value={props.value} // Maintain the value from the state
        name={props.name}
        status={props.status? 'error':undefined}
       />
    </Box>
  )
}
