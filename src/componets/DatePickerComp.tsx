import { Box } from '@mui/material';
import { DatePicker, DatePickerProps } from 'antd';
import dayjs from 'dayjs'; // Dayjs-in düzgün işləməsi üçün import edin
import { useEffect, useState } from 'react';

export const dateTimePickerVerticalStyle={
  container:{
     
      display: 'flex',
      alignItems: 'center',
      margin: '10px 0',
      // padding: '15px 56px 0',
   
  },
  typography:{
      color: '#010101',
      display: 'block',
      fontSize: '16px',
      fontWeight: 600,
    
  },
}
export interface DatePickerPropsType {
  data: {
    label: string;
    value: string;
    name: string;
    placheolder: string;
    onChange: (value: { name: string; value: string }) => void;
    disabled?: boolean;
    mandatory?: boolean;
  };
}
export default function DatePickerComp({ data }: DatePickerPropsType) {
  const [props, setProps] = useState(data);

  useEffect(() => {
    setProps(data);
  }, [data]);

  const onChange: DatePickerProps['onChange'] = (_, dateString) => {
    const safeValue = dateString || '';
    data.onChange({ name: data.name, value: safeValue.toString() });
  };
  return (
    <Box  sx={{...dateTimePickerVerticalStyle.container}}>
      <DatePicker
        onChange={onChange}
        value={props.value ? dayjs(props.value) : null}
        style={{ height: '40px', width: '100%' }}
        disabled={data.disabled}
        placeholder={data.label}
      />
    </Box>
  );
}
