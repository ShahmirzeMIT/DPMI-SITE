import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { callApi } from "../../utils/callApi";
import { Box } from "@mui/material";
import CourseDetailHeader from "../CourseDetails/CourseDetailHeader";


export default function ClassesDeatil() {
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
  
    const [_dataCourse, setDataCourse] = useState([]);
    const [body, setBody] = useState([]);
  
    // Fetch data from API
    const fetchDataCourse = async () => {
      const res = await callApi("/lms/main/course/read");
     
      setDataCourse(res);
    };
  
    useEffect(() => {
      fetchDataCourse();
    }, []);
  
    const fetchData = async () => {
      const res = await callApi('/lms/main/course/read');
      const bodyApi=await callApi('/lms/main/class/body/info',{
        "FkClassId":"1"
       
      })
      if (res) {

        console.log(body,'body');
        console.log(courseId,'courseId');
        
        const data = res.find((item: { Id: string }) => item.Id == courseId);
    
      
        
        setData(data);
      }
      if(bodyApi){
        setBody(bodyApi[0].ClassBody)
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [courseId]);
//   console.log(outComeData,'courseWhatyouGet');
  
  return (
    <Box sx={{ marginTop: '180px', minHeight: '80vh' }}>
      <Box sx={{ width: '100%', backgroundColor: "#f5f5f5" }}>
        <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          <CourseDetailHeader data={{ title: data.CourseName, img: data.IconUrl, CourseShortDesc: data.CourseShortDesc }} />
         
        </Box>
      </Box>
      <div
      dangerouslySetInnerHTML={{ __html: body }}
    />
    </Box>
  )
}
