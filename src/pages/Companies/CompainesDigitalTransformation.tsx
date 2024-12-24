import { Box, Button, Grid, Typography } from "@mui/material";
import Logo from "../../assets/images/digitalTransformation.png";

export default function CompainesDigitalTransformation() {
  return (
    <Box
      sx={{
        padding: "40px",
        backgroundColor: "white",
        height: { xs: "auto" },
        borderTop: "1px solid #e0e0e0",
      }}
    >
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
                zIndex: 1,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "400", color: "black", mb: 2 }}
          >
            Digital Transformation
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
            We provide comprehensive consultation and training to help
            businesses embrace digital technologies and optimize operations. Our
            services cover everything from cloud adoption and automation to
            data-driven strategies, ensuring your organization remains
            competitive and agile in the digital era.
          </Typography>

          <Box sx={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#2a74b1",
                color: "white",
                padding: "10px 70px",
              }}
               href="mailto:info@dpminstitute.org"
            >
              Contact Us
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
