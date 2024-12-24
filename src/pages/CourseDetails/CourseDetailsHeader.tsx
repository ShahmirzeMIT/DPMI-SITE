import { Box, Grid, Typography } from "@mui/material";
import { Avatar } from "antd";
import Logo from "../../assets/images/showAll.jpg";

export default function CourseDetailsHeader() {
  return (
    <div style={{ marginBottom: "60px" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "400", color: "black", mb: 2 }}
          >
            Unlock Your Potential with Our Courses
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              mb: 1,
              fontSize: "18px",
              lineHeight: "27px",
              letterSpacing: "0",
              textAlign: "left",
            }}
          >
            Our courses are designed to provide practical, hands-on experience
            and industry-relevant knowledge. Each program is tailored to equip
            you with the skills needed to thrive in today's competitive digital
            landscape. With a focus on real-world applications and interactive
            learning, you'll gain the confidence to tackle challenges in your
            field. Whether you're starting your career or aiming to enhance your
            expertise, our programs are your gateway to success.
          </Typography>
         
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6} display={{ xs: "none", md: "block" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Avatar
              src={Logo}
              style={{ maxWidth: "580px", height: "auto", width: "100%" }}
              shape="square"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
