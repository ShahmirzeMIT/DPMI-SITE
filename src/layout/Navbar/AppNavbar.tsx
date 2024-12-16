import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NavbarMenuMob from './NavbarMenuMob';
import NavbarMenuComp from './NavbarMenuComp';
import Register from './Register';
import Logo from '../../assets/images/DPM_institute__LOGO-Logo.jpg'
import { Avatar } from 'antd';


function AppNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <AppBar position="fixed" style={{  backgroundColor: "white",
      height: '70px',
      boxShadow: "none"}}>
      <Container maxWidth="xl" sx={{
           position:'relative',
      }}>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
           <Avatar src={Logo}  style={{height:'70px',width:'90px'}} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
               <Avatar src={Logo}  style={{height:'70px',width:'90px'}} />
            </IconButton>
            <NavbarMenuMob anchorElNav={anchorElNav} handleCloseNavMenu={handleCloseNavMenu}/>
          </Box>
        
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
            <NavbarMenuComp handleCloseNavMenu={handleCloseNavMenu}/>
            <Box sx={{ flexGrow: 0 ,color:'red', position:'absolute',right:'0'}}>
             <Register/>
           </Box>
             
   
        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppNavbar;
