import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { CiMenuBurger } from "react-icons/ci";
import { Box } from "@mui/material";
import { Avatar } from "antd";
import Logo from '../../assets/images/DPM_institute__LOGO-Logo.jpg'
import AppNavbarMenuPart2 from "./AppNavbarOpenMenuPart2";
import AppNavbarOpenMenuMob from "./AppNavbarOpenMenuMob";

const AppNavbarPart2 = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", color: "#333",boxShadow:'none',borderBottom:'none' }}>
      <Toolbar sx={{boxShadow:'none'}}>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", md: "none", lg: "block" }, fontWeight: "bold" }}
        >
         <Avatar src={Logo} style={{width: "11rem",height: "auro"}}  shape="square"/>
        </Typography>

        {/* Menu for larger screens */}
        <Box sx={{ display: { xs: "none"  ,md: "flex", lg: "flex" }, gap: 2 }}>
         <AppNavbarMenuPart2/>
        </Box>

        {/* Hamburger menu for smaller screens */}
        <Box sx={{ display: { xs: "block", md: "none" ,lg:'none'} }}>
          <IconButton edge="start" color="inherit" onClick={handleMenuOpen}  sx={{position:'absolute',top:'0px',right:'0'}}>
          <CiMenuBurger />
          </IconButton>
          <AppNavbarOpenMenuMob anchorElNav={anchorEl} handleCloseNavMenu={handleMenuClose} />
             
         
        </Box>
     
      </Toolbar>
      <Avatar src={Logo} style={{ width: "80px", height: "50px",position:'absolute',top:'0px',left:'0' }} shape="square" />
    </AppBar>
  );
};

export default AppNavbarPart2;