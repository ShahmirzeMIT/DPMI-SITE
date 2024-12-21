import { Box } from "@mui/material";
import CardDPMCaertificationView from "../DPM/CardDPMCaertificationView";
import CardAIPFCertificationView from "./CardAIPFCourseView";
import RoadmapAIPF from "./RoadMapAIPF";
import { aipfData } from "./aipfData";
import DigitalProductFoundationModule from "../SFP/DigitalFounDationProductModule";
import WhyAIPF from "./WhyAIPF";
import WJatGetAIPF from "./WJatGetAIPF";
import WhatLearnAIPF from "./WhatLearnAIPF";
import DetailofAIPF from "./DetailofAIPF";

export default function AIPF() {
  return (
    <Box sx={{marginTop:'230px'}}>
      <CardAIPFCertificationView/>
      <CardDPMCaertificationView/>
      <RoadmapAIPF/>
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',width:'90%',margin:'40px auto',gap:'60px',alignItems:'center'}}>
        {aipfData.map((item, index) => <DigitalProductFoundationModule key={index} data={item}/>)}
      </Box>
      <WhyAIPF/>
      <WJatGetAIPF/>
      <WhatLearnAIPF/>
      <DetailofAIPF/>
    </Box>
  )
}
