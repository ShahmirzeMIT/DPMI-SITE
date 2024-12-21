import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Avatar } from "antd";
import Logo from '../../assets/images/DPM_institute__LOGO-Logo.jpg';
import CertificationMenu from "../Navbar/CertificationMenu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const pages = [
  {
    name: "Certifications",
    children: [<CertificationMenu key="certifications-menu" />],
  },
  {
    name: "Courses",
    page: '/courses',
  },
  { name: "Learning Management System (LMS)", 
    page: '/lms',
  },
  { name: "For Individuals", 
    children: [], 
    page: '/for-individuals',
  },
  { name: "For Companies", 
    children: [], 
    page: '/for-companies',
  },
];

const openPage = ['Courses', 'Learning Management System (LMS)', 'For Individuals', 'For Companies'];

const AppNavbarMenuPart2 = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, page: string) => {
    if (openPage.includes(page)) {
      // If the page is in the openPage array, navigate directly
      navigate(pages.find(p => p.name === page)?.page || '/');
    } else {
      // Otherwise, open the menu dropdown
      setAnchorEl(event.currentTarget);
      setOpenMenu(page);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", color: "#333", boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left side: Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={Logo}
            style={{ width: "200px", height: "auto" }}
            shape="square"
            onClick={()=>navigate('/')}
          />
        </Box>

        {/* Center Menu */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {
            pages.map((page) => (
              <Box key={page.name}>
                <Box
                  sx={{
                    color: "#000",
                    textTransform: "capitalize",
                    fontSize: "15px",
                    lineHeight: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    padding:'10px 5px',
                    "&:hover": {
                      backgroundColor: "#2a74b1",
                      color: 'white',
                      borderRadius:'3px',
                    },
                  }}
                  onClick={(event) => handleMenuOpen(event, page.name)}
                >
                  {page.name}
                  {openPage.includes(page.name) ? null : (
                    openMenu === page.name
                      ? <IoIosArrowUp style={{ marginTop: '2px' }} />
                      : <IoIosArrowDown style={{ marginTop: '2px' }} />
                  )}
                </Box>
                {openMenu === page.name && !openPage.includes(page.name) && (
                    <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    sx={{
                      "& .MuiMenu-paper": {
                        display: 'flex',
                        flexDirection: 'row', // Horizontal düzülüş
                        justifyContent: 'center', // Elementləri horizontal mərkəzləşdir
                        alignItems: 'center', // Şaquli mərkəzləşdir
                        backgroundColor: "white",
                      },
                    }}
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
            ))
          }
        </Box>

        {/* Right side: Login and Register */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="text"
            sx={{
              color: "#000",
              textTransform: "capitalize",
              border: '1px solid #2a74b1',
              fontSize: "15px",
              "&:hover": {
                textDecoration: "none",
                backgroundColor: "#2a74b1",
                color: 'white'
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
              border: '1px solid #2a74b1',
              "&:hover": {
                backgroundColor: "white",
                color: '#2a74b1'
              },
            }}
            onClick={() => navigate("/classes")}
          >
            Find A Class
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavbarMenuPart2;
