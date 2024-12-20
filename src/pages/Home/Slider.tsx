import { Box } from "@mui/material";
import { Avatar, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

export default function Slider() {
  const slides = Array.from({ length: 20 }); // 20 slide

  return (
    <Box sx={{ padding: "60px 10px" }}>
      <h1
        style={{
          color: "black",
          fontSize: "36px",
          fontWeight: 600,
          width: "60%",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        Taught By Industry Experts
      </h1>
      <Typography
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: 300,
          letterSpacing: "-0.28px",
          marginBottom: "30px",
        }}
      >
        Pragmatic Institute instructors have decades of real-world experience
        within companies like Microsoft, Cisco, Dell, Hallmark, Quaker Oats, and
        AT&T.
      </Typography>

      <Swiper
      slidesPerView="auto" 
        // slidesPerView={3} // Konkret rəqəm qoyulur
        spaceBetween={60} // Aradakı boşluğu kiçildin
        loop={true} // Sonsuz scroll aktivləşdirilir
        loopAdditionalSlides={1} // Əlavə slayd yüklənir
        className="mySwiper"
      >
        {slides.map((_, index) => (
          <SwiperSlide className="custom-slide" key={index}>
            <Avatar
              size={90}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt={`Slide ${index + 1}`}
            />
            <Typography>
               {index}
            </Typography>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
