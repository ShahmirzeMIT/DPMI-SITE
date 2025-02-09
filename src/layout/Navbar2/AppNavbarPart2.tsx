import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { CiMenuBurger } from "react-icons/ci";
import { Box } from "@mui/material";
import { Avatar } from "antd";
import Logo from "../../assets/images/DPM_institute__LOGO-Logo.jpg";
import AppNavbarMenuPart2 from "./AppNavbarOpenMenuPart2";
import AppNavbarOpenMenuMob from "./AppNavbarOpenMenuMob";
import { useNavigate } from "react-router-dom";

const AppNavbarPart2 = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        color: "#333",
        boxShadow: "none",
        borderBottom: "none",
      }}
    >
      <Toolbar sx={{ boxShadow: "none" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          onClick={() => navigate("/")}
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "none", lg: "block" },
            fontWeight: "bold",
          }}
        >
          {/* <Avatar src={Logo} style={{width: "11rem",height: "auro",cursor:'pointer'}}  shape="square" onClick={()=>navigate('/')} /> */}
        </Typography>

        {/* Menu for larger screens */}
        <Box
          sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
        >
          <AppNavbarMenuPart2 />
        </Box>

        {/* Hamburger menu for smaller screens */}
        <Box
          sx={{
            display: { xs: "block", sm: "block", md: "block", lg: "none" },
            paddingTop: "20px",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleMenuOpen}
            sx={{ position: "absolute", top: "0px", right: "0" }}
          >
            <CiMenuBurger />
          </IconButton>
          <AppNavbarOpenMenuMob
            anchorElNav={anchorEl}
            handleCloseNavMenu={handleMenuClose}
          />
        </Box>
      </Toolbar>
      <Avatar
        src={Logo}
        style={{
          width: "5rem",
          height: "60px",
          position: "absolute",
          top: "-10px",
          left: "0",
          cursor: "pointer",
        }}
        shape="square"
        onClick={() => navigate("/")}
      />
    </AppBar>
  );
};

export default AppNavbarPart2;
