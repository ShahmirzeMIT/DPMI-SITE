import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useState } from "react";
import PointText from "../../componets/PointText";

interface CardData {
  cardData: {
    SkillName: string;
    FkCourseId: number;
    Id: number;
  }[];
  title: string;
  handleClose: () => void;
}

export default function HeaderWithCards({
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
    width: { xs: "80vw", sm: "85vw", md: "95vw",lg:"100vw" }, // Responsive genişlik
    maxWidth: "1240px",
    backgroundColor: "#f9f9f9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: { xs: "20px 10px", sm: "30px 20px", md: "40px 40px" }, // Responsive padding
    margin: "0 auto",
    height: "auto", // Yükseklik ekrana uygun ayarlanır
    overflow: "hidden",
  }}
>
  <Box
    sx={{
      background: "white",
      width: "100%",
      maxWidth: "1240px",
      padding: "10px",
    }}
  >
    <Typography
      sx={{
        color: "#F96C23",
        fontSize: { xs: "18px", sm: "22px", md: "24px" }, // Responsive font size
        fontWeight: "bold",
        textAlign: "center",
         marginBottom:{xs:"40px",md:"20px"},
      }}
    >
      {title}
    </Typography>

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px", // Kartlar arası boşluk
      }}
    >
      {cardData.map((item, index) => (
        <Card
          key={item.FkCourseId}
          sx={{
            borderRadius: "8px",
            boxShadow: "none",
            "&:hover": {
              transform: "scale(1.01)",
              transition: "transform 0.3s ease-in-out",
            },
            position: "relative",
          }}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <CardContent
            sx={{
              padding: "0",
              "&:last-child": {
                paddingBottom: "0",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px", // Hover düymələr arası boşluq
              }}
            >
              <Typography
                sx={{
                  fontWeight: "400",
                  color: "#333",
                  fontSize: { xs: "16px", sm: "18px" },
                  flex: "1",
                }}
              >
                <PointText /> {item.SkillName}
              </Typography>

              {hoveredCard === index && (
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
                      height: "20px",
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
                      height: "20px",
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
              )}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Box>
</Box>

  );
}
