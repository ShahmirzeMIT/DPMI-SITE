import { Box, Button, Typography, Grid } from "@mui/material";
import { CiCircleCheck } from "react-icons/ci";
import Image from '../../assets/images/DALL_E_2024-12-20_10.05.50_-_A_sleek_and_modern_logo_design_representing_Product_Management._The_logo_should_incorporate_an_abstract_yet_professional_depiction_of_collaboration__s-removebg-preview.png'

const FirstCourse = () => {
  return (
    <Box sx={{ padding: "40px", backgroundColor: "#f7f7f7", marginTop: "70px", height: { xs: "150vh", md: "80vh" }, }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "black", mb: 2 }}
          >
             Empowering Product Managers
             <br /> To Build Better Products.
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 4 }}>
          Unlock your potential as a Product Manager with the tools, frameworks, 
  and skills you need to lead teams and deliver exceptional results. 
  Discover strategies that transform ideas into impactful products.
          </Typography>
          <Box sx={{textAlign:'center'}}>
          <Button
                variant="contained"
                sx={{
                    background: "linear-gradient(90deg, #6200EA, #9C27B0)",
                    color: "white",
                    mb: 3,
                    padding: "10px 20px",
                    borderRadius: "25px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textTransform: "none",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                    background: "linear-gradient(90deg, #9C27B0, #6200EA)",
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 15px rgba(98, 0, 234, 0.4)",
                    },
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    
                }}
                >
                <span style={{ fontSize: "18px" }}>Join Now</span>
                </Button>
          </Box>
          

          <Box>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", mb: 1, color: "black" }}
            >
              <CiCircleCheck style={{ color: "#6200EA", marginRight: "5px" }} /> Available All of Regions
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", mb: 1, color: "black" }}
            >
              <CiCircleCheck style={{ color: "#6200EA", marginRight: "5px" }} />  Lifetime Access
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "black" }}
            >
              <CiCircleCheck style={{ color: "#6200EA", marginRight: "5px" }} /> 99.99% Satisfaction
            </Typography>
          </Box>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6}>
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
              src={Image}
              style={{
                width: "60%",
                height: "500px",
                objectFit: "cover",
                borderRadius: "16px",
                zIndex:1
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "-100px",
                left: "20px",
                background:" linear-gradient(90deg, #6200EA, #9C27B0, #000000)",

                color: "white",
                padding: "16px",
                borderRadius: "8px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                maxWidth: "70%",
                zIndex:2
              }}
            >
          <Typography
        variant="body1"
        sx={{
            fontStyle: "italic",
            fontSize: "16px",
            lineHeight: "1.5",
        }}
        >
        "Product managers are the backbone of successful products. They lead cross-functional teams, define strategies, and prioritize features to deliver impactful solutions that meet both customer needs and business goals."
        </Typography>

            <Typography
            variant="body2"
            sx={{
                fontSize: "13px",
            }}
            >
            John Doe: Senior Product Manager
            </Typography>

            
          
            </Box>
            <Box
              sx={{ position: "absolute", top: "30px", right: "150px",height:"450px",width:'300px',zIndex:0,background:'#f0f3fa' }}

            ></Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FirstCourse;
