import { Box, Typography, Grid } from "@mui/material";
import logo from '../../assets/images/transformLife.jpg'
import CompaniesCard from "./CompaniesCard";
import { companiesCard } from "../../defaultDatas/compainesCard";
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
           Facing Challenges in Driving{" "}
          <span style={{color:'#fb6b22',fontWeight:'bold',marginRight:'5px'}}>Al Transformation</span>
         and
           Digital/Agile Transformation?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
        Many organizations struggle with aligning Al and Digitalization strategies and Agile practices for measurable outcomes. Let us help you overcome these challenges with structured frameworks and expertise
        </Typography>

        {/* Image and Slogan */}
        <Box sx={{ mb: 4 }}>
          <img
            src={logo}
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
        
            {
              companiesCard.map((card, index) => (
                <CompaniesCard key={index} data={card}/>
              ))
            }
        
        </Grid>
      </Box>
    </Box>
  );
};

export default FosteringDigital;
