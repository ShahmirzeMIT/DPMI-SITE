import { Box, useMediaQuery } from "@mui/material";
import StepOver from "./StepOver";
import StepOverMobile from "./StepOverMobile";
import { certificationsListData } from "../../defaultDatas/certificationsListData";
// import RoadmapACPF from "../ACFP/RoadMapACPF";
import { DynamicFlow } from "./DynamicFlow";

// import Timeline from "./StepComponent";


export default function AnaimationPage() {
  const isMobile = useMediaQuery("(max-width:1100px)");

  const selectedData = certificationsListData.find(
    (item: any) => item.id === '1003'
  );
  
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "50px",marginTop:isMobile?'50px':'490px'}}>
    {isMobile ? <StepOverMobile data={selectedData?.courseModules || []} /> : <StepOver data={selectedData?.courseModules || []} />}
    {/* <IntroduceAnimation /> */}
    {/* <ResponsiveSteps/> */}
    {/* <RoadmapACPF/> */}
    {/* <EdgesFlow/> */}
    <DynamicFlow modules={selectedData?.courseModules || []}/>
    <Box>

    </Box>
    <Box >
      {/* <Timeline modules={selectedData?.courseModules || []} index={} /> */}

    </Box>
  </Box>
  
  )
}
