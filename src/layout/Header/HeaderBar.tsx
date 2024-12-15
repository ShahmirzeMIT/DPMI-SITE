
import { Box } from "@mui/material";
import {  Header } from "antd/es/layout/layout";
import Navbar from "../Navbar/AppNavbar";
// const headerStyle = {
//     width: '100%',
//     textAlign: 'center' as const,
//     color: '#fff',
//     height: 64,
//     paddingInline: 48,
//     lineHeight: '64px',
//     backgroundColor: '#4096ff',
//   };

export default function HeaderBar() {
  return (
    <Box>
        <Header style={{ backgroundColor: "#FFFFFF" }} >
          <Navbar/>
        </Header>
    </Box>
  )
}
