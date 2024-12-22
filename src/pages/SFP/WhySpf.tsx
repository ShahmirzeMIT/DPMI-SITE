import { Box } from "@mui/material";
import { Avatar, Typography } from "antd";
import Logo from '../../assets/images/why-us.png'

interface WhySpfProps {
    data: {
        title: string;
    }[];
}

export default function WhySpf({data}:WhySpfProps) {
  return (
    <Box sx={{width:'95%',margin:'90px auto'}}>
        <Typography style={{color:'black',fontSize:'36px',fontWeight:'600',textAlign:'start'}}>
           <Avatar src={Logo} style={{width:'70px',height:'70px',marginRight:'10px',fontSize:'36px'}} shape="square" /> Why Startup Foundation Practitioner™ interactive certification training program</Typography>
           {
            data.map((item,index)=>(
                <Typography style={{color:'black',fontWeight:'400',textAlign:'start',marginLeft:'70px',lineHeight:'40px',fontSize:'18px'}}><span style={{marginRight:'10px'}}>{index+1 +"."}</span>{item.title}</Typography>
            ))
           }
          
    </Box>
  )
}
