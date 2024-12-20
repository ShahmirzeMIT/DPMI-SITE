import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Avatar } from "antd";
import Logo from '../../assets/images/DPM_institute__LOGO-Logo.jpg';
// import TraningsMenu from "../Navbar/TraningsMenu";
import CertificationMenu from "../Navbar/CertificationMenu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const pages = [
 
  {
    name: "Certifications",
    children: [<CertificationMenu key="certifications-menu" />],
  },
  {
    name: "Courses",
    page:'/courses'
    // children: [<TraningsMenu key="trainings-menu" />],
  },
  { name: "Learning Management System (LMS)", children: [] },
  { name: "Our Alumni", children: [] },
  { name: "Mentor ", children: [] },
  // { name: "For Individuals", children: [] },
  // { name: "For Companies ", children: [] },
 
];

const openPage=['Courses']
const AppNavbarMenuPart2 = () => {
  const navigate=useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, page: string) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(page);
    openPage.includes(page) && navigate('/courses')
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", color: "#333" ,boxShadow:'none'}}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Sol tərəf: Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={Logo}
            style={{ width: "120px", height: "auto" }}
            shape="square"
          />
        </Box>

        {/* Ortadakı Menü */}
        <Box sx={{ display: "flex", gap: 2 }}>
         {
           pages.map((page) => (
            <Box key={page.name}>
              <Box
                // variant="text"
                sx={{
                  color: "#000",
                  textTransform: "capitalize",
                  fontSize: "15px",
                   lineHeight: "1.5rem",
                   display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    textDecoration: "underline",
                    
                  },
                }}
                onClick={(event) => handleMenuOpen(event, page.name)}
              >
                {page.name} {openMenu === page.name  ? <IoIosArrowUp  style={{marginTop:'2px',display:page.name=="Courses"?"none":"block"}}/> : <IoIosArrowDown style={{marginTop:'2px',display:page.name=="Courses"?"none":"block"}}/>}
              </Box>
              {openMenu === page.name  && (
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  {page.children}
                </Menu>
              )}  
            </Box>

           )
         )}
         
        </Box>

        {/* Sağ tərəf: Login və Register */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="text"
            sx={{
              color: "#000",
              textTransform: "capitalize",
              border:'1px solid #2a74b1',
              fontSize: "15px",
              "&:hover": {
                textDecoration: "none",
                backgroundColor: "#2a74b1",
                color:'white'
              },
            }}
          >
           Sign In
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2a74b1",
              color: "#fff",
              textTransform: "capitalize",
              fontSize: "15px",
              border:'1px solid #2a74b1',
              "&:hover": {
                backgroundColor: "white",
                color:'#2a74b1'
              },
            }}
          >
            Find A Class
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavbarMenuPart2;
