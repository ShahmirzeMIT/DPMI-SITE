import { Box, Button, Typography, Grid } from "@mui/material";
import Logo from '../../assets/images/Aicertification.jpg'
import { useNavigate } from "react-router-dom";

const ThirdCourse = () => {
  const navigate=useNavigate()
  return (
    <Box sx={{ padding: "40px", backgroundColor: "#f7f7f7",  height: { xs: "auto" }, }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "400", color: "black", mb: 2,fonrSize:'48px',textAlign:'center' }}
          >
            AI Practitioner
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 4, fontSize:'18px' ,lineHeight:'27px',letterSpacing:'0'}}>
          Individuals who want to develop themselves in AI Transformation, the future of the business world, and add significant value to their companies can apply for this program. Companies that have started their AI Transformation journey can also direct their employees to this interactive certification training. It covers topics such as AI fundamentals, Generative AI, building AI systems, their impact on business, sales, niche segmentation, and more.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center",justifyContent: "center"}}>
          <Button variant="contained" sx={{ backgroundColor: '#fb6b22', color: 'white', padding: {xs:"10px 20px",md:"10px 70px"}, }} onClick={() => navigate('/certificates/1004')}>
              View Fundamental Level
          </Button>

          </Box>
          <Box sx={{marginTop:'20px'}}>
          <Button variant="contained" sx={{ backgroundColor: '#2a74b1', color: 'white', padding: {xs:"10px 20px",md:"10px 70px"}, }} onClick={() => navigate('/certificates/1005')}>
              View Professional Level
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
                borderRadius: "16px",
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
