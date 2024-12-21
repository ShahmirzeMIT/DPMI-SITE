import { Box } from '@mui/material'
import { Avatar, Typography } from 'antd'
import Logo from '../../assets/images/whatLearn.png'

const data=[{
    title:"How to Segment Niche Markets Using AI/GenAIMaster AI tools to identify and target niche markets with precision for tailored business strategies.",
},
{
    title:"How to Design AI-Driven Digital Service Models Learn to create innovative digital services using AI, GenAI, and blockchain to drive global market growth",
},
{
    title:"How to Leverage Big Data for Business Insights Explore methods to utilize AI and ML for extracting actionable insights and enhancing customer experiences",
},
{
    title:"How to Optimize Market Strategies with AI/GenAI Use AI to enhance sales efforts, personalize campaigns, and improve customer satisfaction.",
},
{
    title:"How to Apply Predictive Analytics for Service Efficiency Utilize AI-powered analytics to anticipate trends, improve operations, and optimize service delivery",
},
{
    title:"How to Automate Processes with AI/GenAI Tools Master the implementation of AI-driven solutions to streamline business operations and improve efficiency.",
}
]

export default function WhatLearnACPF() {
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
