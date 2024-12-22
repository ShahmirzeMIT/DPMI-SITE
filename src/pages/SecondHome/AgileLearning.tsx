import { Box, Grid, Typography } from "@mui/material";

import AgileCard from "../../componets/AgileCard";

const data = [
  {
    id: 1,
    title: "For Individuals",
    description:"I want to be best in my career",
    button: "Explore Certifications",
  },
  {
    id: 2,
    title: "For Companies",
    description: "We want fastest, measureable applicable AI Transformation",
    button: "Check our Services",
  },
];

const AgileLearning = () => {
  return (
    <Box
      sx={{
        position: "relative", // Background üçün ::before istifadəsinə imkan yaratmaq
        padding: "40px",
        color: "white",
        minHeight:{
          xs:'1350px',
          sm:'900px',
          md:'600px',
          lg:'600px',
          xl:'600px'
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "20px",
        overflow: "hidden", // Background çıxmasın deyə
      }}
    >
      {/* Background şəkil */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to top, gray, white)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // filter: "blur(8px)",
          opacity: 0.6,
          zIndex: 1, // Məzmundan arxada qalması üçün
        }}
      ></div>

      {/* Məzmun */}
      <div style={{ position: "relative", zIndex: 3 }}> {/* Məzmun tünd backgroundun üstündə qalır */}
        <Typography
          variant="h4"
          style={{ marginBottom: "20px", color: "black",fontFamily:" Cabin, sans-serif !important", }}
        >
          Our Certification are  Designed  to accelerate
          <br />
          career growth for individuals and support
          <br />
          companies in building reliable, measureable, and 
          <br />
          practical pathways for <span style={{color:'#fb6b22',fontWeight:'bold'}}>AI Transformation</span>
        </Typography>
      
        <Grid container spacing={3} justifyContent="space-around">
          {data.map((item) => (
            <Grid item xs={12} sm={4} md={4} key={item.id} gap={2}>
              <AgileCard data={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export default AgileLearning;
