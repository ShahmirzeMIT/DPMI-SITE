import { Box } from "@mui/material";
import FosteringDigital from "./FosteringDigital";
import AgileTransformation from "./AgileTransformation";
import AgileCommunicationCulture from "./AgileCommunicationCulture";
import AgileAssesMent from "./AgileAssesMent";
import CompaniesAIransformation from "./CompaniesAIransformation";
import CompainesDigitalTransformation from "./CompainesDigitalTransformation";

// import AgileTransformationComponent from "./AgileTransformation";


export default function Companies() {
  return (
    <Box sx={{marginTop:'120px',minHeight:'80vh',}}>
        <FosteringDigital/>
      <Box sx={{maxWidth:'1200px',margin:'0 auto'}}>
     
        <CompaniesAIransformation/>
        <CompainesDigitalTransformation/>
        <AgileTransformation/>
        <AgileCommunicationCulture/>
        <AgileAssesMent/>
      </Box>
        
    </Box>
  )
}
