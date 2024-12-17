import { Box } from '@mui/material'
import { Input, Typography } from 'antd'
import { useEffect, useState } from 'react'
interface FormInputVerticalProps {
    data:{
        label:string
        name:string
        value:string
        placheolder:string
        onChange: (e: {name: string; value: string}) => void
        disabled?: boolean
        mandatory?: boolean
    }
}
export default function FormInput( {data}:FormInputVerticalProps) {
  const [props, setProps] = useState(data);
  useEffect(() => {
    setProps(data);
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
        <Input placeholder={data.label}  onChange={onChange} style={{height:'48px',width:'55%',}} value={props.value}/>
     
    </Box>
  )
}
