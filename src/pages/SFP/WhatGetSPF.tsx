import { Box } from '@mui/material'
import { Avatar, Typography } from 'antd'
import Logo from '../../assets/images/payment.png'

interface WhatGetSPFProps{
    data:{boldTitle:string,title:string}[]
}
export default function WhatGetSPF({data}:WhatGetSPFProps) {
  return (
    <Box sx={{width:'95%',margin:'90px auto'}}>
    <Typography style={{color:'black',fontSize:'36px',fontWeight:'600',textAlign:'start',marginLeft:'10px',}}>
       <Avatar src={Logo} style={{width:'70px',height:'70px',marginRight:'20px'}} shape="square" />
       What you will get</Typography>
       {
        data.map((item,index)=>(
            <Typography style={{color:'black',fontSize:'18px',fontWeight:'400',textAlign:'start',marginLeft:'70px',lineHeight:'40px'}}>
                <span style={{marginRight:'10px',fontWeight:'600',fontSize:'26px'}}>{index+1 +". "}{item.boldTitle}</span>{item.title}</Typography>
        ))
       }
      
    </Box>
  )
}
