import { Box, Button, Typography, Grid, } from "@mui/material";
import logoImg from "../../assets/images/sfp.jpeg";
import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";
interface ProductCardProps {
  data:{
    title: string
    text: string
    links:string
    enroll:string
    image:string
  }
}
export default function ProductManagerCourseView({data}:ProductCardProps) {
  
  const navigate=useNavigate()
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
            shape="square"
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
                fontSize:'36px'
              }}
            > {data.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                marginBottom: "20px",
                fontSize:'18px'
              }}
            >
              {data.text}
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
                onClick={() => navigate(data.links)}
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
                onClick={() => navigate(data.enroll)}
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
