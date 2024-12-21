import { Box, Button, Typography, Grid } from "@mui/material";
import Logo from '../../assets/images/starttup.jpg'
const FirstCourse = () => {
  return (
    <Box sx={{ padding: "40px", backgroundColor: "#f7f7f7",  height: { xs: "auto", md: "85vh" }, }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "black", mb: 2 }}
          >
          Startup Journey
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 4 }}>
          This certification is designed for individuals who are taking their first steps into the startup world or want to strengthen their existing knowledge and skills. It covers the stages of developing and launching a digital product based on market demand. The main topics include market analysis, segmentation, page design, database and API design, creating an MVP, calculating budget and time, and the product launch phase
          </Typography>
          <Box sx={{marginTop:'20px'}}>
          <Button variant="contained" style={{ backgroundColor: '#fb6b22', color: 'white',padding:'10px 70px' }}>
              View Certifications
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
