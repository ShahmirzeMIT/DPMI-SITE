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
        title:'Master Agile Communication in Product Requirement Analysis',
    },
    {
        title:'Strengthen Cross-functional Communication in Digital Product Design',
    },
    {
        title:'Apply Agile Principles to Master Data and Financial Hypothesis Analysis',
    },
    {
        title:'Enhance Collaboration Across Teams with Business Requirement Analysis',
    },
    {
        title:'Foster Effective Communication in SQL and API Design',
    },
    {
        title:'Align Agile Communication with Product Development and Strategy',
    },
    {
        title:'Streamline Decision-making Processes through Agile Communicationt',
    },
    {
        title:'Improve Stakeholder Communication in Complex Digital Projects',
    },
]

export default function WhyAIPF() {
  return (
    <Box sx={{width:'90%',margin:'90px auto'}}>
        <Typography style={{color:'black',fontSize:'30px',fontWeight:'600',textAlign:'start'}}>
           <Avatar src={Logo} style={{width:'70px',height:'70px',marginRight:'10px'}} shape="square" /> Why Agile Communication Practitioner™ interactive certification training program</Typography>
           {
            data.map((item,index)=>(
                <Typography style={{color:'black',fontSize:'20px',fontWeight:'400',textAlign:'start',marginLeft:'70px',lineHeight:'40px'}}><span style={{marginRight:'10px'}}>{index+1 +"."}</span>{item.title}</Typography>
            ))
           }
          
    </Box>
  )
}
