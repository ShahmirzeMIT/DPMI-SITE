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
        flexDirection: "column", // Elementləri alt-alta düzür
        alignItems: "center",
        justifyContent: "center",
        minHeight: "600px",
        overflow: "hidden",
        maxWidth:'1300px',
        margin: '0 auto',
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
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          zIndex: 1,
        }}
      ></Box>

      {/* Content */}
      <Box
        sx={{
          zIndex: 2,
          textAlign: "center",
          display: "flex",
          flexDirection: "column", // Alt-alta düzülmə
          alignItems: "center",
          maxWidth: "1300px", // Maksimum genişlik sabit qalır
        }}
      >
        {/* Problem Statement */}
        <Typography
          variant="h4"
          sx={{
            color: "#fb6b22",
            fontWeight: "400",
            marginBottom: "20px",
            fontSize: "48px", // Font ölçüsü sabit qalır
            display: "block",
          }}
        >
          Transform Challenges into Skills.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            textAlign: "center",
            fontSize: "18px", // Font ölçüsü sabit qalır
            lineHeight: "32px",
            letterSpacing: "0",
          }}
        >
          Identify your challenges in Digital Transformation, AI Transformation,
          Agile Transformation, and Digital Product Management. Access
          personalized skills and courses to drive your growth, stay competitive
          in a fast-paced world, and lead the future of innovation.
        </Typography>

        {/* Image */}
        <Box>
          <img
            src={logo}
            alt="Agile Transformation"
            style={{
              maxWidth: "100%",
              minHeight:'200px', // Şəkil genişliyi ekran ölçüsünə uyğunlaşır
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MyNeedsIntroduce;
