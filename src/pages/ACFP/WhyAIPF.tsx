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
        title:'Foundational Knowledge of AI and GenAI',
    },
    {
        title:'Hands-On Experience with Real-World AI Projects',
    },
    {
        title:'Practical Application in Digital Product Development',
    },
    {
        title:'AI Integration Across Various Industries',
    },
    {
        title:'Advanced Tools and Technologies in AI',
    },
    {
        title:'Data-Driven Decision-Making and Analytics',
    },
    {
        title:'Enhancing Business Processes with AI Solutions',
    },
    {
        title:'Agile Communication for Effective AI Implementation',
    },
]

export default function WhyACPF() {
  return (
    <Box sx={{width:'90%',margin:'90px auto'}}>
        <Typography style={{color:'black',fontSize:'30px',fontWeight:'600',textAlign:'start'}}>
           <Avatar src={Logo} style={{width:'70px',height:'70px',marginRight:'10px'}} shape="square" /> Why AI  Practitioner™ interactive certification training program</Typography>
           {
            data.map((item,index)=>(
                <Typography style={{color:'black',fontSize:'20px',fontWeight:'400',textAlign:'start',marginLeft:'70px',lineHeight:'40px'}}><span style={{marginRight:'10px'}}>{index+1 +"."}</span>{item.title}</Typography>
            ))
           }
          
    </Box>
  )
}
