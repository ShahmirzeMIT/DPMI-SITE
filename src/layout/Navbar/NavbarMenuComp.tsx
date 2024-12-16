import { Box, Button, Menu } from "@mui/material";
// import { Divider } from "antd";
import React, { useState } from "react";
// import NavbarMenuCard from "./NavbarMenuCard";
import TraningsMenu from "./TraningsMenu";
import CertificationMenu from "./CertificationMenu";
import ContactMenu from "./ContactMenu";

const pages = [
  {
    name: "Trainings",
    children: [<TraningsMenu key="trainings-menu" />], // Wrap in array
  },
  {
    name: "Certifications",
    children: [<CertificationMenu key="certifications-menu" />], // Wrap in array
  },
  { name: "Why Us", children: [] },
  {
    name: "Contact",
    children: [<ContactMenu key="contact-menu" />],
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
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" ,}}>
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
              '&:hover': { background: '#007AFF',color:'white' },
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
                  backgroundColor: "#007AFF",
                  color: "black",
                  padding: "20px",
                },
              }}
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
                  left: 0,
                  boxShadow: 3,
                  height: "auto",
                },
              }}
            >
              <Box sx={{ display: "flex" }}>
                {
                  page.children.map((child: any) => (
                   
                    <>
                     {child}
                    </>
                  ))
                }
               
              </Box>
            </Menu>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
}
