import { Box, Button, Typography, Grid, } from "@mui/material";
import logoImg from "../../assets/images/ProductMarketer2.webp";
import { Avatar } from "antd";

export default function DPMCourseViewCard() {
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
            > Digital Product Manager
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                marginBottom: "20px",
              }}
            >
           The Digital Product Manager Certification is designed for professionals seeking to master the art of managing digital products in today’s fast-paced, tech-driven market. This program covers key areas such as product strategy, user experience (UX), agile methodologies, and data-driven decision-making. Participants will learn how to define product visions, prioritize features, create roadmaps, and lead cross-functional teams. Whether you're looking to build new digital products or optimize existing ones, this certification equips you with the skills and knowledge to deliver impactful product outcomes, making you a valuable asset in the digital landscape.
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
