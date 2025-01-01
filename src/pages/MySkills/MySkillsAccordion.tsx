import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useState } from "react";

interface CardData {
  cardData: {
    ChallengeName: string;
    FkCourseId: number;
    Id: number;
  }[];
  title: string;
  handleClose: () => void;
}

export default function MySkillsAccordion({
  cardData,
  title,
  // handleClose,
}: CardData) {

  const [hoveredCard, setHoveredCard] = useState<number | null>(null); // Individual hover state

  
  if (!cardData || cardData.length === 0) {
    return (
      <></>
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
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
     
      <Box sx={{ background: "white",width:"80vw",padding:'10px'}}>
  
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

      <Box
        sx={{
          width: "100%",
          maxWidth: "80vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {cardData.map((item, index) => (
          <Card
            key={item.FkCourseId}
            sx={{
              border: "1px solid #f0f0f0",
              borderRadius: "8px",
              boxShadow: "none",
              "&:hover": {
                transform: "scale(1.01)",
                transition: "transform 0.3s ease-in-out",
              },

              padding: "2px !important",
              position: "relative",
            }}
            onMouseEnter={() => setHoveredCard(index)} // Hover başladığında kartın Id-si set edilir
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardContent
              sx={{
                padding: "2px !important",
                "&:last-child": {
                  paddingBottom: "5px !important",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  padding: "0",
                  margin: "0",
                }}
              >
                <Typography
                  sx={{
                    padding: "0",
                    margin: "0",
                    fontWeight: "400",
                    color: "#333",
                    fontSize: "18px",
                    flex: "1",
                  }}
                >
                  {item.ChallengeName}
                </Typography>

                <Box
                  sx={{
                    display: hoveredCard === index ? "flex" : "none", // Hover edilən kartın düymələrini göstər
                    gap: "10px",
                  }}
                >
                  <Button
                    style={{
                      background: "#F96C23",
                      color: "white",
                      width: "100px",
                      height: "30px",
                      fontSize: "12px",
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // Parent klik hadisəsini blokla
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
                      height: "30px",
                      fontSize: "12px",
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // Parent klik hadisəsini blokla
                      window.open(`/classes`, "_blank");
                    }}
                  >
                    Register
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      </Box>
  
    </Box>
  );
}
