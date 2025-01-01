import { Box, Button, Typography } from "@mui/material";
import Logo from "../../assets/images/firstBgAgile.jpeg";
import { useNavigate } from "react-router-dom";
//
export default function AILearn() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        // position: "absolute",
        // top: 0,
        // left: 0,
        width: "100%",
        // height: "500px",
        backgroundImage: `url(${Logo})`,
        // background: "linear-gradient(to bottom, #c8c8c8, white)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: "120px",
        padding: "60px 0",
      }}
    >
      <Typography
        variant="h4"
        style={{
          color: "black",
          fontSize: "48px",
          lineHeight: "56px",
          letterSpacing: "0",
          maxWidth: "1000px",
          margin:'0 auto 1.5rem auto'
        }}
      >
        Gather <span style={{ color: "#fb6b22", fontWeight: "bold" }}>
        New Skills
        </span>  by Applying Your Knowledge on Real-World Projects through Our {" "}
        <br />
        <span style={{ color: "#fb6b22", fontWeight: "bold" }}>
          AI-Simulation Learning Platform
        </span>{" "}
        {/* <span style={{ color: "#fb6b22", fontWeight: "bold" }}>
          AI-Simulation Learning
        </span>
        <br />
        <span
          style={{ color: "#fb6b22", fontWeight: "bold", marginRight: "5px" }}
        >
          Platform
        </span>{" "}
        that lets you apply{" "}
        <span
          style={{
            color: "#fb6b22",
            fontWeight: "bold",
            marginLeft: "5px",
            marginRight: "5px",
          }}
        >
          100%
        </span>{" "}
        of your
        <br />
        knowledge on the real-world projects. */}
      </Typography>
      <Typography
        sx={{
          color: "black",
          fontSize: "21px",
          fontWeight: "400",
          textAlign: "center",
          marginLeft: "70px",
          lineHeight: "25px",
          paddingBottom: "60px",
          maxWidth: "700px",
          margin: "0 auto",
          whiteSpace: "wrap",
        }}
      >
        AI Simulator, AI Mentor, Live Mentorship, Comprehensive Guidelines,
        Video Tutorials, Gamified Learning, and Project Sharing.
      </Typography>
   
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
         <Button
        variant="contained"
        sx={{
          backgroundColor: "#fb6b22",
          color: "white",
          padding: {xs:"10px 10px",md:"10px 70px"},
          marginBottom: "70px",
          marginLeft:'10px'
        }}
        onClick={() => navigate("/mychallanges")}
      >
        Discover My Challenges
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#2A73B3",
          color: "white",
          padding: {xs:"10px 10px",md:"10px 70px"},
          marginBottom: "70px",
          marginLeft:'10px'
        }}
        onClick={() => navigate("/myskills")}
      >
        Discover My Skills
      </Button>
      </Box>
     
    </Box>
  );
}
