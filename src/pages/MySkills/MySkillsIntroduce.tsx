import { Box, Typography } from "@mui/material";
import logo from "../../assets/images/challangesLogo.jpeg";
const MySkillsIntroduce = () => {
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
          Small steps, big skills, endless possibilities with{" "}
          <span
            style={{ color: "#fb6b22", fontWeight: "bold", marginRight: "5px" }}
          >
            Our Courses
          </span>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 ,textAlign:'center'}}>
          At our courses, we believe that every great journey with begins a
          single step. Designed to be accessible and engaging, our programs
          guide you through practical, step-by-step learning that builds real,
          impactful skills. Whether you're starting from scratch or advancing
          your knowledge, our courses provide the tools and support you need to
          grow. With us, small efforts lead to big results, unlocking endless
          opportunities for your future.
        </Typography>

        {/* Image and Slogan */}
        <Box sx={{ mb: 4 }}>
          <img
            src={logo}
            alt="Agile Transformation"
            style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MySkillsIntroduce;
