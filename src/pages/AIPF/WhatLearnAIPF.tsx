import { Box } from '@mui/material'
import { Avatar, Typography } from 'antd'
import Logo from '../../assets/images/whatLearn.png'

const data=[{
    title:"Digital Product Components & UX Design: Understand how digital products are structured and how UX design impacts user interaction.",
},
{
    title:"Data Flow Management: Master the process of managing data flow between pages, tables, and components to ensure smooth functionality.",
},
{
    title:"SQL & API Integration: Learn SQL for database management and how to integrate APIs to connect systems and databases.",
},
{
    title:"Database Design & Relationships: Gain skills in designing relational databases and managing data relationships with ERDs.",
},
{
    title:"Business Requirement Mapping: Learn how to capture and document actionable business and data-driven requirements to ensure successful product development",
}]

export default function WhatLearnAIPF() {
  return (
    <Box sx={{width:'90%',margin:'90px auto'}}>
    <Typography style={{color:'black',fontSize:'30px',fontWeight:'600',textAlign:'start',marginLeft:'10px'}}>
       <Avatar src={Logo} style={{width:'70px',height:'70px',marginRight:'20px'}} shape="square" />
       What you will learn</Typography>
       <ul>
       {
        data.map((item,_index)=>(
           <li style={{color:'black',fontSize:'18px',fontWeight:'500',textAlign:'start',marginLeft:'70px',lineHeight:'40px'}}>{item.title}</li>
        ))
       }
      </ul>
    </Box>
  )
}
