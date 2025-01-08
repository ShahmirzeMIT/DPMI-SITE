import { useState, useEffect, useRef } from "react";
import { Box, Card, Typography, useTheme } from "@mui/material";
import { Props } from "./StepComponent";


const DesktopTimeLine = ({ modules, finishTitle }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [lineHeight, setLineHeight] = useState(0); // Dynamic line height
  const timelineRef = useRef<any>(null);
  const cardRefs = useRef<any>([]); // Ref for each card
  const theme = useTheme();

  const colors = ["#2a74b1", "#D8531D", "#333333", "#4DB6AC", "#66BB6A"];

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card: any, index: number) => {
        const cardTop = card.getBoundingClientRect().top + window.scrollY;
        const cardBottom = cardTop + card.offsetHeight;
        const windowScroll = window.scrollY + window.innerHeight / 2;

        if (windowScroll >= cardTop && windowScroll < cardBottom) {
          setActiveIndex(index);
        }
      });
    };

    const calculateLineHeight = () => {
      if (cardRefs.current.length > 0) {
        const firstCircle = cardRefs.current[0];
        const lastCircle = cardRefs.current[cardRefs.current.length - 1];

        if (firstCircle && lastCircle) {
          const firstCircleCenter =
            firstCircle.offsetTop + firstCircle.offsetHeight / 2;
          const lastCircleCenter =
            lastCircle.offsetTop + lastCircle.offsetHeight / 2;

          const height = lastCircleCenter - firstCircleCenter;
          setLineHeight(height);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", calculateLineHeight);
    calculateLineHeight();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateLineHeight);
    };
  }, []);

  console.log(finishTitle, "finishTitle");
  

  const filteredData = [
    ...modules,
    {
      title: `${"Certificate"} ${
        finishTitle 
      }`,
      shortDesc: "Celebrate milestones and achievements.",
    },
  ];

  return (
    <Box
      ref={timelineRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        padding: "20px",
        maxWidth: "1250px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: `${lineHeight}px`,
          width: "4px",
          backgroundColor: "#1976d2",
          left: "50%",
          marginTop: "80px",
          transform: "translateX(-50%)",
          backgroundImage:
            activeIndex === filteredData.length - 1
              ? "none"
              : "repeating-linear-gradient(#1976d2, #1976d2 10px, transparent 10px, transparent 20px)",
          [theme.breakpoints.down("sm")]: {
            left: "10px",
          },
        }}
      ></Box>

      {filteredData.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: index % 2 === 0 ? "row" : "row-reverse",
            },
            alignItems: "center",
            margin: "20px 60px",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "60px",
              height: "60px",
              backgroundColor: colors[index % colors.length],
              borderRadius: "50%",
              zIndex: 1,
              left: { xs: "6px", sm: "47.7%" },
              color: "white",
              fontSize: "36px",
              textAlign: "center",
              verticalAlign: "center",
            }}
          >
            {index + 1}
          </Box>
          <Card
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
            sx={{
              padding: "12px",
              margin: { xs: "10px 0", sm: "0 10px" },
              flex: "none",
              width: "350px !important",
              minWidth: "350px !important",
              maxWidth: "350px !important",
              textAlign: "center",
              transition: "transform 0.3s ease",
              boxShadow:
                activeIndex === index
                  ? "0px 4px 20px rgba(0, 0, 0, 0.3)"
                  : "none",
              borderRadius: "15px",
              backgroundColor: colors[index % colors.length],
              transform: `scale(1.25) translateX(${
                index % 2 === 0 ? "-40px" : "40px"
              })`,
              "&:hover": {
                transform: `scale(1.45) translateX(${
                  index % 2 === 0 ? "-50px" : "50px"
                })`,
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: "24px",
                color: "white", // Change the text color to white
              }}
            >
              {item.title}
            </Typography>

          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default DesktopTimeLine;
