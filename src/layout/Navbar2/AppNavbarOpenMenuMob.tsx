import { Menu, MenuItem, Typography, Box, Collapse, Button } from "@mui/material";
import  { useState } from "react";
// import TraningsMenuMob from "../Navbar/TraningsMenuMob";
import CertificationMenu from "../Navbar/CertificationMenu";
// import ContactMenu from "../Navbar/ContactMenu";
import Lms from "./Lms";
import OurAlumni from "./OurAlumni";
import Mentors from "./Mentors";
// import TraningsMenu from "./TraningsMenu";

const pages = [
 
  {
    name: "Certifications",
    children: [<CertificationMenu key="certifications-menu" />],
  },
  {
    name: "Courses",
    page:'/courses'
  },
  { name: "Learning Management System (LMS)", children:[ <Lms/>] },
  { name: "Our Alumni", children: [<OurAlumni/>] },
  { name: "Mentor ", children: [<Mentors/> ]},
 
];

export default function AppNavbarOpenMenuMob({
  anchorElNav,
  handleCloseNavMenu,
}: {
  anchorElNav: HTMLElement | null;
  handleCloseNavMenu: () => void;
}) {
  const [openMenu, setOpenMenu] = useState<string | null>(null); // Tracks which menu is open

  const handleMenuToggle = (pageName: string) => {
    setOpenMenu((prev) => (prev === pageName ? null : pageName));
  };

  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: "block", md: "block", lg: "none" },
        margin: "10px !important",
      }}
    >
      {pages.map((page) => (
        <Box key={page.name}>
          <MenuItem
            onClick={() => handleMenuToggle(page.name)}
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "black",
                fontSize: "15px",
                fontWeight: 400,
                textTransform: "capitalize",
              }}
            >
              {page.name}
            </Typography>
          </MenuItem>

          {/* Submenu - Collapsible */}
          {page.children && Array.isArray(page.children) && page.children.length > 0 && (
            <Collapse in={openMenu === page.name} timeout="auto" unmountOnExit>
              <Box sx={{ px: 2, py: 1, backgroundColor: "white" }}>
                {page.children.map((child) => (
                  <Box key={child.key} sx={{ my: 1,display:'flex',justifyContent:'center',alignItems:'center' }}>
                    {child}
                  </Box>
                ))}
              </Box>
            </Collapse>
          )}
        </Box>
      ))}
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
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
                  marginLeft:'10px',
                  "&:hover": {
                    backgroundColor: "white",
                    color:'#2a74b1'
                  },
                }}
              >
                Find  Classes
              </Button>
      </Box>
    
    </Menu>
  );
}
