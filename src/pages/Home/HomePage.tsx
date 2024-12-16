import { Box } from "@mui/material";
import Courses1 from "./Courses1";
import AboutCount from "./AboutCount";
import AboutCourses from "./AboutCourses";
import AboutTools from "./AboutTools";
import Skills from "./Skills";
import Course2 from "./Course2";
import Slider from "./Slider";
import Questions from "./Questions";
import Courses3 from "./Courses3";


export default function HomePage() {
  return (
    <Box>
      <Courses1/>
      <Course2/>
      <Courses3/>
      <AboutCount/>
      <AboutCourses/>
      <AboutTools/>
      <Skills/>
     
      <Slider/>
      <Questions/>
    </Box>
  );
}
