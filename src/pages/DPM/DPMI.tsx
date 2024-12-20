import { Box } from "@mui/material";
import DPMCourseViewCard from "./DPMCourseViewCard";
import CardDPMCaertificationView from "./CardDPMCaertificationView";
import RoadmapDPM from "./RoadMapDPM";
import { dpmData } from "./dpmData";
import DigitalProductFoundationModule from "../SFP/DigitalFounDationProductModule";
import WhyDpm from "./WhyDpm";
import WhatGetDPM from "./WhatGetDPM";
import WhatLearnDPM from "./WhatLearnDPM";
import DetailofDpmCourse from "./DetailofDpmCourse";

export default function DPMI() {
  return (
    <Box> 
      <DPMCourseViewCard/>
      <CardDPMCaertificationView/>
      <RoadmapDPM/>
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',width:'90%',margin:'40px auto',gap:'60px'}}>
        {dpmData.map((item, index) => <DigitalProductFoundationModule key={index} data={item}/>)}
      </Box>
      <WhyDpm/>
      <WhatGetDPM/>
      <WhatLearnDPM/>
      <DetailofDpmCourse/>
    </Box>
  );
}
