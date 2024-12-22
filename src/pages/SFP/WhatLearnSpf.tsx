import { Box } from '@mui/material'
import { Avatar, Typography } from 'antd'
import Logo from '../../assets/images/whatLearn.png'
// •  Digital Product Components & UX Design: Understand the key components of digital products and how UX design shapes user interactions and experiences.
// •  Component Organization and Layout: Learn how to effectively organize component length, order, and relations to create logical page structures.
// •  Form Design & Input Management: Discover how to design interactive forms using components like text areas, file pickers, and select boxes, ensuring smooth user input.
// •  Event Actions & Form Handling: Master event actions like form popups, redirects, and closing forms to improve user engagement and flow.
// •  Styling with CSS: Gain hands-on experience in applying CSS styles to digital product pages and components, ensuring visual consistency and responsiveness.
const data=[{
    title:"Digital Product Components & UX Design: Understand the key components of digital products and how UX design shapes user interactions and experiences.",
},
{
    title:"Component Organization and Layout: Learn how to effectively organize component length, order, and relations to create logical page structures.",
},
{
    title:"Form Design & Input Management: Discover how to design interactive forms using components like text areas, file pickers, and select boxes, ensuring smooth user input.",
},
{
    title:"Event Actions & Form Handling: Master event actions like form popups, redirects, and closing forms to improve user engagement and flow.",
},
{
    title:"Styling with CSS: Gain hands-on experience in applying CSS styles to digital product pages and components, ensuring visual consistency and responsiveness.",
}]

export default function WhatLearnSpf() {
  return (
    <Box sx={{width:'90%',margin:'90px auto'}}>
    <Typography style={{color:'black',fontSize:'36px',fontWeight:'600',textAlign:'start',marginLeft:'10px',}}>
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
