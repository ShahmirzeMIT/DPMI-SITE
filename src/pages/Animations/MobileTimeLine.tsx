import { useState, useEffect, useRef } from "react";
import { Box, Card, Typography } from "@mui/material";
import { Props } from "./StepComponent";

const MobileTimeline = ({ modules, finishTitle }: Props) => {
  const [lineHeight, setLineHeight] = useState(0); // Dinamik xətt hündürlüyü
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Aktiv element
  const timelineRef = useRef(null);
  const cardRefs = useRef<any>([]); // Hər bir kartın ref-lərini saxlayır

  const colors = ["#2a74b1", "#D8531D", "#333333", "#4DB6AC", "#66BB6A"];

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card:any, index:any) => {
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
        const firstCircle = cardRefs.current[0]; // İlk nöqtənin ref-i
        const lastCircle = cardRefs.current[cardRefs.current.length - 1]; // Sonuncu nöqtənin ref-i

        if (firstCircle && lastCircle) {
          // Hər iki element mövcuddursa, mərkəzlər arasındakı məsafəni hesablayırıq
          const firstCircleCenter =
            firstCircle.offsetTop + firstCircle.offsetHeight / 2;
          const lastCircleCenter =
            lastCircle.offsetTop + lastCircle.offsetHeight / 2;

          // Hündürlüyü hesabla
          const height = lastCircleCenter - firstCircleCenter;
          setLineHeight(height);
        }
      }
    };

    calculateLineHeight(); // Xəttin ilkin hündürlüyünü hesablayırıq
    window.addEventListener("resize", calculateLineHeight); // Yenidən ölçüldükdə hündürlüyü yenilə
    window.addEventListener("scroll", handleScroll); // Aktiv elementi yeniləmək üçün scroll dinləyicisi

    return () => {
      window.removeEventListener("resize", calculateLineHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        alignItems: "flex-start",
        padding: "20px",
        position: "relative",
        margin: "0 auto",
        maxWidth: "450px",
       "@media (max-width: 450px)": {
           maxWidth: "310px",  // Center the component
            },
      }}
    >
      {/* Vertical Line */}
      <Box
        sx={{
          position: "absolute",
          height: `${lineHeight + 70}px`, // Dinamik xətt hündürlüyü
          width: "4px",
          backgroundColor: "#2971B0",
          left: "0px",
          // marginTop: "40px",
          transform: "translateX(-50%)",
        }}
      ></Box>

      {/* Timeline Cards */}
      {filteredData.map((item, index) => (
        <Box
          key={index}
          ref={(el) => (cardRefs.current[index as any] = el!)} // Hər kartın ref-i
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
              width: "60px",
              height: "60px",
              backgroundColor: colors[index % colors.length],
              borderRadius: "50%",
              zIndex: 1,
              left: -50,
              color: "white",
              fontSize: "36px",
              textAlign: "center",
              lineHeight: "60px", // Mərkəzləşdirmək üçün
            }}
          >
            {index + 1}
          </Box>

          {/* Card */}
          <Card
            sx={{
              marginLeft: "80px",
              padding: "16px",
              width: "90%",
              borderRadius: "15px",
              backgroundColor:
                activeIndex === index
                  ? colors[index % colors.length]
                  : "#1976d2",
              transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: "24px", color: "white" }}
            >
              {item.title}
            </Typography>

         
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default MobileTimeline;
