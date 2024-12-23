import { Box, Button, Typography } from '@mui/material'
import Logo from '../../assets/images/firstBgAgile.jpeg'
import { useNavigate } from 'react-router-dom'
//    
export default function AILearn() {
  const navigate=useNavigate()
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
       padding:"60px 0",
     
    
    }}>
        <Typography
          variant="h4"
          style={{ marginBottom: "1.5rem", color: "black",fontSize:'48px',lineHeight:'56px',letterSpacing:'0', }}
        >
          We've developed an <span style={{color:'#fb6b22',fontWeight:'bold'}}>AI-Simulation Learning</span>
          <br />
          <span style={{color:'#fb6b22',fontWeight:'bold',marginRight:'5px'}}>Platform</span>
           {" "}that lets you apply {" "}
           <span style={{color:'#fb6b22',fontWeight:'bold',marginLeft:'5px',marginRight:'5px'}}>100%</span> of your
          <br />
          knowledge on the real-world projects.
        </Typography>
        <Typography sx={{color:'black',fontSize:'21px',fontWeight:'400',textAlign:'center',marginLeft:'70px',lineHeight:'25px',paddingBottom:'60px',width:'700px',margin:'0 auto'}}>AI Simulator, AI Mentor, Live Mentorship, Comprehensive Guidelines, Video Tutorials, Gamified Learning, and Project Sharing.</Typography>
        <Button variant="contained" style={{ backgroundColor: '#fb6b22', color: 'white',padding:'10px 70px' ,marginBottom:'70px'}}
          onClick={() => navigate("/elearning")}
        >
             Discover AI-Simulation Learning Platform
          </Button>
    </Box>
  )
}
