import { Box } from '@mui/material'
import { Avatar, Typography } from 'antd'
import Logo from '../../assets/images/whatLearn.png'
import PointText from '../../componets/PointText';
interface WhatLearnSpfProps {
  data:{title:string;desc:string,}[]
}

export default function WhatLearnDPM({data}:WhatLearnSpfProps) {
  return (
    <Box sx={{width:'100%',margin:'90px auto'}}>
    <Typography style={{color:'black',fontSize:'36px',fontWeight:'400',textAlign:'start',marginLeft:'10px',textTransform:'uppercase'}}>
       <Avatar src={Logo} style={{width:'70px',height:'70px',marginRight:'20px'}} shape="square" />
       What you will learn</Typography>
       <ul style={{width:'100%',marginTop:'20px'}}>
       {
        data.map((item,_index)=>(
           <li style={{color:'black',fontSize:'18px',fontWeight:'200',textAlign:'start',marginLeft:'40px',lineHeight:'30px',marginTop:'20px',listStyle:'none'
            // ,display:'flex',alignItems:'center'
           }}>
            <PointText/>
            <span style={{fontSize:'24px'}}>{item.title}</span> <div style={{marginLeft:'30px'}}>{item.desc}</div></li>
        ))
       }
      </ul>
    </Box>
  )
}
