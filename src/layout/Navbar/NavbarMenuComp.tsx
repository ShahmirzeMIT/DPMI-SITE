import { Box, Button, Menu, MenuItem, Avatar, Link } from "@mui/material";
import { Divider } from "antd";
import React, { useState } from "react";
import NavbarMenuCard from "./NavbarMenuCard";

const pages = [
  {
    name: "Trainings",
    children: [
      { title: "Online Trainings", image: "/trainings-icon.png" },
      { title: "Online Trainings", image: "/trainings-icon.png" },
      { title: "Online Trainings", image: "/trainings-icon.png" },
      { title: "Workshops", image: "/workshops-icon.png" },
    ],
  },
  {
    name: "Certifications",
    children: [
      { title: "Certifications A", image: "/cert-a.png" },
      { title: "Certifications B", image: "/cert-b.png" },
    ],
  },
  { name: "Why Us", children: [] },
  {
    name: "Resources",
    children: [
      { title: "Blog", image: "/blog-icon.png" },
      { title: "Case Studies", image: "/case-studies-icon.png" },
    ],
  },
];

export default function NavbarMenuComp({
  handleCloseNavMenu,
}: {
  handleCloseNavMenu: any;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, page: string) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(page);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
    handleCloseNavMenu();
  };

  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      {pages.map((page) => (
        <React.Fragment key={page.name}>
          <Button
            onClick={(event) =>
              page.children.length > 0
                ? handleMenuOpen(event, page.name)
                : handleCloseNavMenu()
            }
            sx={{
              color: "black",
              fontSize: "15px",
              fontWeight: 400,
              textTransform: "capitalize",
            }}
          >
            {page.name}
          </Button>

          {/* Menu Component */}
          {page.children.length > 0 && (
            <Menu
              anchorEl={anchorEl}
              open={openMenu === page.name}
              sx={{
                "& .MuiMenu-paper": {
                  backgroundColor: "white",
                  color: "black",
                  padding:'20px'
                  // marginTop: "1rem",
                  // width: "110%",
              }}}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              PaperProps={{
                sx: {
                  // width: "100%", // Tam genişlik
                  left: 0, // Sol kənar sıfır
                  boxShadow: 3,
                  height:'218px'
                },
              }}
            >
                 <Box sx={{ display: "flex",}}>
                    {page.children.map((child) => (
                        <MenuItem
                        key={child.title}
                        onClick={handleMenuClose}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          py: 1,
                        }}
                      >
                        <Avatar
                          src={child.image}
                          alt={child.title}
                          sx={{ width: 30, height: 30 }}
                        />
                        <Link
                          href="#"
                          underline="hover"
                          sx={{ color: "inherit", fontSize: "14px", fontWeight: 500 }}
                        >
                          {child.title}
                        </Link>
                      </MenuItem>
                    
                      
                    ))}
                    <Divider style={{height:'210px',border:'1px solid rgb(223, 217, 210)'}}  type="vertical"></Divider>
                    <NavbarMenuCard/>
               </Box>
              
            </Menu>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
}
