import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CardData {
  cardData: {
    SkillName: string;
    FkCourseId: number;
  }[];
  title:string
}

export default function HeaderWithCards({ cardData,title }: CardData) {
  const navigate = useNavigate();

  if (!cardData || cardData.length === 0) {
    return (
      <Box
        sx={{
          width: "100vw",
          minHeight: "10vh",
          backgroundColor: "#f9f9f9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: "0.6",
          padding: "20px 0",
        }}
      >
        <Typography
          sx={{
            color: "#F96C23",
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          No data available
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 0",
        top: "60px",
      }}
    >
      {/* Header */}
      <Typography
        sx={{
          color: "#F96C23",
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        {title}
      </Typography>

      {/* Card Section */}
      <Box
        sx={{
          width: "100vw",
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {cardData.map((item) => (
          <Card
            key={item.FkCourseId}
            sx={{
              border: "1px solid #f0f0f0",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                transform: "scale(1.01)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
          >
            <CardContent
              sx={{
                padding: "16px",
                minHeight: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: "18px",
                    whiteSpace: "wrap",
                  }}
                >
                  {item.SkillName}
                </Typography>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Button
                    style={{
                      background: "#F96C23",
                      color: "white",
                      width: "100px",
                      height: "40px",
                      fontSize: "12px",
                    }}
                    onClick={() => {
                      window.open(`/courses/${item.FkCourseId}`, "_blank");
                    }}
                  >
                    Course Info
                  </Button>
                  <Button
                    style={{
                      background: "#1976d2",
                      color: "white",
                      width: "100px",
                      height: "40px",
                      fontSize: "12px",
                    }}
                    onClick={navigate('/classes')}
                  >
                   Find Classes
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
