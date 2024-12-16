import { Box } from "@mui/material";
import ProductManagerCourseView from "./ProductManagerCourseView";
import CardCertificationView from "./CardCertificationView";

export default function ProductManager() {
  return (
    <Box> 
      <ProductManagerCourseView/>
      <CardCertificationView/>
    </Box>
  );
}
