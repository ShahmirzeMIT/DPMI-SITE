import { Box, Button, Typography, Grid } from "@mui/material";
import Logo from '../../assets/images/starttup.jpg'
import { useNavigate } from "react-router-dom";
const FirstCourse = () => {
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
          Startup Journey
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 4, fontSize:'18px' ,lineHeight:'27px',letterSpacing:'0' }}>
          This certification is designed for individuals who are taking their first steps into the startup world or want to strengthen their existing knowledge and skills. It covers the stages of developing and launching a digital product based on market demand. The main topics include market analysis, segmentation, page design, database and API design, creating an MVP, calculating budget and time, and the product launch phase
          </Typography>
          <Box sx={{marginTop:'20px'}}>
          <Button variant="contained" sx={{ backgroundColor: '#fb6b22', color: 'white', padding: {xs:"10px 20px",md:"10px 70px"}, }} onClick={() => navigate('/certificates/1003')}>
              View Certification
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
  );
};

export default FirstCourse;
