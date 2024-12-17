import { Box } from '@mui/material';
import { InputNumber, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import { useEffect, useState } from 'react';

interface InputMobileOptions {
  data: {
    value: number;
    name: string;
    label: string;
    code: string;
    required?: boolean;
    email?: boolean;
    status?: boolean;
    onChange: (e: { name: string; value: number; code: string }) => void;
  };
}

export default function InputMobile({ data }: InputMobileOptions) {
  const [props, setProps] = useState(data);

  useEffect(() => {
    setProps(data); // Set initial props from parent data
  }, [data]);

  // Handle input change (for phone number)
  const onChange = (value: number | null) => {
    const nonNegativeValue = value && value < 0 ? 0 : value;
    setProps((prev) => ({
      ...prev,
      value: nonNegativeValue ?? 0, // Fallback to 0 if value is null
    }));

    // Notify parent component of the change
    data.onChange({ name: props.name, value: nonNegativeValue ?? 0, code: props.code });
  };

  // Handle country code selection change
  const selctChange = (value: string) => {
    // Update the selected country code
    setProps((prev) => ({
      ...prev,
      code: value,
    }));

    // Notify parent component with the new country code
    data.onChange({
      name: props.name,
      value: props.value,
      code: value, // Send the new country code
    });
  };

  // Select component for country code
  const selectBefore = (
    <Select value={props.code} style={{ width: 90, height: '48px' }} onChange={selctChange}>
      <Option value="+994">+994</Option>
      <Option value="+1">+1</Option>
      <Option value="+7">+7</Option>
      <Option value="+90">+90</Option>
    </Select>
  );

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
      {/* Phone number input with country code selector */}
      <InputNumber
        addonBefore={selectBefore} // Use the selectBefore to show country code
        style={{ height: '40px', width: '100%' }}
        onChange={onChange} // Handle input number change
        value={props.value} // Set input value from the state
        name={props.name}
        status={props.status ? 'error' : undefined}
      />
    </Box>
  );
}
