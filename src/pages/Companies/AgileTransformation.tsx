import { Box, Button, Typography, Grid } from "@mui/material";
import TransformationImage from "../../assets/images/agileTransformation.jpg"; // Replace with your image path

const AgileTransformation = () => {
  return (
    <Box
      sx={{
        padding: "40px",
        backgroundColor: "#f7f7f7",
        height: { xs: "auto", md: "85vh" },
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
            Agile Transformation
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
            Our Agile Transformation services help businesses transition to
            Agile methodologies to improve team collaboration, flexibility, and
            speed. Through consultation and tailored training, we guide you in
            implementing Agile frameworks such as Scrum and Kanban, ensuring
            your team can deliver projects with greater efficiency and
            responsiveness.
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
              alt="Digital Transformation"
              src={TransformationImage}
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
};

export default AgileTransformation;
