
import { Box } from "@mui/material";
import { Avatar, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

// Import custom CSS
import "./styles.css"; // Add styles here

export default function Slider() {
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
          marginBottom:'30px'
        }}
      >
        Pragmatic Institute instructors have decades of real-world experience
        within companies like Microsoft, Cisco, Dell, Hallmark, Quaker Oats, and
        AT&T.
      </Typography>

      <Swiper
        slidesPerView={"auto"} // Allows custom widths
        spaceBetween={50} // Sets margin-right between slides
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Array.from({ length:20 }).map((_, index) => (
          <SwiperSlide className="custom-slide" key={index}>
            <Avatar
              size={80}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
