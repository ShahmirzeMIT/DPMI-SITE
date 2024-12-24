import { Box, Button, Grid, Typography } from '@mui/material'
import Logo from '../../assets/images/aiTransformation.jpg'
import { useNavigate } from 'react-router-dom'

export default function CompaniesAIransformation() {
    const navigate=useNavigate()
  return (
    <Box sx={{ padding: "40px", backgroundColor: "#f7f7f7",  height: { xs: "auto" }, }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "400", color: "black", mb: 2 }}
          >
          AI Transformation
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 4, fontSize:'18px' ,lineHeight:'27px',letterSpacing:'0' }}>
          Our Al Transformation services offer expert consultation and training to help your business integrate artificial intelligence effectively. We guide you through understanding Al technologies, identifying opportunities for automation, and implementing Al-driven strategies that enhance decision-making and drive innovation in your operations.
          </Typography>
          <Box sx={{marginTop:'20px'}}>
          <Button variant="contained" style={{ backgroundColor: '#fb6b22', color: 'white',padding:'10px 70px' }} onClick={() => navigate('/certificates/1003')}>
              Contact Us
          </Button>
          </Box>
          

        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6} display={{ xs: "none", md: "block" }}>
        <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            //   overflow: "hidden",
              borderRadius: 4,
            }}
          >
            <img
              alt="User Testimonial"
              src={Logo}
              style={{
                width: "90%",
                height: "500px",
                objectFit: "cover",
                borderRadius: "16px",
                zIndex:1
              }}
            />

         
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
