import { Box, Button, Typography } from "@mui/material";
import { Avatar } from "antd";
// import { useNavigate } from "react-router-dom"; // Yönləndirmək üçün lazım olan hook

interface ProductCardProps {
  data: {
    id: string; // Kursun ID-sini əlavə edin
    title: string;
    description?: string;
    learnMoreLink?: string;
    image: string;
  };
}

export default function CertificateCard({ data }: ProductCardProps) {
//   const navigate = useNavigate(); // useNavigate hook-u import edilir

  // Kursun səhifəsinə yönləndirmək üçün funksiya
  const handleNavigate = () => {
    // navigate(`/courses/${data.id}`);
  };

  return (
    <Box
      sx={{
        maxWidth: "350px",
        width: "550px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        borderRadius: "5px",
        position: "relative",
        height: "390px",
      
      }}
    >
        <Avatar
          style={{
            width: "100%",
            height: "auto",
            margin: "0 auto",
            display: "block",
            // marginL
          }}
          src={data.image}
          shape="square"
        />
      <Typography
        variant="h4"
        sx={{
          color: "#1976d2",
          textDecoration: "underline",
          fontSize: "20px",
          fontWeight: "600",
          textAlign: "start",
          marginBottom:'40px',
          marginLeft:'15px'
        }}
      >
        {data.title}
      </Typography>

      
      <Box sx={{ position:'absolute',bottom:'20px',left:'0',marginLeft:'15px' }}>
        <Button
          sx={{
            marginRight: "20px",
            padding: "5px 20px",
            background: "#1976d2",
            color: "white",
            "&:hover": { background: "white", color: "#1976d2", border: "1px solid #1976d2" },
          }}
         
        >
         Register
        </Button>
        <Button
          sx={{
            padding: "5px 20px",
            color: "#1976d2",
            border: "1px solid #1976d2",
            "&:hover": { background: "#1976d2", color: "white" },
          }}
          onClick={handleNavigate} // Read More düyməsinə kliklədikdə yönləndirəcək
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
}
