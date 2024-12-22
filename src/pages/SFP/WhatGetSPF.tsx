import { Box } from '@mui/material'
import { Avatar, Typography } from 'antd'
import Logo from '../../assets/images/payment.png'

const data = [

    {   boldTitle:"Completion Certification",
        title:' – Official recognition of course completion.'
    },
    {
        boldTitle:"Access to Training Simulation System",
        title:'– Real-world practice with digital tools.'
    },
    {   
        boldTitle:"1-Year Full Access to Course Materials",
        title:' – Continuous learning with unlimited resources.'
    },
    {
        boldTitle:"Unlimited Real Projects in Training Simulation",
        title:'– Hands-on project creation and sharing.'
    },
    {
        boldTitle:"Hands-On Projects",
        title:'– Practical application through real-world scenarios.'
    },
    {
        boldTitle:"Quizzes & Assessments",
        title:'– Test knowledge and track progress.'
    },
    {
        boldTitle:"Mentor Support",
        title:' – Guidance from experienced professionals.'

    }   ,
    {
        boldTitle:"Certification Exam Voucher",
        title:' – Free voucher for certification exam.'
    },
    {
        boldTitle:"Interactive Learning Tools",
        title:' – Engaging and immersive learning experience.'
    },
    
]
export default function WhatGetSPF() {
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
