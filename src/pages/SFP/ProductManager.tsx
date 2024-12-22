import { Box } from "@mui/material";
// import ProductManagerCourseView from "./ProductManagerCourseView";
import CardCertificationView from "./CardCertificationView";

import Roadmap from "./RoadMap";
import DigitalProductFoundationModule from "./DigitalFounDationProductModule";
import { dataSFP } from "./sfpData";
// import WhySpf from "./WhySpf";
// import WhatGetSPF from "./WhatGetSPF";
// import WhatLearnSpf from "./WhatLearnSpf";
import DetailofCourse from "./DetailofCourse";
import ResponsiveSteps from "../../componets/ResponsiveSteps";

export default function ProductManager() {
  return (
    <Box sx={{marginTop:'80px'}}> 
      {/* <ProductManagerCourseView/> */}
      <ResponsiveSteps/>
      <CardCertificationView/>
      <Roadmap/>
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',width:'90%',margin:'40px auto',gap:'60px'}}>
        {dataSFP.map((item, index) => <DigitalProductFoundationModule key={index} data={item}/>)}
      </Box>
      {/* <WhySpf/> */}
      {/* <WhatGetSPF/> */}
      {/* <WhatLearnSpf/> */}
      <DetailofCourse/>
    </Box>
  );
}
