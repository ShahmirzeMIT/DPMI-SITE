import { Box, Button, Typography, Grid } from "@mui/material";
import StartupImage from '../../assets/images/alumni.jpg'; // Replace with your image path

const AgileAssesMent = () => {
  return (
    <>

      {/* Startup Acceleration and Incubation Center Section */}
      <Box
        sx={{
          padding: "40px",
          backgroundColor: "white",
          height: { xs: "auto", md: "85vh" },
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Side */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "black",
                mb: 2,
                
              }}
            >
              Startup Acceleration & Incubation Center
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                mb: 4,
                
              }}
            >
              Accelerate your startup's growth with expert mentoring,
              cutting-edge resources, and a collaborative ecosystem. From
              ideation to execution, this center supports entrepreneurs in
              market research, MVP development, funding strategies, and
              preparing for scalability. Join a community of innovators and turn
              your vision into reality.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontStyle: "italic",
                fontWeight: "bold",
                color: "#fb6b22",
                mb: 4,
                
              }}
            >
              "Fueling Dreams, Accelerating Success, Empowering Entrepreneurs."
            </Typography>
            <Box sx={{ marginTop: "20px" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#fb6b22",
                  color: "white",
                  padding: "10px 70px",
                  
                }}
              >
                Learn More
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
                borderRadius: 4,
              }}
            >
              <img
                alt="Startup Acceleration"
                src={StartupImage}
                style={{
                  width: "90%",
                  height: "500px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AgileAssesMent;
