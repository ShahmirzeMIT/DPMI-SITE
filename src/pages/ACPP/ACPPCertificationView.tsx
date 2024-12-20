import { Box, Button, Typography, Grid, } from "@mui/material";
import logoImg from "../../assets/images/ProductMaster5.webp";
import { Avatar } from "antd";

export default function ACPPCertificationView() {
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
            >Agile Communication Practitioner Proffesional
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                marginBottom: "20px",
              }}
            >
             The Agile Communication Practitioner Professional Certification is designed for experienced professionals seeking to enhance their communication expertise in agile environments. This advanced program focuses on mastering communication techniques for complex, high-stakes projects. Participants will learn how to lead cross-functional teams, manage stakeholder expectations, and drive alignment across diverse teams and departments. The course delves into advanced agile communication practices, conflict resolution, and strategies for fostering collaboration in fast-paced, evolving projects. Ideal for senior project managers, Scrum Masters, and agile coaches, this certification prepares professionals to effectively navigate and communicate in complex, agile-driven organizations
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
