import { Box, Link, Typography } from "@mui/material";
import { LmsData } from "../../defaultDatas/aboutLms";
import  Logo from '../../assets/images/lms.jpg'
import { Avatar } from "antd";

export default function Lms() {
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
        color: "rgb(105 105 105)"
      }}>Learning Management System</Typography>
      {
        LmsData.map((item:{title:string})=>{
          return(
               <Typography sx={{fontSize: "1rem", lineHeight: "1.5rem",paddingBottom:'1rem','&:hover':{textDecoration:'underline'}}}> <Link style={{fontSize: "1rem", lineHeight: "1.5rem",paddingBottom:'1rem',color:'black',textDecoration:'none',
                cursor: "pointer",
               }}>{item.title} </Link></Typography>
             
          )
        })
      }
     
    </Box>
    <Box sx={{marginTop:'35px',width:'600px',display:'flex',justifyContent:'center',flexWrap:'wrap',
       
    }}>
      {/* {/* {
        ProductManagerCardData.map((item:{image:string})=>{
          return( */}
            <Box>
              <Avatar src={Logo} style={{width: "25rem",height: "auto", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}  shape="square"/>
             </Box> 
          {/* )
        })
      } */} 
        
    </Box>
    
  </Box>
  )
}
