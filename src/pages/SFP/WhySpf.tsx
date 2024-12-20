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
        desc:'Gain a deep understanding of the startup ecosystem, including market trends, funding models, startup culture, and business models.',
    },
    {
        title:'Practical Entrepreneurial Skills',
        desc:'Develop practical entrepreneurial skills, such as problem-solving, business planning, and business management.',
    },
    {
        title:'Real-world Application',
        desc:'Apply the knowledge and skills gained in the program to real-world applications and projects.',
    },
    {
        title:'Agile Communication Mastery',
        desc:'Develop effective communication skills and become a confident communicator in the startup ecosystem.',
    },
    {
        title:'Innovation & Strategy Development',
        desc:'Develop innovation and strategic thinking skills to drive business growth and success.',
    },
    {
        title:'Market Research and Product-Market Fit',
        desc:'Conduct market research and identify product-market fits to drive business success.',
    },
    {
        title:'Building Entrepreneurial Mindset',
        desc:'Develop a entrepreneurial mindset to drive business growth and success.',
    },
    {
        title:'Mentorship and Networking',
        desc:'Learn how to network with mentors and industry experts, gain access to resources, and build relationships that can lead to career growth.',
    },
]

export default function WhySpf() {
  return (
    <Box sx={{width:'90%',margin:'90px auto'}}>
        <Typography style={{color:'black',fontSize:'30px',fontWeight:'600',textAlign:'start'}}>
           <Avatar src={Logo} style={{width:'70px',height:'70px',marginRight:'10px'}} shape="square" /> Why Startup Foundation Practitioner™ interactive certification training program</Typography>
           {
            data.map((item,index)=>(
                <Typography style={{color:'black',fontSize:'20px',fontWeight:'400',textAlign:'start',marginLeft:'70px',lineHeight:'40px'}}><span style={{marginRight:'10px'}}>{index+1 +"."}</span>{item.title}</Typography>
            ))
           }
          
    </Box>
  )
}
