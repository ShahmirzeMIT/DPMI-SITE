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
        width: { xs: "95vw", sm: "1280px", lg: "1280px" },
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      
      <Box sx={{ background: "white", maxw: "1280px", padding: "10px" }}>
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
            maxWidth: "1280px",
            display: "flex",
            flexDirection: "column",
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
                      padding: "2px",
                      margin: "0",
                      fontWeight: "400",
                      color: "#333",
                      fontSize: "18px",
                      flex: "1",
                      alignItems: "center",
                    }}
                  >
                    <PointText /> {item.ChallengeName}
                    <span
                      style={{
                        color: "gray",
                        textTransform: "capitalize",
                        fontSize: "18px",
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
