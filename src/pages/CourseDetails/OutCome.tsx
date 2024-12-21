import { Box, Typography } from '@mui/material'
import Logo from '../../assets/images/iconOutcome.jpg'
import { Avatar } from 'antd'
export default function OutCome() {
  return (
    <Box  sx={{marginBottom:'40px'}}>
    <Typography variant='h3' sx={{color:'black',fontSize:'30px',fontWeight:'bold',marginBottom:'10px',textAlign:'start'}}>
        <Avatar src={Logo} style={{width:'70px',height:'70px',marginRight:'5px'}} shape="square" />
        Outcome</Typography>
    <Typography sx={{
        color:'black',fontSize:'16px',fontWeight:'400',textAlign:'start',
        lineHeight:'40px',
        padding:'0 30px'
    }}>In this course, you’ll learn how to build and organize digital product pages by understanding and applying various UX design principles and digital product components. By the end, you'll have the skills to structure components, design interactive forms, and create seamless user experiences that align with business goals.</Typography>
</Box>
  )
}
