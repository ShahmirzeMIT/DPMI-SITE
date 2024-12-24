import { Box } from '@mui/material'
import { Avatar, Typography } from 'antd'
import Logo from '../../assets/images/payment.png'
import PointText from '../../componets/PointText'
interface WhatGetSPFProps{
    data:{desc:string,title:string}[]
}
export default function WhatGetACPP({data}:WhatGetSPFProps) {
  return (
    <Box sx={{width:'100%',margin:'90px auto'}}>
    <Typography style={{color:'black',fontSize:'36px',fontWeight:'400',textAlign:'start',marginLeft:'10px',textTransform:'uppercase',marginBottom:'50px'}}>
       <Avatar src={Logo} style={{width:'70px',height:'70px',marginRight:'20px'}} shape="square" />
       What you will get</Typography>
       {
        data.map((item,_index)=>(
            <Typography style={{color:'black',fontSize:'18px',fontWeight:'400',textAlign:'start',marginLeft:'40px',lineHeight:'40px', display:"flex",alignItems:'center'}}>
               <PointText/>{item.title}</Typography>
        ))
       }
      
    </Box>
  )
}
