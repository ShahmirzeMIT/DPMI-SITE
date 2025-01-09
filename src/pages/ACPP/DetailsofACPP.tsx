
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from "@mui/material";
import { Avatar, Typography } from "antd";
import  Logo from '../../assets/images/research.png'
// Məlumat nümunəsi
const coursesData = [
  {
    id: 1,
    name: "MVP Development",
    description:
      "In digital/agile transformation and product management, pages and forms are essential visual tools that represent digital products. Participants will learn how to effectively visualize, understand the interrelations of pages and forms, and use components to align with business requirements.",
    total: 8,
    interactivePractice: 5,
    realProject: 3,
  },
  {
    id: 2,
    name: "Product Requirement Analysis",
    description:
      "User acceptance criteria are vital in agile communication, providing a clear guide for what needs to be delivered, tested, and coded. Participants will learn to analyze product requirements and define precise acceptance criteria, ensuring clarity across business, research, and development teams.",
    total: 8,
    interactivePractice: 5,
    realProject: 3,
  },
];

const DetailofACPP = () => {
  return (
    <Box sx={{margin:'60px auto'}}>
      <Typography style={{color:'black',fontSize:'30px',fontWeight:'600',textAlign:'start',marginLeft:'80px'}}>
       <Avatar src={Logo} style={{width:'60px',height:'60px',marginRight:'20px'}} shape="square" />
       Details of the Courses</Typography>
       <TableContainer component={Paper} sx={{ marginTop: 4, maxWidth: 900, marginX: "auto" }}>
      <Table>
        <TableHead sx={{ backgroundColor: "#FF9800" }}>
          <TableRow>
            <TableCell sx={{ color: "white", fontWeight: "bold", border: "1px solid black" }}>
              N
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", border: "1px solid black" }}>
              Course Name
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", border: "1px solid black" }}>
              Short Description
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", border: "1px solid black" }}>
              Total
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", border: "1px solid black" }}>
              Interactive Practice
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold", border: "1px solid black" }}>
              Real Project
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coursesData.map((course, index) => (
            <TableRow key={course.id}>
              <TableCell sx={{ border: "1px solid black" }}>{index + 1}</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>{course.name}</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>{course.description}</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>{course.total}</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>{course.interactivePractice}</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>{course.realProject}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>

  );
};

export default DetailofACPP;
