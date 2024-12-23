import { Box } from '@mui/material'
import { Avatar, Typography } from 'antd'
import Logo from '../../assets/images/completedCourse.jpg'
export default function CompletedCertification() {
  return (
    <Box>
      <Typography style={{color:'black',fontSize: "36px", fontWeight: 600}}>Completed Certificate</Typography>
      <Avatar src={Logo} style={{width:'80%',height:'750px',marginRight:'20px',objectFit:'contain'}} shape="square" />
    </Box>
  )
}
