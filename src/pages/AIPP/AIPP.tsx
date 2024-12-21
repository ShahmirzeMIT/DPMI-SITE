import { Box } from "@mui/material";
import CardDPMCaertificationView from "../DPM/CardDPMCaertificationView";
import CardAIPPCertificationView from "./CardAIPPCourseview";


export default function AIPP() {
  return (
    <Box sx={{marginTop:'230px'}} >
      <CardAIPPCertificationView/>
      <CardDPMCaertificationView/>
    </Box>
  )
}
