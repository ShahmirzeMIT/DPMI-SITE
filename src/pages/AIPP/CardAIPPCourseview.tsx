import { Box, Button, Typography, Grid, } from "@mui/material";
import logoImg from "../../assets/images/AIProductExpert4.webp";
import { Avatar } from "antd";

export default function CardAIPPCertificationView() {
  return (
    <Box
      sx={{
        backgroundColor: "#F9FAFC", 
        padding: "40px 10%",
        marginTop:'120px'
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Avatar
            src={logoImg}
            alt="Certification Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#0E1C36",
                marginBottom: "10px",
              }}
            > AI Practitioner Proffesional 
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                marginBottom: "20px",
              }}
            >
              The AI Practitioner Professional Certification is designed for professionals who want to deepen their expertise in Artificial Intelligence (AI) and advance their careers in AI-driven roles. This program builds on foundational AI knowledge and dives deeper into advanced topics such as deep learning, neural networks, computer vision, and AI deployment. Participants will gain hands-on experience with real-world AI applications, learning to design, implement, and optimize AI solutions. Ideal for data scientists, engineers, and AI professionals, this certification equips you with the skills and confidence to lead AI projects and drive innovation in complex, data-driven environments
            </Typography>

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: "15px" }}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#0E1C36",
                  color: "#0E1C36",
                  padding: "10px 20px",
                  "&:hover": {
                    backgroundColor: "#0E1C36",
                    color: "white",
                  },
                }}
              >
                View Courses
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#F16529", // Orange color
                  color: "white",
                  padding: "10px 20px",
                  "&:hover": {
                    backgroundColor: "#d9531e",
                  },
                }}
              >
                Enroll Now
              </Button>
            </Box>

            {/* Bottom Note */}
            <Typography
              variant="caption"
              sx={{ display: "block", marginTop: "10px", color: "#333" }}
            >
              * Use code <b>CERT10</b> at checkout to save <b>10%</b> off all
              three courses.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
