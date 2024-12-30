import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CardData {
  cardData: {
    SkillName: string;
    FkCourseId: number;
  }[];
  title: string;
  handleClose: () => void;
}

export default function HeaderWithCards({ cardData, title, handleClose }: CardData) {
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
          padding: "0",
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
        width: "85vw",
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "70px 90px",
        maxWidth:'1200px',
        margin: "0 auto",
        maxHeight: "75vh",
        overflowY: "scroll",
        position: "relative",
      }}
    >
      {/* Fixed Header within the Box */}
      <Box
        sx={{
          textAlign: "end",
          width: "110%", // Matches the parent Box width
          position: "sticky", // Sticky within the scrollable container
          top: "0%",
          background: "transparent",
          zIndex: "1000",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "0 10px",
          // right:'-100%'
        }}
      >
        <Button
          style={{
            background: "#d32f2f",
            color: "white",
            fontSize: "16px",
          }}
          onClick={handleClose}
        >
          X
        </Button>
      </Box>

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
          width: "100%",
          maxWidth: "80vw",
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
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap", // Ensures wrapping on smaller screens
                  gap: "10px", // Adds spacing between wrapped items
                }}
              >
                {/* Skill Name */}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: "18px",
                    flex: "1", // Allows the title to grow/shrink appropriately
                  }}
                >
                  {item.SkillName}
                </Typography>

                {/* Buttons */}
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
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
                    sx={{
                      background: "#1976d2",
                      color: "white",
                      width: "100px",
                      height: "40px",
                      fontSize: "12px",
                    }}
                    onClick={() => {
                      navigate("/classes");
                    }}
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
