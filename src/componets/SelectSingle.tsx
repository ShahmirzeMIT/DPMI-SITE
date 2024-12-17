import { Box } from '@mui/material'
import { Select, Typography } from 'antd'
import { useEffect, useState } from 'react';
export interface SelectSingleProps {
    data: {
      api: string;
      name: string;
      value: string;
      label: string;
      payload: unknown;
      disabled?: boolean;
      status?: "" | "warning" | "error"; 
      onChange: (selectedOption: Option) => void;
    };
  }
  

export interface Option {
    name: string;
    key: string;
    value: string;
  }
  

export const options: Option[] = [
    { name: '1', value: 'Not Identified', key: '1' },
    { name: '2', value: 'Closed', key: '2' },
    { name: '3', value: 'Communicated', key: '3' },
    { name: '4', value: 'Identified', key: '4' },
    { name: '5', value: 'Resolved', key: '5' },
    { name: '6', value: 'Cancelled', key: '6' },
  ];
export default function SelectSingleVertical({ data }: SelectSingleProps) { 
    const [props, setProps] = useState(data);

    const updatedOptions = options.map((option: Option) => ({
      ...option,
      name: props.name,
    }));
  
    useEffect(() => {
      setProps(data);
    }, [data]);
  
    const handleSelectChange = (value: string) => {
      const selectedOption = options.find((option) => option.key === value);
  
      if (selectedOption) {
        data.onChange(selectedOption); // Notify the parent component of the selected option
        setProps((prev) => ({
          ...prev,
          value: selectedOption.value, // Update the value as a string
        }));
      }
    };
  return (
    <Box sx={{display:'flex', alignItems:'center',margin:'10px 0', padding: "15px 56px 0",}}>
        <Typography style={{width:'40%',
            color:" #010101",
            display: "block",
            fontSize: "16px",
            fontWeight: 600,}}>
                {/* {data.label} */}
                {data.label}
                 *</Typography>
        <Select
            showSearch
            style={{height:'48px',width:'55%',}}
            placeholder="Search to Select"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              onChange={handleSelectChange}
              options={updatedOptions.map((option) => ({
                value: option.key,
                label: option.value,
              }))}
        />
    </Box>
  )
}
