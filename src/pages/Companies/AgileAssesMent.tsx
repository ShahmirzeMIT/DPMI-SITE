import { Box, Button, Typography, Grid } from "@mui/material";
import StartupImage from "../../assets/images/agileCulture.jpg"; // Replace with your image path

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
                fontWeight: "400",
                color: "black",
                mb: 2,
              }}
            >
              Agile Communication Culture
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                mb: 4,
                fontSize: "22px",
              lineHeight: "37px",
              letterSpacing: "0",
              maxWidth: "600px",
              textAlign: "center",
              }}
            >
              
              Our Agile Communication Culture services teach organizations how
              to foster a collaborative environment where communication is
              clear, efficient, and effective. We provide both consultation and
              training to help your team eliminate communication barriers,
              reduce non-value-adding meetings, and enhance cross-functional
              collaboration for faster, more successful
            </Typography>

            <Box sx={{ marginTop: "20px" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#fb6b22",
                  color: "white",
                  padding: "10px 70px",
                }}
                 href="mailto:info@dpminstitute.org"
              >
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
