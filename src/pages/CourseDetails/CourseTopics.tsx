import { Box } from '@mui/material'
import { Avatar, Typography } from 'antd'
import PointText from '../../componets/PointText';
import Logo from '../../assets/images/whatLearn.png'
interface WhatGetSPFProps{
    data:{desc:string,title:string}[]
}
export default function CourseTopics({data}:WhatGetSPFProps) {
  return (
    <Box sx={{width:'100%',margin:'90px auto'}}>
    <Typography style={{color:'black',fontSize:'36px',fontWeight:'400',textAlign:'start',textTransform:'uppercase',marginBottom:'50px'}}>
       <Avatar src={Logo} style={{width:'70px',height:'70px',marginRight:'20px'}} shape="square" />
       Topics</Typography>
       {
        data.map((item,_index)=>(
          <>
          <Typography style={{color:'black',fontSize:'24px',fontWeight:'400',textAlign:'start',marginLeft:'40px',lineHeight:'40px', display:"flex",alignItems:'center'}}>
               <PointText/>{item.title}</Typography>
          <Typography style={{color:'black',fontSize:'18px',textAlign:'start',marginLeft:'70px',lineHeight:'40px', display:"flex",alignItems:'center'}}>
            {item.desc}</Typography>
          </>
          
        ))
       }
      
    </Box>
  )
}
