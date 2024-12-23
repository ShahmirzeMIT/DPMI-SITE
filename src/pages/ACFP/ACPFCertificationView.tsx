import { Box, Button, Typography, Grid, } from "@mui/material";
import logoImg from "../../assets/images/ProductMaster5.webp";
import { Avatar } from "antd";

export default function CardACPFCertificationView() {
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
            > Agile Communication Practitioner Foundation
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                marginBottom: "20px",
              }}
            >
              The Agile Communication Practitioner Foundation Certification is designed to equip professionals with the skills needed to effectively communicate in agile environments. This program covers key communication strategies, techniques, and tools for collaborating within cross-functional teams. Participants will learn how to facilitate agile ceremonies, manage stakeholder expectations, and adapt communication styles to different project needs. Ideal for project managers, Scrum Masters, and team leaders, this certification helps individuals build stronger communication skills that promote transparency, foster collaboration, and drive successful outcomes in fast-paced, agile projects and organizations
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
