
import { Box, Typography } from "@mui/material";
import {  useParams } from "react-router-dom";
import CourseDetailHeader from "./CourseDetailHeader";
import { useEffect, useState } from "react";
import { callApi } from "../../utils/callApi";
import ShortDesc from "./ShortDesc";
import OutCome from "./OutCome";
// import CourseHours from "./CourseHours";
// import TopicCards from "./TopicCards";
// import Logo from '../../assets/images/evaluation.png'
// import { Avatar } from "antd";
// import { curseDataDetail } from "./courseDetailData";
import WhatLearnDPM from "../DPM/WhatLearnDPM";
import WhatGetACPP from "../ACPP/WhatGetACPP";
import { courseLearn } from "../../defaultDatas/courseLearn";
import { courseWhatyouGet } from "../../defaultDatas/courseWhatyouGet";
import { courseTopics } from "../../defaultDatas/courseTopics";
import CourseTopics from "./CourseTopics";
import CourseCardHome from "../SecondHome/CourseCardHome";
import { ProductManagerCardData } from "../../defaultDatas/productManagerCardDefaultData";
import CertificateCard from "../SecondHome/CertificateCard";
import { outComeData } from "../../defaultDatas/outComeData";

const CourseDetails = () => {
  const { courseId } = useParams(); 
  const [data, setData] = useState<{
    CourseId: string;
    CourseName: string;
    IconUrl: string;
    CourseShortDesc: string;
    CourseLongDesc: string;
  }>({
    CourseId: "",
    CourseName: "",
    IconUrl: "",
    CourseShortDesc: "",
    CourseLongDesc: "",
  });

  const [dataCourse, setDataCourse] = useState([]);

  // Fetch data from API
  const fetchDataCourse = async () => {
    const res = await callApi("/lms/main/course/read");
    console.log(res, "res");
    setDataCourse(res);
  };

  useEffect(() => {
    fetchDataCourse();
  }, []);

  const fetchData = async () => {
    const res = await callApi('/lms/main/course/read');
    if (res) {
      const data = res.find((item: { CourseId: string }) => item.CourseId === courseId);
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [courseId]);

  // Get selected data for other components
  const selectedWhatLearn = courseLearn.find((item) => item.id === data.CourseId);
  const selectedWhatYouGet = courseWhatyouGet.find((item) => item.id.toString() === data.CourseId);
  const slectedCourseTopics = courseTopics.find((item) => item.id.toString() === data.CourseId);
  const outCome = outComeData.find((item) => item.id.toString() === data.CourseId);

  return (
    <Box sx={{ marginTop: '180px', minHeight: '80vh' }}>
      <Box sx={{ width: '100%', backgroundColor: "#f5f5f5" }}>
        <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          <CourseDetailHeader data={{ title: data.CourseName, img: data.IconUrl, CourseShortDesc: data.CourseShortDesc }} />
        </Box>
      </Box>

      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Box sx={{ width: '90%' }}>
          <ShortDesc data={{ shortDesc: data.CourseLongDesc }} />
          
          {outCome?.text && (  // Updated to check for 'text' instead of 'title'
            <OutCome data={{ title: outCome.text }} />  // Adjusted the prop passed to 'OutCome'
          )}

          <Box>
            {selectedWhatLearn?.whatLearn && (
              <WhatLearnDPM data={selectedWhatLearn.whatLearn} />
            )}
          </Box>

          {selectedWhatYouGet?.courseWhatyouGet && (
            <WhatGetACPP data={selectedWhatYouGet.courseWhatyouGet} />
          )}
          {slectedCourseTopics?.courseWhatyouGet && (
            <CourseTopics data={slectedCourseTopics.courseWhatyouGet} />
          )}
        </Box>

        {/* Top Certifications Section */}
        <Box>
          <h1 style={{ color: 'black', fontSize: "36px", fontWeight: 400, width: '60%', margin: '0 auto',textAlign:'center' }}>Top Certifications</h1>

          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
            margin: '0 auto',
            gap: 4,
            marginBottom: '60px',
            marginTop: '40px'
          }}>
            {ProductManagerCardData.slice(0, 3).map((item: { title: string; image: string; text: string; id: number }, index) => (
              <CertificateCard
                data={{
                  id: item.id.toString(),
                  title: item.title,
                  image: item.image,
                  text: item.text
                }}
                key={index}
              />
            ))}
          </Box>
        </Box>

        {/* Top Courses Section */}
        <Box sx={{ width: '80%', margin: '120px auto 40px auto' }}>
          <Typography variant="h3" sx={{ color: 'black', fontSize: "36px", fontWeight: 400 ,textAlign:'center'}}>
            Top Courses
          </Typography>
        </Box>
        <Box sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          margin: "0 auto 80px 0",
        }}>
          {dataCourse.length > 0 &&
            dataCourse.slice(0, 3).map(
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
      </Box>
    </Box>
  );
};

export default CourseDetails;

