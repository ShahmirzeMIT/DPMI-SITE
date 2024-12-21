import { Box } from "@mui/material";
import CourseCard from "./CourseCard";
import { dataCourses } from "./courseData";


export default function Courses() {
  return (
    <Box sx={{margin:'150px 0'}}>
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'20px',width:'90%',margin:'0 auto'}}>
         {
          dataCourses.map((item, index) => <CourseCard key={index} data={item}/>)
         }
      </Box>
      
    </Box>
  )
}
