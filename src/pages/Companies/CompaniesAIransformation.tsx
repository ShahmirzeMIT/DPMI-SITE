import { Box, Button, Grid, Typography } from "@mui/material";
import Logo from "../../assets/images/aiTransformation.jpg";

export default function CompaniesAIransformation() {

  return (
    <Box
      sx={{
        padding: "40px",
        backgroundColor: "#f7f7f7",
        height: { xs: "auto" },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "400", color: "black", mb: 2 }}
          >
            AI Transformation
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
            Our Al Transformation services offer expert consultation and
            training to help your business integrate artificial intelligence
            effectively. We guide you through understanding Al technologies,
            identifying opportunities for automation, and implementing Al-driven
            strategies that enhance decision-making and drive innovation in your
            operations.
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
      </Grid>
    </Box>
  );
}
