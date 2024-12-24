import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Avatar } from "antd";
import Logo from '../../assets/images/logoSite.png';
import CertificationMenu from "../Navbar/CertificationMenu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ForIndividuals from "./ForIndividuals";
import ForCompanies from "./ForCompaines";

const pages = [
  {
    name: "Certifications",
    children: [<CertificationMenu key="certifications-menu" />],
  },
  {
    name: "Courses",
    page: '/courses',
  },
  { name: "AI-Simulation", 
    page: '/lms',
  },
  { name: "For Individuals", 
    children: [<ForIndividuals key="for-individuals-menu"/>], 
   
  },
  { name: "For Companies", 
    children: [<ForCompanies key="for-companies-menu"/>], 
    page: '/companies',
  },
];

const openPage = ['Courses', "AI-Simulation",];

const AppNavbarMenuPart2 = () => {
  const navigate = useNavigate();
  const [_anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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


  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", color: "#333", boxShadow: 'none',padding:'10px 0 20px 0' }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left side: Logo */}
        <Box sx={{ display: "flex", alignItems: "center",paddingTop:'10px' }}>
          <Avatar
            src={Logo}
            style={{ width: "150px", height: "70px" }}
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
                    padding:'2px 5px',
                    borderBottom: "2px solid white",
                    "&:hover": {
                      borderBottom: "2px solid #2a74b1",
                      // textDecoration: "underline",
                      // textDecorationColor: "#2a74b1",
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
                {openMenu === page.name && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: "60px",
                          left:"15vw",
                          zIndex: 1000,
                          display: "flex",
                          flexDirection: "row", // Horizontal düzülüş
                          justifyContent: "center", // Horizontal mərkəzləşdirmə
                          alignItems: "center", // Şaquli Mərkəzlik
                          backgroundColor: "white",
                          border: "1px solid #ddd",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                          borderRadius: "4px",
                          padding: "10px 0",
                          borderTop:'2px solid #2a74b1',
                        }}
                        onMouseLeave={() => setOpenMenu(null)} // Mouse çıxanda bağlanır
                      >
                        {page.children?.map((child, index) => (
                          <Box
                            key={index}
                            sx={{
                              padding: "8px 16px",
                              color: "#333",
                              cursor: "pointer",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                             
                            }}
                            onClick={() => {
                              setOpenMenu(null); 
                            }}
                          >
                            {child}
                          </Box>
                        ))}
                      </Box>
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
              fontFamily:" Cabin, sans-serif !important",
              "&:hover": {
                textDecoration: "none",
                backgroundColor: "#2a74b1",
                color: 'white'
              },
            }}
            onClick={() => navigate("/classes")}
          >
            Register
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2a74b1",
              color: "#fff",
              textTransform: "capitalize",
              fontSize: "15px",
              border: '1px solid #2a74b1',
              fontFamily:" Cabin, sans-serif !important",
              "&:hover": {
                backgroundColor: "white",
                color: '#2a74b1'
              },
            }}
            onClick={() => navigate("/classes")}
          >
            Find A Classes
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavbarMenuPart2;
