import { Menu, MenuItem, Typography, Box, Collapse, Button } from "@mui/material";
import  { useState } from "react";
import TraningsMenuMob from "../Navbar/TraningsMenuMob";
import CertificationMenu from "../Navbar/CertificationMenu";
import ContactMenu from "../Navbar/ContactMenu";
// import TraningsMenu from "./TraningsMenu";


const pages = [
  { name: "Trainings", children: [<TraningsMenuMob key="trainings-menu" />] },
  { name: "Certifications", children: [<CertificationMenu key="certifications-menu" />] },
  { name: "Why Us", children: [] },
  { name: "Contact", children: [<ContactMenu key="contact-menu" />] },
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
      sx={{ display: { xs: "block", md: "block", lg: "none" },margin:'10px !important' }}
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
          {page.children.length > 0 && (
            <Collapse in={openMenu === page.name} timeout="auto" unmountOnExit>
              <Box sx={{ px: 2, py: 1, backgroundColor: "#007AFF" }}>
                {page.children.map((child) => (
                  <Box key={child.key} sx={{ my: 1 }}>
                    {child}
                  </Box>
                ))}
              </Box>
            </Collapse>
          )}
           
        </Box>
      ))}
        <Button variant="contained" sx={{ backgroundColor: "transparent", color: "black", border: 'none', boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
              textDecoration: 'underline'
            }}}>
            Login
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#6200EA" ,marginRight:'10px'}}>
            Register
          </Button>
    </Menu>
  );
}
