import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { callApi } from "../../utils/callApi";
import { Box, Typography } from "@mui/material";
import CourseDetailHeader from "../CourseDetails/CourseDetailHeader";
import CourseCardHome from "../SecondHome/CourseCardHome";
import CertificateCard from "../SecondHome/CertificateCard";
import { ProductManagerCardData } from "../../defaultDatas/productManagerCardDefaultData";
import ShortDesc from "../CourseDetails/ShortDesc";
import OutCome from "../CourseDetails/OutCome";
import ByCoursesDetail from "../CourseDetails/ByCoursesDetail";
import ByChallange from "../CourseDetails/ByChallange";
import WhatLearnDPM from "../DPM/WhatLearnDPM";
import WhatGetACPP from "../ACPP/WhatGetACPP";
import CourseTopics from "../CourseDetails/CourseTopics";
// import PaymentCard from "../Payment/PaymentCard";
import PaymentCardClasses from "./PaymentCardClasses";


export default function ClassesDeatil() {
  const { courseId } = useParams();
  const [data, setData] = useState<{
    Id:string;
    CourseId: string;
    CourseName: string;
    IconUrl: string;
    CourseShortDesc: string;
    CourseLongDesc: string;
  }>({
    Id:"",
    CourseId: "",
    CourseName: "",
    IconUrl: "",
    CourseShortDesc: "",
    CourseLongDesc: "",
  });

  const [dataCourse, setDataCourse] = useState([]);
  const [selectedWhatLearn, setSelectedWhatLearn] = useState([]);
  const [selectedWhatYouGet, setSelectedWhatYouGet] = useState([]);
  const [slectedCourseTopics, setSelectedCourseTopics] = useState([]);
  const [outCome, setOutCome] = useState("");
  const [aboutCourses, setAboutCourses] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [courseCardData, setCourseCardData] = useState<any>({});
  // Fetch data from API
  const fetchDataCourse = async () => {
    const res = await callApi("/lms/main/course/read");
    setDataCourse(res);
  };

  useEffect(() => {
    fetchDataCourse();
  }, []);

  const fetchData = async () => {
    const res = await callApi("/lms/main/course/read");
    const data2 = await callApi("/lms/main/course/info", {
      FkCourseId: courseId,
    });
    setSelectedWhatLearn(JSON.parse(data2[0].WhatYouWillLearn));
    setSelectedWhatYouGet(JSON.parse(data2[0].WhatYouWillGet));
    setSelectedCourseTopics(JSON.parse(data2[0].Topics));
    setOutCome(data2[0].Outcome);

    if (res) {
      console.log(res,courseId,"data")
      const data = res.find(
        (item: { Id: string }) => item.Id == courseId
      );
      setData(data || []);
    }

    const getCourses = await callApi("/lms/main/myneeds/skills/by/course", {
      FkCourseId: [courseId],
    });
    if(!getCourses) return
    setAboutCourses(getCourses);
    
    const challangesData = await callApi("/lms/main/myneeds/challenges/by/course",{
      FkCourseId: courseId
    })
    if(!challangesData) return
    setChallenges(challangesData)
    const getCourseCardData=await callApi('/lms/main/class/info',{
      Id:courseId
    })
    setCourseCardData(getCourseCardData[0])

  }
  useEffect(() => {
    fetchData();
  }, []);
//   console.log(outComeData,'courseWhatyouGet');
  
  return (
    <Box sx={{ marginTop: "180px", minHeight: "80vh" }}>
      <Box sx={{ width: "100%", backgroundColor: "#f5f5f5" }}>
        <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
          <CourseDetailHeader
            data={{
              title: data.CourseName,
              img: data.IconUrl,
              CourseShortDesc: data.CourseShortDesc,
            }}
          />
        </Box>
      </Box>

      <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Box sx={{ width: "95%",margin: "0 auto"  }}>
         
          <ShortDesc data={{ shortDesc: data.CourseLongDesc }} />
          <Box sx={{margin:'0 auto' }}>
            <PaymentCardClasses item={courseCardData} />
          </Box>
          {outCome && <OutCome data={{ title: outCome }} />}
          <Box>
            {aboutCourses && <ByCoursesDetail data={aboutCourses} />}
          </Box>
          <Box>
            {challenges && <ByChallange data={challenges} />}
          </Box>
          <Box>
            {selectedWhatLearn && <WhatLearnDPM data={selectedWhatLearn} />}
          </Box>

          {selectedWhatYouGet && <WhatGetACPP data={selectedWhatYouGet} />}
          {slectedCourseTopics && <CourseTopics data={slectedCourseTopics} />}
        </Box>

        {/* Top Certifications Section */}
        <Box>
          <h1
            style={{
              color: "black",
              fontSize: "36px",
              fontWeight: 400,
              width: "60%",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            Top Certifications
          </h1>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
              margin: "0 auto",
              gap: 4,
              marginBottom: "60px",
              marginTop: "40px",
            }}
          >
            {ProductManagerCardData.slice(0, 3).map(
              (
                item: {
                  title: string;
                  image: string;
                  text: string;
                  id: number;
                },
                index
              ) => (
                <CertificateCard
                  data={{
                    id: item.id.toString(),
                    title: item.title,
                    image: item.image,
                    text: item.text,
                  }}
                  key={index}
                />
              )
            )}
          </Box>
        </Box>

        {/* Top Courses Section */}
        <Box sx={{ width: "80%", margin: "120px auto 40px auto" }}>
          <Typography
            variant="h3"
            sx={{
              color: "black",
              fontSize: "36px",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Top Courses
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            margin: "0 auto 80px 0",
          }}
        >
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
  )
}
