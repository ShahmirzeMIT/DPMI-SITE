import { Box, Typography } from '@mui/material'
import Logo from '../../assets/images/courseDesc.jpg'
import { Avatar } from 'antd'
interface ShortDescProps{
    data:{
        shortDesc:string
    }
    
}
export default function ShortDesc({data}:ShortDescProps) {
  return (
    <Box  sx={{marginBottom:'40px'}}>
        <Typography variant='h3' sx={{color:'black',fontSize:'30px',fontWeight:'bold',marginBottom:'10px',textAlign:'start'}}>
            <Avatar src={Logo} style={{width:'70px',height:'70px',marginRight:'5px'}} shape="square" />
            Short Description</Typography>
        <Typography sx={{
            color:'black',fontSize:'16px',fontWeight:'400',textAlign:'start',
            lineHeight:'40px',
            padding:'0 30px'
        }}>{data.shortDesc}</Typography>
    </Box>
  )
}
