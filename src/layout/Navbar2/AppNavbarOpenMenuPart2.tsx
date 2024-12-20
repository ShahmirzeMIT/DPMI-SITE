import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Avatar } from "antd";
import Logo from '../../assets/images/DPM_institute__LOGO-Logo.jpg';
import TraningsMenu from "../Navbar/TraningsMenu";
import CertificationMenu from "../Navbar/CertificationMenu";
import ContactMenu from "../Navbar/ContactMenu";
import { useNavigate } from "react-router-dom";

const pages = [
 
  {
    name: "Certifications",
    children: [<CertificationMenu key="certifications-menu" />],
  },
  {
    name: "Courses",
    children: [<TraningsMenu key="trainings-menu" />],
  },
  { name: "Learning Management System (LMS)", children: [] },
  { name: "Our Alumni", children: [] },
  { name: "Mentor ", children: [] },
  { name: "For Individuals", children: [] },
  { name: "For Companies ", children: [] },
  {
    name: "Contact",
    children: [<ContactMenu key="contact-menu" />],
  },
];

const AppNavbarMenuPart2 = () => {
  const navigate=useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, page: string) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(page);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", color: "#333" }}>
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", md: "block" }, fontWeight: "bold" }}
        >
          <Avatar src={Logo} style={{ width: "80px", height: "60px" }} shape="square" />
        </Typography>

        {/* Menu for larger screens */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {pages.map((page) => (
            <React.Fragment key={page.name}>
              <Button
                onClick={(event) =>
                  page.children.length > 0
                    ? handleMenuOpen(event, page.name)
                    : handleMenuClose()
                }
                sx={{
                  color: "#333",
                  fontSize: "15px",
                  fontWeight: 400,
                  textTransform: "capitalize",
                  '&:hover': { background: '#007AFF', color: 'white' },
                }}
              >
                {page.name}
              </Button>

              {page.children.length > 0 && (
                <Menu
                  anchorEl={anchorEl}
                  open={openMenu === page.name}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                  PaperProps={{
                    sx: {
                      left: 0,
                      boxShadow: 3,
                      height: "auto",
                      backgroundColor: "#007AFF",
                      color: "black",
                      padding: "20px",
                    },
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    {page.children.map((child) => (
                      <React.Fragment key={child.key}>{child}</React.Fragment>
                    ))}
                  </Box>
                </Menu>
              )}
            </React.Fragment>
          ))}
          
          <Button variant="contained" sx={{ backgroundColor: "#6200EA" }}  onClick={() => navigate("/classes")} >
            Register
          </Button>

        </Box>

        {/* Hamburger menu for smaller screens */}
        
      </Toolbar>
    </AppBar>
  );
};

export default AppNavbarMenuPart2;
