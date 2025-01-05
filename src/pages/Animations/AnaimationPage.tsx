import { Box, useMediaQuery } from "@mui/material";
import StepOver from "./StepOver";
import StepOverMobile from "./StepOverMobile";
import { certificationsListData } from "../../defaultDatas/certificationsListData";


export default function AnaimationPage() {
  const isMobile = useMediaQuery("(max-width:1100px)");
  const selectedData = certificationsListData.find(
    (item: any) => item.id === '1006'
  );
  
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "50px",marginTop:isMobile?'50px':'490px' }}>
    {isMobile ? <StepOverMobile data={selectedData?.courseModules || []} /> : <StepOver data={selectedData?.courseModules || []} />}
    {/* <IntroduceAnimation /> */}
  </Box>
  
  )
}
