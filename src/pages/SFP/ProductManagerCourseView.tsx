import { Box, Button, Typography, Grid } from "@mui/material";
// import logoImg from "../../assets/images/sfp.jpeg";
import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";
interface ProductCardProps {
  data: {
    title: string;
    text: string;
    links: string;
    enroll: string;
    image: string;
  };
}
export default function ProductManagerCourseView({ data }: ProductCardProps) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#F9FAFC",
        padding: "40px 10%",
        marginTop: { xs: "40px", md: "120px"},
      }}

    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Left Section */}
        <Grid item xs={12} md={6} sx={{ textAlign: "start" }}>
          <Avatar
            src={data.image}
            alt="Certification Logo"
            style={{ width: "100%", height: "auto", maxWidth: "350px" }}
            shape="square"
          />
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "400",
                color: "#0E1C36",
                marginBottom: "10px",
                fontSize: "36px",
                textAlign: "left",
              }}
            >
              {" "}
              {data.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                marginBottom: "20px",
                fontSize: "18px",
                textAlign: "left",
              }}
            >
              {data.text}
            </Typography>

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                marginTop: "30px",
              }}
            >
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
                href="#courses"
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
