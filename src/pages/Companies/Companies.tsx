import { Box } from "@mui/material";
import FosteringDigital from "./FosteringDigital";
import AgileTransformation from "./AgileTransformation";
import AgileCommunicationCulture from "./AgileCommunicationCulture";
import AgileAssesMent from "./AgileAssesMent";
// import AgileTransformationComponent from "./AgileTransformation";


export default function Companies() {
  return (
    <Box sx={{marginTop:'120px',minHeight:'80vh'}}>
        <FosteringDigital/>
        <AgileTransformation/>
        <AgileCommunicationCulture/>
        <AgileAssesMent/>
    </Box>
  )
}
