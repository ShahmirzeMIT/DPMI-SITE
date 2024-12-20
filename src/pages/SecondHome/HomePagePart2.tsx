import { Box } from '@mui/material'

import FirstCourse from './FirstCourse'
import SecondCourse from './SecondCourse'
import ThirdCourse from './ThirdCourse'
import FourthCourse from './Fourth'
import AboutCourses from '../Home/AboutCourses'
import Testimonials from '../Home/Testimonials'
import AgileLearning from './AgileLearning'
import Slider from '../Home/Slider'

export default function HomePagePart2() {
  return (
    <Box>
        <AgileLearning/>
        <FirstCourse/>
        <SecondCourse/>
        <ThirdCourse/>
        <FourthCourse/>
        <AboutCourses/>
        <Testimonials/>
        <Slider/>
    </Box>
  )
}
