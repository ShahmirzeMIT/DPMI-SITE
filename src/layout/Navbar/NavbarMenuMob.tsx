import { Menu, MenuItem, Typography } from "@mui/material";



const pages = ['Trainings', 'Certifications', 'Why Us','Resources'];
export default function NavbarMenuMob({anchorElNav,handleCloseNavMenu}:{anchorElNav:any,handleCloseNavMenu:any}) {
  return (
    <Menu
    id="menu-appbar"
    anchorEl={anchorElNav}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    open={Boolean(anchorElNav)}
    onClose={handleCloseNavMenu}
    sx={{ display: { xs: 'block', md: 'none' },}}
  >
    {pages.map((page) => (
      <MenuItem key={page} onClick={handleCloseNavMenu} sx={{'&:hover': { background: 'red'} }}>
        <Typography sx={{ textAlign: 'center' ,my: 2, color: 'black', display: 'block',    fontSize: "15px",fontWeight: 400 ,textTransform: "capitalize" }}>{page}</Typography>
      </MenuItem>
    ))}
  </Menu>
  )
}
