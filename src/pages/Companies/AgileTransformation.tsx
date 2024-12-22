import { Box, Button, Typography, Grid } from "@mui/material";
import TransformationImage from '../../assets/images/agileTransformation.jpg'; // Replace with your image path

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
              fontWeight: "bold",
              color: "black",
              mb: 2,
            
            }}
          >
            Fostering Digital/Agile Transformation
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              mb: 4,
            
            }}
          >
            Achieving seamless collaboration between Agile Communication (AC)
            frameworks and cutting-edge AI solutions requires tailored
            strategies. This certification is designed to help individuals and
            organizations overcome transformation barriers. Key topics include:
            building scalable frameworks for agility, integrating AI solutions,
            fostering a communication-first culture, and driving team alignment
            to achieve innovation and growth.
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
            "Empowering Collaboration, Innovation, and Transformation Through Agile and AI Synergy."
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
