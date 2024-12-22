import { Box, Card, CardContent, Typography } from '@mui/material'
import { Avatar } from 'antd';
import Image from '../../assets/images/image2.jpg'
const testimonials = [
    {
      name: "Sarah L",
      role: "Web Design Course",
      content:
        "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      avatar: "https://via.placeholder.com/50/FF007F", // Replace with actual image
    },
    {
      name: "Jason M",
      role: "UI/UX Design Course",
      content:
        "The UI/UX design course exceeded my expectations. The instructor’s expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      avatar: "https://via.placeholder.com/50/CCCCFF", // Replace with actual image
    },
    {
      name: "Sarah L",
      role: "Web Design Course",
      content:
        "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      avatar: "https://via.placeholder.com/50/FF007F", // Replace with actual image
    },
    {
      name: "Jason M",
      role: "UI/UX Design Course",
      content:
        "The UI/UX design course exceeded my expectations. The instructor’s expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      avatar: "https://via.placeholder.com/50/CCCCFF", // Replace with actual image
    },
  ];
export default function UserCards() {
  return (
     <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
      gap: "30px",
    }}
  >
    {testimonials.map((testimonial, index) => (
      <Card
        key={index}
        sx={{
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          border: "1px solid #E0E0E0",
          padding:'20px'
        }}
      >
        <CardContent>
          {/* Testimonial Text */}
          <Typography
            sx={{
              fontSize: "14px",
              color: "#555",
              marginBottom: "20px",
              lineHeight: "1.6",
            }}
          >
            {testimonial.content}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #E0E0E0",
              paddingTop: "10px",
            }}
          >
            {/* Avatar and Name */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Avatar shape="square"  src={Image} alt={testimonial.name} style={{ width: "50px", height: "50px",borderRadius:'none' }} />
              <Typography sx={{ fontWeight: "600", color: "#333333" ,fontSize:'16px'}}>
                {testimonial.name}
              </Typography>
            </Box>
            {/* Button */}
           
          </Box>
        </CardContent>
      </Card>
    ))}
  </Box>
  )
}
