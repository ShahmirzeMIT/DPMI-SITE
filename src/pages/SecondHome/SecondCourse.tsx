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
            sx={{ fontWeight: "bold", color: "black", mb: 2 }}
          >
          Empowering You to Lead, Innovate, 
            <br /> and Transform the Future of Digital Products.
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 4 }}>
          The Digital Product Manager Certification is designed for professionals who aspire to lead and innovate in the ever-evolving world of digital products. This certification equips participants with the essential skills to manage the entire product lifecycle, from ideation and development to launch and optimization. Participants will gain hands-on experience in areas such as product strategy, user experience (UX) design, data-driven decision making, agile methodologies, and stakeholder management
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
                  }}
              >
                  <span style={{ fontSize: "18px" }}>For More</span>
              </Button>
          </Box>
       
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default SecondCourse;
