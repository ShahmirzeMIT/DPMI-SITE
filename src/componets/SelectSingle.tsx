import { Box } from '@mui/material';
import { Select } from 'antd';
import { useEffect, useState } from 'react';
import { selectData } from './selectData';

export interface SelectSingleProps {
  data: {
    api: string;
    name: string;
    value: string;
    label: string;
    payload: unknown;
    disabled?: boolean;
    status?: '' | 'warning' | 'error';
    onChange: (selectedOption: Option) => void;
  };
}

export interface Option {
  name: string; // Add dynamically if missing in source data
  key: string;
  value: string;
}

export default function SelectSingleVertical({ data }: SelectSingleProps) {
  const [props, setProps] = useState(data);

  // Map selectData to include a `name` property dynamically
  const updatedOptions = selectData.map((option) => ({
    ...option,
    name: props.name, // Set name dynamically based on value
    label: option.value, // AntD expects label for rendering
  }));

  useEffect(() => {
    setProps(data);
  }, [data]);

  const handleSelectChange = (value: string) => {
    
    const selectedOption = updatedOptions.find((option) => option.value === value);
    
    if (selectedOption) {
      data.onChange(selectedOption); // Notify the parent component
      setProps((prev) => ({
        ...prev,
        value: selectedOption.value, // Update the value as a string
      }));
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
      <Select
        showSearch
        style={{ height: '40px', width: '100%' }}
        placeholder={data.label}
        optionFilterProp="label"
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        }
        onChange={handleSelectChange}
        options={updatedOptions.map(({ key, value, label }) => ({
          key,
          value,
          label, // Use `label` for the dropdown display
        }))}
      />
    </Box>
  );
}
