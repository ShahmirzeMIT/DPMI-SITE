import { Box, Typography, Grid, Button } from "@mui/material";

const FosteringDigital = () => {
  return (
    <Box
      sx={{
        position: "relative",
        padding: "40px",
        backgroundColor: "#f5f5f5",
        color: "#333",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "600px",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url('https://via.placeholder.com/1920x1080.png?text=Corporate+Consultation')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          zIndex: 1,
        }}
      ></Box>

      {/* Content */}
      <Box sx={{ zIndex: 2, textAlign: "center", maxWidth: "800px" }}>
        {/* Problem Statement */}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Facing Challenges in Driving Digital Transformation?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Many organizations struggle with aligning Agile practices and AI
          strategies for measurable outcomes. Let us help you overcome these
          challenges with structured frameworks and expertise.
        </Typography>

        {/* Image and Slogan */}
        <Box sx={{ mb: 4 }}>
          <img
            src="https://via.placeholder.com/600x300.png?text=Transform+Your+Future"
            alt="Agile Transformation"
            style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }}
          />
          <Typography
            variant="h6"
            sx={{
              fontStyle: "italic",
              fontWeight: "bold",
              color: "#fb6b22",
              mt: 2,
            }}
          >
            "Accelerate Transformation with Agile Communication and AI."
          </Typography>
        </Box>

        {/* Key Services */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                textAlign: "center",
                transition: "transform 0.3s ease-in-out",
                '&:hover': {
                  transform: "scale(1.05)",
                }
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                Digital/Agile Transformation
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Enable measurable business agility with custom frameworks.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "capitalize" }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                textAlign: "center",
                transition: "transform 0.3s ease-in-out",
                '&:hover': {
                  transform: "scale(1.05)",
                }
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                AI Practitioner Guidance
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Implement AI strategies to streamline operations and improve
                decision-making.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "capitalize" }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                textAlign: "center",
                transition: "transform 0.3s ease-in-out",
                '&:hover': {
                  transform: "scale(1.05)",
                }
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                Agile Communication Culture
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Build collaborative teams with a strong communication ethos.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "capitalize" }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FosteringDigital;
