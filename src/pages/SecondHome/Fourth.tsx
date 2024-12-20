import { Box, Button, Typography, Grid } from "@mui/material";
import { CiCircleCheck } from "react-icons/ci";

const FourthCourse = () => {
  return (
    <Box sx={{ padding: "40px", backgroundColor: "#f7f7f7",  height: { xs: "150vh", md: "80vh" },borderTop:'1px solid #e0e0e0' }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
      

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
              src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
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
                bottom: "20px",
                left: "20px",
                backgroundColor: "rgba(74, 0, 224, 0.9)",
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Charlotte Hale
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "13px",
                }}
              >
                Delos Inc.
              </Typography>
            
          
            </Box>
            <Box
            //   src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              
            //   shape="square"
              sx={{ position: "absolute", top: "30px", right: "50px",height:"550px",width:'300px',zIndex:0,background:'#f0f3fa' }}

            ></Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "#4A00E0", mb: 2 }}
          >
            Better, Faster and
            <br /> Cheaper Cloud.
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 4 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#6200EA", color: "white", mb: 3 }}
          >
            Get Started
          </Button>
          <Box>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", mb: 1, color: "black" }}
            >
              <CiCircleCheck style={{ color: "#6200EA", marginRight: "5px" }} /> Available in 7 Locations
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", mb: 1, color: "black" }}
            >
              <CiCircleCheck style={{ color: "#6200EA", marginRight: "5px" }} /> Premium Internet Backbone
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", color: "black" }}
            >
              <CiCircleCheck style={{ color: "#6200EA", marginRight: "5px" }} /> 99.99% Uptime SLA
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FourthCourse;
