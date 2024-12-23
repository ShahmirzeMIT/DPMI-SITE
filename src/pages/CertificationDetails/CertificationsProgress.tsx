import { Box } from "@mui/material";
import CourseStatus from "../../componets/CourseStatus";

interface CertificationsProgressProps{
  data: {
    id: string;
    title: string;
    shortDesc?: string;
  }[];  
  // title?: string;
}
export default function CertificationsProgress({ data }:CertificationsProgressProps) {
  return (
    <Box sx={{ width: "80%", margin: "20px auto" }}>
      <Box>
        {data.map((item) => (
          <CourseStatus data={item} />
        ))}
       
      </Box>
    </Box>
  );
}
