import { Box } from '@mui/material'

import FirstCourse from './FirstCourse'
import SecondCourse from './SecondCourse'
import ThirdCourse from './ThirdCourse'
import FourthCourse from './Fourth'
import AboutCourses from '../Home/AboutCourses'

export default function HomePagePart2() {
  return (
    <Box>
        <FirstCourse/>
        <SecondCourse/>
        <ThirdCourse/>
        <FourthCourse/>
        <AboutCourses/>
    </Box>
  )
}