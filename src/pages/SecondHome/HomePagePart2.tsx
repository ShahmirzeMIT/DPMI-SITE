import { Box, Typography } from "@mui/material";
import FirstCourse from "./FirstCourse";
import SecondCourse from "./SecondCourse";
import ThirdCourse from "./ThirdCourse";
import FourthCourse from "./Fourth";
import AboutCourses from "../Home/AboutCourses";
import Testimonials from "../Home/Testimonials";
import AgileLearning from "./AgileLearning";
import Slider from "../Home/Slider";
import { callApi } from "../../utils/callApi";
import { useEffect, useState } from "react";
import CourseCardHome from "./CourseCardHome";
import Logo from '../../assets/images/onlineCourse.png'
import { Avatar } from "antd";
import AILearn from "./AILearn";
export default function HomePagePart2() {
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
      <Testimonials />
      <Box sx={{width:'80%',margin:'30px auto'}}><Typography variant='h3' sx={{color:'black',fontSize:'30px',fontWeight:'bold',marginBottom:'10px',textAlign:'start',fontFamily:" Cabin, sans-serif !important",}}>
        <Avatar src={Logo} style={{width:'70px',height:'70px',marginRight:'5px'}} shape="square" />
        Courses</Typography></Box>
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
      <Slider />
    </Box>
  );
}
