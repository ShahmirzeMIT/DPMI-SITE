import { Box } from "@mui/material";
import { Avatar, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
const data = [
  {
    links: 'https://top101.ee/storage/app/uploads/public/634/fb2/ae7/thumb_241_100_100_0_0_fit.png',
    text: 'TextMagic'
  },
  {
    links: 'https://www.logo.wine/a/logo/Microsoft/Microsoft-Logo.wine.svg',
    text: 'Microsoft'
  },
  {
    links: 'https://play-lh.googleusercontent.com/-Udh2Qv4FyhP2uLfvNy27jzzXrrIfnDEi9kUqzhy8OQgGUcWXXud6nlg8UywECiRmME=w480-h960-rw',
    text: 'Skype'
  },
 
  {
    links: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
    text: 'Facebook'
  },
  {
    links: 'https://mui.com/static/logo.png',
    text: 'Material UI'
  },
  {
    links: 'https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png',
    text: 'Ant Design'
  },
  {
    links: 'https://e7.pngegg.com/pngimages/392/47/png-clipart-graphics-cards-video-adapters-nvidia-geforce-shield-portable-pascal-nvidia-graphics-cards-video-adapters-nvidia.png',
    text: 'NVIDIA'
  },
  {
    links: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqCVzfqkoJCQ&psig=AOvVaw2sFmZ15AOtCYmKezk3gM_u&ust=1734966081907000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiYk6y50ruKAxW2SrgEHRsRAvEQjRx6BAgAEBg',
    text: 'Reddit'
  },
];

export default function Slider() {

  return (
    <Box sx={{ padding: "60px 10px" }}>
      <h1
        style={{
          color: "black",
          fontSize: "36px",
          // fontWeight: 600,
          width: "60%",
          margin: "0 auto",
          textAlign: "center",
        
          textTransform:'uppercase',
          marginBottom:'60px'
        }}
      >
        Our Partners
      </h1>
      <Swiper
      slidesPerView="auto" 
        // slidesPerView={3} // Konkret rəqəm qoyulur
        spaceBetween={190} // Aradakı boşluğu kiçildin
        loop={true} // Sonsuz scroll aktivləşdirilir
        loopAdditionalSlides={1} // Əlavə slayd yüklənir
        className="mySwiper"
      >
        {data.map((item:{links:string,text:string}, index) => (
          <SwiperSlide className="custom-slide" key={index}>
            <Avatar
              size={90}
              src={item.links}
              alt={`Slide ${index + 1}`}
            />
            <Typography>
               {item.text}
            </Typography>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
