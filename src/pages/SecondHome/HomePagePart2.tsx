import { Box, Typography } from "@mui/material";
import FirstCourse from "./FirstCourse";
import SecondCourse from "./SecondCourse";
import ThirdCourse from "./ThirdCourse";
import FourthCourse from "./Fourth";
import AboutCourses from "../Home/AboutCourses";
// import Testimonials from "../Home/Testimonials";
import AgileLearning from "./AgileLearning";
import Slider from "../Home/Slider";
import { callApi } from "../../utils/callApi";
import { useEffect, useState } from "react";
import CourseCardHome from "./CourseCardHome";
import { Button } from "antd";
import AILearn from "./AILearn";
import { useNavigate } from "react-router-dom";
export default function HomePagePart2() {
  const navigate=useNavigate()
  const [data, setData] = useState([]);

  // Fetch data from API
  const fetchData = async () => {
    const res = await callApi("/lms/main/course/read");
    console.log(res, "res");
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box > 
      <AILearn/>
      <AgileLearning />
      <ThirdCourse />
      <SecondCourse />
      <FirstCourse />
      <FourthCourse />
      <AboutCourses />
      {/* <Testimonials /> */}
      <Box sx={{width:'80%',margin:'30px auto',}}><Typography variant='h3' sx={{color:'black',fontSize: "36px", fontWeight: 600}}>
       Top  Courses</Typography></Box>
        <Typography sx={{color:'black',fontSize:'18px',margin:'20px auto',maxWidth:"650px"}}>Enhance your skills and knowledge with our AI-driven e-learning platform. Accelerate your journey into the competitive market with confidence and strength.</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          // width: "90%",
          margin: "0 auto",
        }}
      >
        {/* Sadece ilk 3 elementi göstər */}
        {data.length > 0 &&
          data
            .slice(0, 3) // İlk 3 elementi alır
            .map(
              (
                item: {
                  CourseId: string;
                  CourseName: string;
                  IconUrl: string;
                  CourseShortDesc: string;
                },
                index
              ) => (
                <CourseCardHome
                  key={index}
                  data={{
                    id: item.CourseId,
                    title: item.CourseName,
                    image: item.IconUrl,
                    description: item.CourseShortDesc,
                  }}
                />
              )
            )}
      </Box>
      <Button style={{background:'#E9EDF1',padding: "17px 30px 17px 30px",height:'52px',color:'black',borderRadius:'none',marginTop:'80px'}} onClick={() => navigate("/courses")}>View Courses  &gt;&gt;</Button>

      <Slider />
    </Box>
  );
}
