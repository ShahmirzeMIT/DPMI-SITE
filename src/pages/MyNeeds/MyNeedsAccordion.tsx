import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import {useNavigate} from 'react-router-dom'
interface CardData {
  cardData: {
    SkillName: string;
    FkCourseId: number;
  }[];
}

export default function HeaderWithCards({ cardData }: CardData) {
  const navigate=useNavigate()
  if (!cardData || cardData.length === 0) {
    return (
      <Box
        sx={{
          width: "99vw", // Full viewport width
          minHeight: "10vh", // Full viewport height
          backgroundColor: "#f9f9f9", // Light background
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        <Typography
          sx={{
            color: "#F96C23", // Orange text color for the header
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
        width: "99vw", // Full viewport width
        minHeight: "10vh", // Full viewport height
        backgroundColor: "#f9f9f9", // Light background
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 0",
      }}
    >
      {/* Header */}
      <Typography
        sx={{
          color: "#F96C23", // Orange text color for the header
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Proqramlaşdırma Komandası ilə Ünsiyyət
      </Typography>

      {/* Card Section */}
      <Box
        sx={{
          width: "90%",
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          gap: "20px", // Space between cards
        }}
      >
        {cardData.map((item) => (
          <Card
            key={item.FkCourseId} // Burada hər bir kart üçün unikal açar
            sx={{
              border: "1px solid #f0f0f0", // Border for cards
              borderRadius: "8px", // Rounded corners
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow
              "&:hover": {
                transform: "scale(1.01)", // Subtle hover effect
                transition: "transform 0.3s ease-in-out",
              },
            }}
          >
            <CardContent
              sx={{
                padding: "16px", // Adjust padding to match accordion
                minHeight: "10px", // Ensure consistent height
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
                    color: "#333", // Dark text color for title
                    fontSize: "18px",
                    whiteSpace: "wrap",
                    // minWidth: "90%",
                  }}
                >
                  {item.SkillName} {/* Kartın başlığını göstər */}
                </Typography>
                <Box sx={{display:'flex',gap:'10px'}}>
                  <Button
                  style={{
                    background: "#F96C23",
                    color: "white",
                    width: "100px",
                    height: "40px",
                    fontSize:'12px'
                  }}
                  onClick={()=>{
                    navigate(`/courses/${item.FkCourseId}`)
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
                     fontSize:'12px'
                  }}
                >

                  More Info
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
