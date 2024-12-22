import { Box } from '@mui/material'
import { Avatar, Typography } from 'antd'
import Logo from '../../assets/images/whatLearn.png'

interface WhatLearnSpfProps {
  data:{title:string}[]
}

export default function WhatLearnSpf({data}:WhatLearnSpfProps) {
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
