import { Box, Button, Typography, Grid } from "@mui/material";
import Logo from '../../assets/images/agilecertificate.jpg'

const FourthCourse = () => {
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
         "Unlock the Power of Agile Communication 
            <br /> to Drive Collaboration and Success."
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 4 }}>
            	
            If you are a Product Owner, Agile Coach, Business Owner, Product Manager, or Project Manager struggling with communication issues with the development team, this certification can help you a lot. It makes it possible to eliminate weekly and daily meetings with no business value completely. This certification is also designed for software developers, QA engineers, UI/UX designers, and other engineers who find it challenging to understand business requirements
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center",justifyContent: "center"}}>
          <Button variant="contained" style={{ backgroundColor: '#fb6b22', color: 'white',padding:'10px 70px' }}>
              View Fundamenmtal Level
          </Button>

          </Box>
          <Box sx={{marginTop:'20px'}}>
          <Button variant="contained" style={{ backgroundColor: '#2a74b1', color: 'white',padding:'10px 70px' }}>
              View Proffesional Level
          </Button>
          </Box>
       
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default FourthCourse;
