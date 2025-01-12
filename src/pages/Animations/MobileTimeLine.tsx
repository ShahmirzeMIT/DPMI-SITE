import { useState, useEffect, useRef } from "react";
import { Box, Card, Typography } from "@mui/material";
import { Props } from "./StepComponent";
import { Avatar, Button, Popover } from "antd";
import PointTextAnimation from "../../componets/PointTextAnimation";
import { useNavigate } from "react-router-dom";

const MobileTimeline = ({ modules, finishTitle,icon }: Props) => {
  const [lineHeight, setLineHeight] = useState(0); // Dinamik xətt hündürlüyü
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Aktiv element
  const timelineRef = useRef(null);
  const cardRefs = useRef<any>([]); // Hər bir kartın ref-lərini saxlayır
  const navigate = useNavigate();
  const colors = ["#2a74b1", "#D8531D", "dodgerblue", "#4DB6AC", "#66BB6A"];
 const finishColor='#f4f4f4';
  const finishtextColor="#333"
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
      title: `${"Certified"} ${
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
              backgroundColor: index === filteredData.length - 1 ? finishColor : colors[index % colors.length],
              borderRadius: "50%",
              zIndex: 1,
              left: -50,
              color: index === filteredData.length - 1 ? finishtextColor : "white",
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
              borderRadius: "10px",
              backgroundColor: index === filteredData.length - 1 ? finishColor : colors[index % colors.length],
              transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: "24px",
                color: index === filteredData.length - 1 ? finishtextColor : "white",
                }}
            >
            {
            index === filteredData.length - 1 ? <Box sx={{marginTop:'8px',marginRight:'30px'}}>
            <Avatar src={icon} shape="square" style={{
              height:'60px',
              width:'80px'
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
                        fontWeight: 500,
                        lineHeight: 1,
                        letterSpacing: "0.0075em",
                        color:'white',
                        fontSize:'14px',
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

export default MobileTimeline;
