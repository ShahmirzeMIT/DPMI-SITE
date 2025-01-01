import { Box } from "@mui/material";
import CourseCard from "./CourseCard";


import useCourseState from "./useCourseState";
import CourseDetailsHeader from "../CourseDetails/CourseDetailsHeader";

export default function Courses() {
  const{data}=useCourseState()
  
  return (
    <Box sx={{ margin: "150px auto" }}>
     
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          // width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
         <CourseDetailsHeader/>
         <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'50px'}}>
         { data.length>0 && data?.map((item:{CourseId:string,CourseName:string,IconUrl:string,CourseShortDesc:string,Id:string}, index) => (
          <CourseCard key={index} data={{
            id: item.Id,
            title: item.CourseName,
            image: item.IconUrl,
            description: item.CourseShortDesc
           }} />
        ))}
         </Box>
        
      </Box>
      
    </Box>
  );
}
