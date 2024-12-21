import { Box, Button, Typography, Grid } from "@mui/material";
import Logo from '../../assets/images/starttup.jpg'
const FirstCourse = () => {
  return (
    <Box sx={{ padding: "40px", backgroundColor: "#f7f7f7",  height: { xs: "auto", md: "85vh" }, }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "black", mb: 2 }}
          >
           Build Strong Foundations, 
             <br /> Ignite Startup Success!
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 4 }}>
             The Startup Foundation Practitioner Certification is designed for professionals who want to gain practical skills in building and scaling startups. It covers key areas like business model design, market validation, customer acquisition, and lean methodologies. This certification equips individuals with the tools and knowledge to lead startup projects, make data-driven decisions, and adapt quickly in dynamic environments, empowering them to thrive in the competitive startup ecosystem. Perfect for entrepreneurs, intrapreneurs, and those aspiring to work in fast-paced startup environments.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center",justifyContent: "center"}}>
          <Button
                variant="contained"
                sx={{
                    background: "linear-gradient(90deg, #fb6b22, #2a74b3)", // Updated gradient
                    color: "white",
                    mb: 3,
                    padding: "10px 20px",
                    borderRadius: "25px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textTransform: "none",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                        background: "linear-gradient(90deg, #2a74b3, #fb6b22)", // Updated hover gradient
                        transform: "scale(1.05)",
                        boxShadow: "0 4px 15px rgba(251, 107, 34, 0.4)", // Matching hover box shadow
                    },
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                }}
            >
                <span style={{ fontSize: "18px" }}>For More</span>
            </Button>

          </Box>
          

        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6} display={{ xs: "none", md: "block" }}>
        <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            //   overflow: "hidden",
              borderRadius: 4,
            }}
          >
            <img
              alt="User Testimonial"
              src={Logo}
              style={{
                width: "90%",
                height: "500px",
                objectFit: "cover",
                // borderRadius: "16px",
                zIndex:1
              }}
            />

         
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FirstCourse;
