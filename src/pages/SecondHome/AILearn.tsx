import { Box, Button, Typography } from '@mui/material'
import Logo from '../../assets/images/firstBgAgile.jpeg'
//    
export default function AILearn() {
  return (
    <Box sx={{
      // position: "absolute",
      // top: 0,
      // left: 0,
      width: "100%",
      // height: "500px",
      backgroundImage: `url(${Logo})`,
      // background: "linear-gradient(to bottom, #c8c8c8, white)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
        marginTop:'120px',
        padding:"40px 0",
     
    
    }}>
        <Typography
          variant="h4"
          style={{ marginBottom: "60px", color: "black",fontSize:'2.4rem' }}
        >
          We've developed an <span style={{color:'#fb6b22',fontWeight:'bold'}}>AI-driven E-Learning </span>
          <br />
          <span style={{color:'#fb6b22',fontWeight:'bold',marginRight:'5px'}}>Platform</span>
           that lets you apply
           <span style={{color:'#fb6b22',fontWeight:'bold',marginLeft:'5px',marginRight:'5px'}}>100%</span> of your
          <br />
          knowledge on the real-world projects.
        </Typography>
        <Typography sx={{color:'black',fontSize:'16px',fontWeight:'400',textAlign:'center',marginLeft:'70px',lineHeight:'40px',marginBottom:'40px'}}>AI Simulator, AI Mentor, Live Mentorship, Comprehensive Guidelines, Video Tutorials, Gamified <br/> Learning, and Project Sharing.</Typography>
        <Button variant="contained" style={{ backgroundColor: '#fb6b22', color: 'white',padding:'10px 70px' }}>
        Discover E-Learning Platform
          </Button>
    </Box>
  )
}
