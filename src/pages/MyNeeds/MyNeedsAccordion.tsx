import { Box, Typography, Card, CardContent, Button } from "@mui/material";

export default function HeaderWithCards() {
  // Example card data
  const cardData = [
    {
      id: "1",
      title: "Tələbin 1",
      content: "Bu, 1-ci tələbin geniş məzmunudur.",
    },
    {
      id: "2",
      title: "Tələbin 2",
      content: "Bu, 2-ci tələbin geniş məzmunudur.",
    },
    {
      id: "3",
      title: "Tələbin 3",
      content: "Bu, 3-cü tələbin geniş məzmunudur.",
    },
  ];

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
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          gap: "20px", // Space between cards
        }}
      >
        {cardData.map((item) => (
          <Card
            key={item.id}
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
              <Box sx={{ display: "flex", justifyContent: "space-between" ,alignItems:'center'}}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#333", // Dark text color for title
                    //   marginBottom: "8px",
                    fontSize: "18px",
                  }}
                >
                  {item.title}
                </Typography>
                <Button style={{background:'#1976d2',color:'white'}}>More Info</Button>
              </Box>

              {/* More button */}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
