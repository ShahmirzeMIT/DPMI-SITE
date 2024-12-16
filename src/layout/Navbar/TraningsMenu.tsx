import { Box, Typography, Grid, Link } from "@mui/material";
import { Divider } from "antd";

const menuData = [
  {
    title: "Product",
    bgClr:'#d34d27',
    options: [
      "Product Courses",
      "Certifications",
      "Foundations",
      "Instructors",
      "Team Trainings",
      "Find the Best Course for You",
    ],
  },
  {
    title: "Data",
    bgClr:'#469b9f',
    options: ["Data Courses", "Instructors"],
  },
  {
    title: "Design",
    bgClr:'#c5c36a',
    options: ["Design Courses", "Instructors"],
  },
  {
    title: "Workshops",
    bgClr:'#035195',
    options: [
      "AI Training for Product Professionals",
      "Advanced AI Techniques for Product Marketing",
      "Product Operations",
      "Market-Driven Discovery",
      "Product Positioning",
      "View All Workshops",
    ],
  },
];

export default function TraningsMenu() {
  return (
    <Box sx={{ display: "flex", gap: 4,marginLeft:'20px' }}>
      {menuData.map((section) => (
        <Box key={section.title} sx={{borderRight:'1px solid #E9EDF1',padding:'10px'}}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, mb: 2, color: "#000" }}
          >
            <span style={{background:section.bgClr,fontSize:" 17px",
          padding: "5px 10px",color:'white',marginRight:'20px'}}>{section.title.slice(0, 1)}</span>
            {section.title}
          </Typography>
          <Divider></Divider>
          <Grid container spacing={1}>
            {section.options.map((option) => (
              <Grid item xs={12} key={option}>
                <Link
                  href="#"
                  underline="hover"
                  sx={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "inherit",
                  }}
                >
                  {option}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
