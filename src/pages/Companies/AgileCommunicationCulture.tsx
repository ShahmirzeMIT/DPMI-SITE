import { Box, Button, Typography, Grid } from "@mui/material";
import AgileCommunicationImage from '../../assets/images/agileComunication.jpg'; // Replace with your image path

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
              fontWeight: "bold",
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
             
            }}
          >
            Establishing a culture of effective communication is vital for
            agile-driven companies. This certification is designed to help
            organizations break silos, foster transparency, and create a
            communication-first environment. Learn how to promote seamless
            collaboration across teams, eliminate inefficiencies, and align
            everyone toward common business objectives. 
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
            "Transform Communication Barriers Into Bridges for Growth and Innovation."
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
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AgileCommunicationCulture;
