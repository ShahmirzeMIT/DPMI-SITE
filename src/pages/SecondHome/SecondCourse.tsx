import { Box, Button, Typography, Grid } from "@mui/material";
import Logo from '../../assets/images/productDigital.jpg'

const SecondCourse = () => {
  return (
    <Box sx={{ padding: "40px", backgroundColor: "white",  height: { xs: "auto", md: "80vh" },borderTop:'1px solid #e0e0e0' }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
      

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
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "black", mb: 2,fontFamily:" Cabin, sans-serif !important", }}
          >
            Digital Product Managment
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 4,fontFamily:" Cabin, sans-serif !important", }}>
          Individuals who want to build a future career in Digital Product Management or acquire deeper and more sophisticated skills and knowledge can apply for this certification. A completely new, applicable approach with simulators and real-world project practice, along with interactive training, prepares you directly for real work and team environments. Topics covered include requirements analysis, design, backlog assessment, issue management, product management, budgeting, timing, and more.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center",justifyContent: "center"}}>
            <Button
                  variant="contained"
                  sx={{
                      background: "linear-gradient(90deg, #fb6b22, #2a74b3)", // Updated gradient
                      color: "white",
                      mb: 3,
                      padding: "10px 20px",
                      borderRadius: "25px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      textTransform: "none",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                          background: "linear-gradient(90deg, #2a74b3, #fb6b22)", // Updated hover gradient
                          transform: "scale(1.05)",
                          boxShadow: "0 4px 15px rgba(251, 107, 34, 0.4)", // Matching hover box shadow
                      },
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontFamily:" Cabin, sans-serif !important",
                  }}
              >
                  <span style={{ fontSize: "18px",fontFamily:" Cabin, sans-serif !important", }}>For More</span>
              </Button>
          </Box>
          <Box sx={{marginTop:'20px'}}>
          <Button variant="contained" style={{ backgroundColor: '#2a74b1', color: 'white',padding:'10px 70px',fontFamily:" Cabin, sans-serif !important", }}>
              View Certifications
          </Button>
          </Box>
       
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default SecondCourse;
