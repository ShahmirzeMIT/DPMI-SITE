import { useEffect, useState } from 'react';
import { callApi } from '../../utils/callApi';
import { Box } from '@mui/material';
import MySkillsIntroduce from './MySkillsIntroduce';
import MyNeedsSearch from '../MyNeeds/MyNeedsSearch';
import MySkills from './MySkills';


interface Course {
  CourseId: string;
  CourseName: string;
  CourseLongDesc: string;
  CourseShortDesc: string;
  FkCertificateId?: string;
  IconUrl?: string;
  PdfUrl?: string;
  Skills: any[];
  Id:string;
}

interface Skill {
  Id: string;
  SkillName: string;
  FkCourseId: string;
  ShortDesc: string;
  LongDesc: string;
}

export default function MySkillsDetail() {
  const [coursesData, setCoursesData] = useState<Course[]>([]);
  const [filteredData, setFilteredData] = useState<Course[]>([]);

  const getData = async () => {
    const courses: Course[] = await callApi('/lms/main/course/read');
    const skills: Skill[] = await callApi('/lms/main/myneeds/skills/list');

    // Map courses and skills
    const coursesWithSkills = courses.map(course => ({
      ...course,
      Skills: skills.filter(skill => skill.FkCourseId == course.Id),
    }));
  
    setCoursesData(coursesWithSkills); // Store courses with skills
    setFilteredData(coursesWithSkills); // Set filtered data for initial display
  };

  useEffect(() => {
    getData();
  }, []);

  const onSearchData = (value: string) => {
    if (value.trim() === '') {
      setFilteredData(coursesData);
      return;
    }
  
    const filtered =coursesData.map(courses => ({
      ...courses,
      Skills: courses.Skills.filter(challenge =>
        challenge.SkillName.toLowerCase().includes(value.toLowerCase())
      ),
    })).filter(group => group.Skills.length > 0); 
  
    setFilteredData(filtered);
  };
  
  return (
    <div style={{ marginTop: '120px' }}>
      <MySkillsIntroduce />
      <MyNeedsSearch onSearchData={onSearchData} placheolder="Search Skills"  />

      {/* Render filtered data */}
      {filteredData.map((item, _index) => (
        <Box sx={{ marginBottom: '40px' }} key={item.CourseId}>
          <MySkills data={item} />
        </Box>
      ))}
    </div>
  );
}
