import { Box, Typography } from "@mui/material";
import logo from "../../assets/images/myChallangesLogo.jpg";
const MyNeedsIntroduce = () => {
  return (
    <Box
      sx={{
        position: "relative",
        padding: "40px",
        backgroundColor: "white",
        color: "#333",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "600px",
        overflow: "hidden",
        // width:'1200px',
        // margin:'0 auto'
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
          // backgroundImage:
          //   "url('https://via.placeholder.com/1920x1080.png?text=Corporate+Consultation')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          zIndex: 1,
        }}
      ></Box>

      {/* Content */}
      <Box sx={{ zIndex: 2, textAlign: "center" }}>
        {/* Problem Statement */}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          <span
            style={{ color: "#fb6b22", fontWeight: "400", marginRight: "5px" ,fontSize:'48px'}}
          >
            Transform Challenges into Skills.

          </span>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 ,textAlign:'center',maxWidth:'800px',margin:'20px auto',fontSize:'18px',lineHeight:'32px',letterSpacing:'0'}}>
        Identify your challenges in Digital Transformation, AI Transformation, Agile Transformation, and Digital Product Management. Access personalized skills and courses to drive your growth, stay competitive in a fast-paced world, and lead the future of innovation
        </Typography>

        {/* Image and Slogan */}
        <Box sx={{ }}>
          <img
            src={logo}
            alt="Agile Transformation"
            style={{ maxWidth: "1200px", borderRadius: "8px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MyNeedsIntroduce;
