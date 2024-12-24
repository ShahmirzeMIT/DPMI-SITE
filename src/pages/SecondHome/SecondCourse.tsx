import { Box, Button, Typography, Grid } from "@mui/material";
import Logo from '../../assets/images/productDigital.jpg'
import { useNavigate } from "react-router-dom";

const SecondCourse = () => {
  const navigate=useNavigate()
  return (
    <Box sx={{ padding: "40px", backgroundColor: "white",  height: { xs: "auto" },borderTop:'1px solid #e0e0e0' }}>
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
            sx={{ fontWeight: "400", color: "black", mb: 2, }}
          >
            Digital Product Management
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 4, fontSize:'18px' ,lineHeight:'27px',letterSpacing:'0' }}>
          Individuals who want to build a future career in Digital Product Management or acquire deeper and more sophisticated skills and knowledge can apply for this certification. A completely new, applicable approach with simulators and real-world project practice, along with interactive training, prepares you directly for real work and team environments. Topics covered include requirements analysis, design, backlog assessment, issue management, product management, budgeting, timing, and more.
          </Typography>
       
          <Box sx={{marginTop:'20px'}}>
          <Button variant="contained" sx={{ backgroundColor: '#2a74b1', color: 'white', padding: {xs:"10px 20px",md:"10px 70px"},}} onClick={() => navigate('/certificates/1006')}>
              View Certification
          </Button>
          </Box>
       
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default SecondCourse;
