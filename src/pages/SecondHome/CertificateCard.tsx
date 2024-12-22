import { Box, Button, Typography } from "@mui/material";
// import { Avatar } from "antd";
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
        padding: "40px",
        maxWidth: "350px",
        width: "550px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        borderRadius: "5px",
        position: "relative",
      
      }}
    >
        <img
          style={{
            width: "100%",
            height: "150px",
            // margin: "0 auto",
            // display: "block",
          }}
          src={data.image}
          // shape="square"
        />
      <Typography
        variant="h4"
        sx={{
          color: "rgb(251, 107, 34)",
          textDecoration: "underline",
          fontSize: "20px",
          fontWeight: "600",
          textAlign: "start",
          marginBottom:'40px'
        }}
      >
        {data.title}
      </Typography>

      
      <Box sx={{ marginTop: "30px",position:'absolute',bottom:'30px' }}>
        <Button
          sx={{
            marginRight: "20px",
            padding: "5px 20px",
            background: "rgb(251, 107, 34)",
            color: "white",
            "&:hover": { background: "white", color: "#fb1201", border: "1px solid #fb1201" },
          }}
         
        >
         Register
        </Button>
        <Button
          sx={{
            padding: "5px 20px",
            color: "#fb1201",
            border: "1px solid rgb(251, 107, 34)",
            "&:hover": { background: "rgb(251, 107, 34)", color: "white" },
          }}
          onClick={handleNavigate} // Read More düyməsinə kliklədikdə yönləndirəcək
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
}
