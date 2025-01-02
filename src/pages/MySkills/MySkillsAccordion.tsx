import { Box, Typography, Card, CardContent } from "@mui/material";
import { useState } from "react";
import PointText from "../../componets/PointText";
interface CardData {
  cardData: {
    ChallengeName: string;
    FkCourseId: number;
    Id: number;
    GroupName: string;
  }[];
  title: string;
  handleClose: () => void;
}

export default function MySkillsAccordion({
  cardData,
  title,
}: // handleClose,
CardData) {
  console.log(cardData, "cardData");
  const [_hoveredCard, setHoveredCard] = useState<number | null>(null); // Individual hover state

  if (!cardData || cardData.length === 0) {
    return <></>;
  }

  return (
    <Box
      sx={{
        width: { xs: "80vw", sm: "85vw", md: "90vw", lg: "95vw",xl:"100vw" }, // Responsive genişlik
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
      <Box sx={{
      background: "white",
      width: "100%",
      maxWidth: "1240px",
      padding: "10px",
    }}>
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

                padding: "2px !important",
                position: "relative",
              }}
              onMouseEnter={() => setHoveredCard(index)} // Hover başladığında kartın Id-si set edilir
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
                    <PointText /> {item.ChallengeName}
                    <span
                      style={{
                        color: "gray",
                        textTransform: "capitalize",
                        fontSize: "16px"
                      }}
                    >
                      {" "}
                      {`[${item.GroupName}]`}
                    </span>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
