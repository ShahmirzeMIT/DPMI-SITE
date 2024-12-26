import { Box } from "@mui/material";
import { Avatar, Typography } from "antd";
import Logo from '../../assets/images/whyus.jpg'
import PointText from "../../componets/PointText";

interface WhySpfProps {
    data: {
        title: string;
        text?:string
    }[];
    title:string
}

export default function WhySpf({data,title}:WhySpfProps) {
  return (
    <Box sx={{width:'95%',margin:'90px auto'}}>
        <Typography style={{color:'black',fontSize:'36px',fontWeight:'400',textAlign:'start',marginBottom:'40px'}}>
           <Avatar src={Logo} style={{width:'70px',height:'70px',marginRight:'10px',fontSize:'36px'}} shape="square" /> Why {title} </Typography>
           {
            data.map((item,_index)=>(
              <>
               <Typography style={{display:'flex',fontWeight:'400',textAlign:'start',marginLeft:'70px',lineHeight:'40px',fontSize:'18px',marginTop:'5px', alignItems:'center'}}>
                  <PointText/>
                  {item.title}</Typography>
                <Typography style={{textAlign:'start',marginLeft:'110px',lineHeight:'40px',fontSize:'14px'}}>{item.text}</Typography>

              </>
                
            ))
           }
          
    </Box>
  )
}
