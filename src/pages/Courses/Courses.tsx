import { Box } from "@mui/material";
import CourseCard from "./CourseCard";


import useCourseState from "./useCourseState";

export default function Courses() {
  const{data}=useCourseState()
  
  return (
    <Box sx={{ margin: "250px 0" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          width: "90%",
          margin: "0 auto",
        }}
      >
        { data.length>0 && data?.map((item:{CourseId:string,CourseName:string,IconUrl:string,CourseShortDesc:string}, index) => (
          <CourseCard key={index} data={{
            id: item.CourseId,
            title: item.CourseName,
            image: item.IconUrl,
            description: item.CourseShortDesc
           }} />
        ))}
      </Box>
      
    </Box>
  );
}
