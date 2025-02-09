import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PayMentCheckLogin from './PaymentCheckLogin';
import PaymentCheckSign from './PaymentCheckSign';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function PayMentCheck() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '80%',margin:'130px auto' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
           <Tab label="Register" {...a11yProps(0)} />
          <Tab label="Already Have an Account " {...a11yProps(1)} />
         
        </Tabs>
      </Box>
     
      <CustomTabPanel value={value} index={0}>
        <PaymentCheckSign/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PayMentCheckLogin/>
      </CustomTabPanel>
      
    </Box>
  );
}
