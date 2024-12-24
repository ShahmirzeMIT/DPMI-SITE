import { Box, Button, Typography, Grid } from "@mui/material";
import AgileCommunicationImage from "../../assets/images/DigitalProduct.png";

const AgileCommunicationCulture = () => {
  return (
    <Box
      sx={{
        padding: "40px",
        backgroundColor: "white",
        height: { xs: "auto", md: "80vh" },
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Grid container spacing={4} alignItems="center">
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
              alt="Agile Communication Culture"
              src={AgileCommunicationImage}
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
            Digital Product Managment
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              mb: 4,
            }}
          >
            We offer expert consultation and training to help your team manage
            digital products from concept to launch. Our services focus on
            practical skills in product strategy, backlog management, and
            project delivery, enabling you to effectively align business
            objectives with product outcomes and accelerate time- to-market.
          </Typography>

          <Box sx={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#2a74b1",
                color: "white",
                padding: "10px 70px",
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AgileCommunicationCulture;
