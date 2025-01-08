import { Box,  Link, Typography } from "@mui/material";
// import { Avatar } from "antd";
import { ProductManagerCardDataNavbar } from "../../defaultDatas/ProductManagerNavbar";
import { useNavigate } from "react-router-dom";
export default function CertificationMenuMob() {
  const navigate=useNavigate()
  // State for tracking hover on individual cards

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "space-between",
           marginLeft: "20px",
           alignItems:'center'
      }}
    >
      <Box sx={{marginTop:'25px',textAlign:'start',marginRight:'40px'}}>
        <Typography variant="h6" sx={{
          fontSize: "21px",
          fontStyle: "normal",
          fontWeight:" 400",
          lineHeight: "25px",
          letterSpacing: "0em",
          paddingBottom:'2rem',
          color: "rgb(105 105 105)",
          marginLeft:'50px',
                  padding:'10px 40px'
      
        }} onClick={() => navigate("/certificates") }> Explore All Certifications</Typography>
        {
          ProductManagerCardDataNavbar.map((item:{title:string,link:string})=>{
            return(
                 <Typography sx={{fontSize: "1rem", lineHeight: "1.5rem",paddingBottom:'1rem',
                  textAlign: "center",'&:hover':{textDecoration:'underline', whiteSpace: "wrap",}}}> <Link href={item.link} style={{fontSize: "1rem", lineHeight: "1.5rem",paddingBottom:'1rem',color:'black',textDecoration:'none',
                
                  cursor: "pointer",
                 }}>{item.title} </Link></Typography>
               
            )
          })
        }
       
      </Box>

    </Box>
  );
}
