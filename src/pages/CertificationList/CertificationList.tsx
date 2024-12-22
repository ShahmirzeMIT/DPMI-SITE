import { Box, Grid, Typography } from "@mui/material";
import { ProductManagerCardDataNavbar } from "../../defaultDatas/ProductManagerNavbar";
import { Avatar } from "antd";
import { ProductManagerCardData } from "../../defaultDatas/productManagerCardDefaultData";
import CertificateCard from "../SecondHome/CertificateCard";



export default function CertificationList() {
  return (
    <Box sx={{ padding: "40px", backgroundColor: "#f7f7f7",  height: { xs: "auto" }, marginTop:'120px'}}>
    <Grid container spacing={4} alignItems="center">
      {/* Left Side */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: "black", mb: 2 }}
        >
        Achive Excellence with Our Certifications
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", mb: 4, fontSize:'18px' ,lineHeight:'27px',letterSpacing:'0' }}>
        This certification is designed for individuals who are taking their first steps into the startup world or want to strengthen their existing knowledge and skills. It covers the stages of developing and launching a digital product based on market demand. The main topics include market analysis, segmentation, page design, database and API design, creating an MVP, calculating budget and time, and the product launch phase
        </Typography>
        

      </Grid>

      {/* Right Side */}
      <Grid item xs={12} md={6} display={{ xs: "none", md: "block" }}>
      <Box sx={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
        {
          ProductManagerCardDataNavbar.map((item:{image:string})=>{
            return(
              <Box>
                <Avatar src={item.image} style={{width: "12rem",height: "auto",
                  // boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:'50%'
                  }}  />
               </Box> 
            )
          })
        }
          
      </Box>
      </Grid>
    </Grid>
    <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',width:'100%',margin:'0 auto',gap:4,  marginBottom:'60px',marginTop:'140px' }}>
                {
                   ProductManagerCardData.map((item:{title:string,image:string,text:string}, index) => <CertificateCard data={{
                      id:index.toString(),
                      title:item.title,
                      image:item.image,
                      text:item.text
                    }} key={index}/>)
                }
            </Box>
  </Box>
  )
}
