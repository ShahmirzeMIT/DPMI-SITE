import  { useState, useEffect, useRef } from "react";
import { Box, Card, Typography } from "@mui/material";
import { Props } from "./StepComponent";

const MobileTimeline = ({ modules }: Props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const timelineRef = useRef<any>(null);
  const cardRefs = useRef<any>([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card: any, index: any) => {
        const cardTop = card.getBoundingClientRect().top + window.scrollY;
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
        alignItems: "flex-start",
        padding: "20px",
        position: "relative",
        margin:'0 auto',
       maxWidth:'400px'
      }}
    >
      {/* Vertical Line */}
      <Box
        sx={{
          position: "absolute",
          width: "4px",
          height: "85%",
          backgroundColor: "#1976d2",
          left: "12px", // Position the line to match the dots
          top: 0,
          marginTop: "40px",
        }}
      ></Box>

      {/* Timeline Cards */}
      {filteredData.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            position: "relative",
            marginBottom: "40px",

            width: "100%",
          }}
        >
          {/* Dot */}
          <Box
            sx={{
              position: "absolute",
              left: "-13px",
              top: "16px",
              width: "12px",
              height: "12px",
              backgroundColor: activeIndex === index ? "green" : "#1976d2",
              borderRadius: "50%",
              
              zIndex: 1,
              "@media (max-width: 600px)": {
                top: "12px",
                width: "15px",
                height: "15px",
              },
            }}
          ></Box>

          {/* Card */}
          <Card
            ref={(el) => (cardRefs.current[index as any] = el)}
            sx={{
              marginLeft: "40px",
              padding: "16px",
              width: "90%",
              boxShadow:
                activeIndex === index
                  ? "0px 4px 20px rgba(0, 0, 0, 0.3)"
                  : "none",
              transform: activeIndex === index ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "@media (max-width: 600px)": {
                width: "100%",
                marginLeft: "20px",
              },
              borderRadius:'15px',
              maxWidth:'400px'
            }}
          >
            <Typography variant="h6" gutterBottom sx={{
                 fontSize: '24px',
            }}>
              {item.title}
            </Typography>
          
            <Typography variant="body2"
              sx={{
                fontSize: '18px',
                lineHeight:'28px'
              }}
            >{item.shortDesc}</Typography>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default MobileTimeline;
