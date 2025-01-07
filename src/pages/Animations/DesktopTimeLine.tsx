import  { useState, useEffect, useRef } from "react";
import { Box, Card, Typography, useTheme } from "@mui/material";
import { Props } from "./StepComponent";

const DesktopTimeLine = ({ modules }: Props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const timelineRef = useRef<any>(null);
  const cardRefs = useRef<any>([]);
  const theme = useTheme();

  const colors = ["#2a74b1", "#D8531D", "#333333", "#4DB6AC", "#66BB6A"];
  useEffect(() => {
    const handleScroll = () => {
      const timelinePosition = timelineRef.current.getBoundingClientRect().top + window.scrollY;

      cardRefs.current.forEach((card: any, index: any) => {
        const cardTop = card.offsetTop  + timelinePosition;
        const cardBottom = cardTop + card.offsetHeight;
        const windowScroll = window.scrollY + window.innerHeight / 2;

        if (windowScroll >= cardTop && windowScroll < cardBottom) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filteredData = [
    ...modules,
    {
      title: "Achieve Success",
      shortDesc: "Celebrate milestones and achievements.",
    //   icon: "🏆",
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
        //  margin:'0 auto'
      }}
    >
      {/* Vertical Line */}
      <Box
        sx={{
          position: "absolute",
          height: "85%",
          width: "4px",
          backgroundColor: "#1976d2",
          left: "50%",
          marginTop:'180px',

          transform: "translateX(-50%)",
          [theme.breakpoints.down("sm")]: {
            left: "10px", // Adjust line position on mobile
          },
        }}
      ></Box>

      {/* Timeline Cards */}
      {filteredData.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: index % 2 === 0 ? "row" : "row-reverse" },
            alignItems: "center",
            margin: "40px 0",
            width: "100%",
            maxWidth: "800px",
          
          }}
        >
          {/* Connecting Line to Card */}
          <Box
            sx={{
              position: "absolute",
              width: "25px",
              height: "25px",
              backgroundColor: activeIndex === index ? "green" : "#1976d2",
              borderRadius: "50%",
              zIndex: 1,
              left: { xs: "6px", sm: "49.1%" },
              color:'white'
              // Adjust circle position for mobile
            }}
          >{index+1}</Box>
          <Card
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
            sx={{
              padding: "16px",
              margin: { xs: "20px 0", sm: "0 20px" },
              flex: "1",
              maxWidth: { xs: "90%", sm: "300px" },
              textAlign: "center",
              transform: activeIndex === index ? "scale(1.25)" : "scale(1)",
              transition: "transform 0.3s ease",
              boxShadow: activeIndex === index ? "0px 4px 20px rgba(0, 0, 0, 0.3)" : "none",
              borderRadius:'15px',
              backgroundColor: item.title === "Achieve Success" ? "#1876D1" : colors[index % colors.length]
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: '24px', // Smaller font size for mobile
                color:'white'
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                fontSize: '18px',
                color:'white'
              }}
            >
              {item.shortDesc}
            </Typography>
         
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default DesktopTimeLine;
