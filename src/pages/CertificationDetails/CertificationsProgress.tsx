import { Box } from "@mui/material";
import CourseStatus from "../../componets/CourseStatus";

const data = [
  {
    id: "1",
    title: "Business",
    // description: "This slide is an editable slide with all your needs.",
    // icon: <BusinessCenterIcon sx={{ fontSize: "3rem" }}/>,
  },
  {
    id: "2",
    title: "Target",
    // description: "This slide is an editable slide with all your needs.",
    // icon: <PiTargetBold style={{ fontSize: "3rem" }} />,
  },
  {
    id: "3",
    title: "Growth",
    // description: "This slide is an editable slide with all your needs.",
    // icon: <FaArrowUpShortWide  style={{ fontSize: "3rem" }}/>,
  },
  {
    id: "4",
    title: "Profit",
    // description: "This slide is an editable slide with all your needs.",
    // icon: <FaMoneyBillWave style={{ fontSize: "3rem" }} />,
  },
  {
    id: "5",
    title: "Success",
    // description: "This slide is an editable slide with all your needs.",
    // icon: <CheckCircleOutlineIcon style={{ fontSize: "3rem" }} />,
  },
];
export default function CertificationsProgress() {
  return (
    <Box sx={{ width: "80%", margin: "0 auto" }}>
      <Box>
        {data.map((item) => (
          <CourseStatus data={item} />
        ))}
      </Box>
    </Box>
  );
}
