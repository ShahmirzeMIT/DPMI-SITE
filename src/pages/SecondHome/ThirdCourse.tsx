import { Box, Button, Typography, Grid } from "@mui/material";
import Logo from '../../assets/images/Aicertification.jpg'

const ThirdCourse = () => {
  return (
    <Box sx={{ padding: "40px", backgroundColor: "#f7f7f7",  height: { xs: "auto", md: "80vh" }, }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "black", mb: 2 }}
          >
         Master the Future of Technology with 
             <br /> AI Expertise and Real-World Impact
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 4 }}>
          The AI Practitioner Certification is designed for professionals looking to deepen their understanding and practical skills in Artificial Intelligence (AI) technologies. This certification offers a comprehensive curriculum that covers the fundamentals of AI, including machine learning, deep learning, natural language processing (NLP), computer vision, and data analytics. It provides hands-on experience with AI tools and techniques, enabling learners to build, deploy, and optimize AI models in real-world scenarios
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

export default ThirdCourse;
