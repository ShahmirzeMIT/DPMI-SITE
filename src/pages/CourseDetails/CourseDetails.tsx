
import { Box, Typography } from "@mui/material";
import {  useParams } from "react-router-dom";
import CourseDetailHeader from "./CourseDetailHeader";
import { useEffect, useState } from "react";
import { callApi } from "../../utils/callApi";
import ShortDesc from "./ShortDesc";
import OutCome from "./OutCome";
import CourseHours from "./CourseHours";
import TopicCards from "./TopicCards";
import Logo from '../../assets/images/evaluation.png'
import { Avatar } from "antd";
import { curseDataDetail } from "./courseDetailData";
import WhatLearnDPM from "../DPM/WhatLearnDPM";
import WhatGetACPP from "../ACPP/WhatGetACPP";

const CourseDetails = () => {
  const { courseId } = useParams(); 
  const [data,setData]=useState<{
    CourseId: string;
    CourseName: string;
    IconUrl: string;
    CourseShortDesc: string;
  }>({
    CourseId: "",
    CourseName: "",
    IconUrl: "",
    CourseShortDesc: "",
  })

  const fetchData = async () => {
    const res=await  callApi('/lms/main/course/read')
    if(res){
      const data=res.find((item:{CourseId:string})=>item.CourseId===courseId)
        console.log(data,'data');
        setData(data)
    }
    
    
    
 }
 useEffect(() => {
     fetchData()
 },[])
  return (
    <Box sx={{marginTop:'230px',minHeight:'80vh'}}>
        <CourseDetailHeader data={{title:data.CourseName,img:data.IconUrl}} />
        <Box sx={{width:'90%',margin:'60px auto'}}>
           <ShortDesc data={{shortDesc:data.CourseShortDesc}}/>
           <OutCome/>
           <CourseHours/>
           <Box>
           <Typography variant='h3' sx={{color:'black',fontSize:'30px',fontWeight:'bold',marginBottom:'10px',textAlign:'start'}}>
            <Avatar src={Logo} style={{width:'70px',height:'70px',marginRight:'5px'}} shape="square" />
            Topics</Typography>
            <Box sx={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center'}}>
                {
                curseDataDetail.map((item,_index)=>(
                  <TopicCards data={item}/>
                ))
              }
            </Box>
           </Box>
          
        </Box>
        <WhatLearnDPM/>
        <WhatGetACPP/>
       
    </Box>
  );
};

export default CourseDetails;
