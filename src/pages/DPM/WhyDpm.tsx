import { Box } from "@mui/material";
import { Avatar, Typography } from "antd";
import Logo from '../../assets/images/why-us.png'
// Comprehensive Startup Ecosystem Knowledge
// Practical Entrepreneurial Skills
// Real-world Application
// Agile Communication Mastery
// Innovation & Strategy Development
// Market Research and Product-Market Fit
// Building Entrepreneurial Mindset
// Mentorship and Networking
const data=[
    {
        title:'Comprehensive Startup Ecosystem Knowledge',
    },
    {
        title:'End-to-End Product Lifecycle Expertise',
    },
    {
        title:'Practical Tools and Techniques',
    },
    {
        title:'Data-Driven Decision-Making',
    },
    {
        title:'Real-World Simulations',
    },
    {
        title:'Focus on Cost and Time Efficiency',
    },
    {
        title:'Global Market Perspective',
    },
    {
        title:'Certified Industry Recognition',
    },
]

export default function WhyDpm() {
  return (
    <Box sx={{width:'90%',margin:'90px auto'}}>
        <Typography style={{color:'black',fontSize:'30px',fontWeight:'600',textAlign:'start'}}>
           <Avatar src={Logo} style={{width:'70px',height:'70px',marginRight:'10px'}} shape="square" /> Why Digital Product Manager™ interactive certification training program</Typography>
           {
            data.map((item,index)=>(
                <Typography style={{color:'black',fontSize:'20px',fontWeight:'400',textAlign:'start',marginLeft:'70px',lineHeight:'40px'}}><span style={{marginRight:'10px'}}>{index+1 +"."}</span>{item.title}</Typography>
            ))
           }
          
    </Box>
  )
}
