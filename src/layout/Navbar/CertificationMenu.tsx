import { Box,  Link, Typography } from "@mui/material";
import { Avatar } from "antd";
import { ProductManagerCardDataNavbar } from "../../defaultDatas/ProductManagerNavbar";
export default function CertificationMenu() {
  // State for tracking hover on individual cards

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "space-between",
           marginLeft: "60px",
      }}
    >
      <Box sx={{marginTop:'25px'}}>
        <Typography variant="h6" sx={{
          fontSize: "21px",
          fontStyle: "normal",
          fontWeight:" 400",
          lineHeight: "25px",
          letterSpacing: "0em",
          paddingBottom:'2rem',
          color: "rgb(105 105 105)",
          fontFamily:" Cabin, sans-serif !important",
        }}>Certification Resources</Typography>
        {
          ProductManagerCardDataNavbar.map((item:{title:string,link:string})=>{
            return(
                 <Typography sx={{fontSize: "1rem", lineHeight: "1.5rem",paddingBottom:'1rem','&:hover':{textDecoration:'underline'}}}> <Link href={item.link} style={{fontSize: "1rem", lineHeight: "1.5rem",paddingBottom:'1rem',color:'black',textDecoration:'none',
                  fontFamily:" Cabin, sans-serif !important",
                  cursor: "pointer",
                 }}>{item.title} </Link></Typography>
               
            )
          })
        }
       
      </Box>
      <Box sx={{marginTop:'5px',width:'600px',display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
        {
          ProductManagerCardDataNavbar.map((item:{image:string})=>{
            return(
              <Box>
                <Avatar src={item.image} style={{width: "10rem",height: "auto"}}  shape="square"/>
               </Box> 
            )
          })
        }
          
      </Box>
      
    </Box>
  );
}
