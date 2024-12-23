import { Box, Grid, Typography } from '@mui/material'
import { Avatar } from 'antd'
import Logo from '../../assets/images/alumni.jpg'

export default function CourseDetailsHeader() {
  return (
    <div>
       <Grid container spacing={4} alignItems="center">
      {/* Left Side */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "400", color: "black", mb: 2 }}
        >
        Unlock Your Potential with Our Courses
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", mb: 1, fontSize:'18px' ,lineHeight:'27px',letterSpacing:'0' ,textAlign:'left'}}>
        Our certifications are designed to accelerate career growth for individuals and help companies build reliable, measurable, and practical pathways for AI Transformation. 
        </Typography>
        <Typography sx={{color: "#555", mb: 1, fontSize:'18px' ,lineHeight:'27px',letterSpacing:'0' ,textAlign:'left',marginTop:'10px'}}> With a strong focus on AI Practitioners, Digital Product Manager and Agile Communication Practitioner certifications and AI-driven learning, each program equips professionals with essential skills to thrive in dynamic environments. </Typography>
        <Typography sx={{color: "#555", mb: 1, fontSize:'18px' ,lineHeight:'27px',letterSpacing:'0' ,textAlign:'left',marginTop:'10px'}}>From mastering AI fundamentals to excelling in Digital Product Management, our courses combine theoretical knowledge with hands-on practice. </Typography>
        <Typography sx={{color: "#555", mb: 1, fontSize:'18px' ,lineHeight:'27px',letterSpacing:'0' ,textAlign:'left',marginTop:'10px'}} >


        Interactive simulations on our <span style={{color:'#fb6b22',fontWeight:'bold'}}>AI-Simulation Learning Platform</span>  ensure an engaging and impactful learning experience. Gain globally recognized credentials that prepare you to lead with confidence in today’s competitive market.
        </Typography>

      </Grid>

      {/* Right Side */}
      <Grid item xs={12} md={6} display={{ xs: "none", md: "block" }}>
      <Box sx={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
      
                <Avatar src={Logo} style={{maxWidth: "580px",height: "auto", width:'100%'}} shape="square"  />
          
      </Box>
      </Grid>
    </Grid>
    </div>
  )
}
