import { Box } from "@mui/material";
import ProductManagerCourseView from "./ProductManagerCourseView";
import CardCertificationView from "./CardCertificationView";

import Roadmap from "./RoadMap";

export default function ProductManager() {
  return (
    <Box> 
      <ProductManagerCourseView/>
      <CardCertificationView/>
      <Roadmap/>
    </Box>
  );
}
