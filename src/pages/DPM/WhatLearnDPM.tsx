import { Box } from '@mui/material'
import { Avatar, Typography } from 'antd'
import Logo from '../../assets/images/whatLearn.png'

const data=[{
    title:"How to Create and Manage a Project Backlog <br/>Master the use of UI Cards and Data Flow Cards to structure and organize all project tasks and features.",
},
{
    title:"How to Plan and Adjust Sprints Effectively <br/>Learn to prioritize tasks, manage scope changes, and align sprint goals with business objectives.",
},
{
    title:"How to Apply Estimation Techniques for Accurate Planning <br/>Explore methods like Parametric and Expert Judgment to calculate precise task completion times",
},
{
    title:"How to Handle Change Requests During Sprints <br/> Discover strategies to manage change and new requests while maintaining project quality and timelines",
},
{
    title:"How to Foster Collaboration Through Agile Communication <br>Develop skills to enhance team alignment, resolve conflicts, and integrate user feedback for continuous improvement",
}]

export default function WhatLearnDPM() {
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
