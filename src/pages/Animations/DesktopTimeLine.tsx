import { useState, useEffect, useRef } from "react";
import { Box, Card, Typography, useTheme } from "@mui/material";
import { Avatar, Button, Popover } from "antd";
import {  useNavigate } from "react-router-dom";
import PointTextAnimation from "../../componets/PointTextAnimation";

export interface Module {
  title: string;
  shortDesc: string;
  course?: Array<{
    title: string;
    id: string;
    icon?: string;
    shortDesc: string;
  }>;
}

export interface Props {
  modules: Module[];
  finishTitle: string;
  icon: string;
}

const DesktopTimeLine = ({ modules, finishTitle, icon }: Props) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [lineHeight, setLineHeight] = useState(0); // Dynamic line height
  const timelineRef = useRef<any>(null);
  const cardRefs = useRef<any>([]); // Ref for each card
  const theme = useTheme();
  const navigate = useNavigate();

  const colors = ["#2a74b1", "#D8531D", "dodgerblue", "#4DB6AC", "#333"];
  const finishColor='#f4f4f4';
  const finishtextColor="#333"

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
  

  const filteredData = [
    ...modules,
    {
      title: `Certified ${finishTitle}`,
      shortDesc: "Celebrate milestones and achievements.",
      icon: icon,
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
      {/* Line connecting the timeline */}
      <Box
        sx={{
          position: "absolute",
          height: `${lineHeight}px`,
          width: "4px",
          backgroundColor: "#1976d2",
          left: "50%",
          marginTop: "60px",
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

      {/* Timeline Items */}
      {filteredData.map((item: any, index) => (
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
          {/* Circle */}
          <Box
            sx={{
              position: "absolute",
              width: "60px",
              height: "60px",
              backgroundColor: index === filteredData.length - 1 ? finishColor : colors[index % colors.length],
              borderRadius: "50%",
              zIndex: 1,
              left: { xs: "6px", sm: "47.5%" },
              color: index === filteredData.length - 1 ? finishtextColor : "white",
              fontSize: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {index + 1}
          </Box>

          {/* Card */}
          <Card
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
            sx={{
              padding: "12px",
              margin: { xs: "10px 0", sm: "0 10px" },
              flex: "none",
              width: "350px",
              textAlign: "center",
              transition: "transform 0.3s ease",
              boxShadow:
                activeIndex === index
                  ? "0px 4px 20px rgba(0, 0, 0, 0.3)"
                  : "0px 0px 10px gray",
              borderRadius: " 10px",
              backgroundColor: index === filteredData.length - 1 ? finishColor : colors[index % colors.length],

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
                color: index === filteredData.length - 1 ? finishtextColor : "white",

              }}
            >
           {
            index === filteredData.length - 1 ? <Box sx={{marginTop:'8px',marginRight:'30px'}}>
            <Avatar src={icon} shape="square" style={{
              height:'60px',
              width:'110px'
            }} /> <span>{item.title}</span>
            </Box>: item.title
           }
           
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                // gap: "10px",
                marginTop: "10px",
              }}
            >
              {item.course?.map((courseItem: any) => (
                <Popover
                  key={courseItem.id}
                  content={
                    <Box sx={{ width: "300px" }}>
                      <Typography>{courseItem.shortDesc}</Typography>
                      <Button
                        onClick={() => navigate(`/courses/${courseItem.id}`)}
                        style={{
                          backgroundColor: "#2a74b1",
                          color: "white",
                          marginTop: "10px",
                        }}
                      >
                        Read More
                      </Button>
                    </Box>
                  }
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "8px",marginLeft:'30px' }}
                  >
                    <PointTextAnimation />
                    <Typography
                      sx={{
                        margin: "0px 0px 0.35em",
                        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                        fontWeight: 400,
                        lineHeight: 1,
                        letterSpacing: "0.0075em",
                        color:'white',
                        fontSize:'14px'
                      }}
                    >
                      {courseItem.title}
                    </Typography>
                  </Box>
                </Popover>
              ))}
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default DesktopTimeLine;
