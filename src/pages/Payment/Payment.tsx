import { Box, Button, Typography, Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { callApi } from "../../utils/callApi";
import { useNavigate } from "react-router-dom";
import PaymentModal from "./PaymentModal";
import PaymentCourseDescription from "./PaymentCourseDescription";

export default function Payment() {
  const [cardValues, setCardValues] = useState([]);
  const navigate = useNavigate();

  const handleEnroll = (item: any) => {
    navigate("/payment");
    localStorage.setItem("paymentData", JSON.stringify(item));
  };

  const handleMoreInfo = (courseId: string) => {
    navigate(`/courses/${courseId}`);
  };

  const fetchCardData = async () => {
    const res = await callApi("/lms/main/class/list");
    const updatedData = res.map((item: any, index: number) => ({
      ...item,
      id: index + 1,
    }));
    setCardValues(updatedData);
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <Box sx={{ marginTop: "100px", padding: "20px" }}>
      {cardValues.map((item: any) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            border: "1px solid #E0E0E0",
            borderRadius: "8px",
            marginBottom: "20px",
            overflow: "hidden",
            boxShadow: "none",
            background:"#F8F8F8"
          }}
        >
          {/* Section 1: Course Image */}
          <Box sx={{ flex: "0 0 auto", padding: "20px", textAlign: "center" }}>
            <Avatar
              src={item.CourseImgUrl}
              sx={{
                height: { xs: "80px", sm: "100px" },
                width: { xs: "80px", sm: "100px" },
              }}
            />
          </Box>

          {/* Section 2: Course Info */}
          <Box sx={{ flex: "1.5", padding: "25px 20px" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "28px",
                fontWeight: "600",
                margin: "10px 0",
                color: "black",
                textAlign: "start",
              }}
            >
              {item.CourseName}
            </Typography>
          
            <PaymentCourseDescription title={item.ClassTitle} desc={item.ShortDesc}/>
          </Box>

          {/* Section 3: Mentor Info */}
          <Box
            sx={{
              flex: "1",
              padding: "35px 20px",
              borderLeft: { sm: "1px solid #E0E0E0" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <Avatar
                src={item.MentorImgUrl}
                sx={{
                  height: "40px",
                  width: "40px",
                  marginRight: "10px",
                  marginBottom: "10px",
                }}
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: "600", fontSize: "18px", color: "black" }}
              >
                <PaymentModal
                  title={item.MentorName}
                  Img={item.MentorImgUrl}
                  name={item.MentorName}
                  desc={item.ShortBio}
                  JobTitle={item.JobTitle}
                  Linkedin={item.Linkedin}
                  Company={item.Company}
                />
              </Typography>
            </Box>
          
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#F27D82",
                margin: "0px 0 10px 0",
                marginTop:'10px'
              }}
            >
              {item.ClassType}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "15px", color: "black",marginTop:'10px' }}
            >
              Language: Engish
            </Typography>
           
          </Box>

          {/* Section 4: Schedule Info */}
          <Box
            sx={{
              flex: "1",
              padding: "10px 20px",
              borderLeft: { sm: "1px solid #E0E0E0" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                display: "block",
                fontSize: "20px",
                fontWeight: "600",
                color: "black",
                marginBottom: "15px",
              }}
            >
              {item.StartDate}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "block",
                fontSize: "15px",
                fontWeight: "600",
                color: "black",
                marginBottom: "5px",
              }}
            >
              {item.TimeInterval}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "block",
                fontSize: "14px",
                color: "black",
                marginBottom: "5px",
              }}
            >
              {item.ClassDays}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "block",
                fontSize: "14px",
                color: "black",
                marginBottom: "5px",
              }}
            >
              Time Zone: {item.TimeZone}
            </Typography>
          </Box>

          {/* Section 5: Price Info */}
          <Box
            sx={{
              flex: "1",
              padding: "55px 0",
              borderLeft: { sm: "1px solid #E0E0E0" },
              textAlign: "center",
              height: "100%",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center",alignItems:'center' }}>
              <Typography
                variant="h6"
                sx={{ color: "#2A73B1", fontWeight: "bold",fontSize:'36px' }}
              >
                {item.Currency}
                {item.DiscountedPrice}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "red",
                  textDecoration: "line-through",
                  marginTop: "5px",
                  marginLeft: "10px"
                  ,fontSize:'24px'
                }}
              >
                {item.Currency}
                {item.Price}
              </Typography>
            </Box>
          </Box>

          {/* Section 6: Actions */}
          <Box
            sx={{
              flex: "1",
              padding: "35px 20px",
              borderLeft: { sm: "1px solid #E0E0E0" },
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: { xs: "center", sm: "stretch" },
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#5693F0",
                color: "#fff",
                textTransform: "uppercase",
                fontSize: "12px",
              }}
              onClick={() => handleEnroll(item)}
            >
              Enroll Now
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FA6B23",
                color: "#fff",
                textTransform: "uppercase",
                fontSize: "12px",
              }}
              onClick={() => handleMoreInfo(item.FkCourseId)}
            >
              More Info
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
