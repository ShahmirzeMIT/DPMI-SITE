import { Box,  Link, Typography } from "@mui/material";
import { Avatar } from "antd";
import { ProductManagerCardDataNavbar } from "../../defaultDatas/ProductManagerNavbar";
// import { useNavigate } from "react-router-dom";
import { allForIndividuals } from "../../defaultDatas/forindividualsData";
export default function ForIndividuals() {
//   const navigate=useNavigate()
  // State for tracking hover on individual cards

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "space-between",
           marginLeft: "20px",
           alignItems:'center',
      }}
    >
      <Box sx={{marginTop:'25px',textAlign:'start',marginRight:'40px',width:'350px'}}>
        {
          allForIndividuals.map((item:{title:string,id:string,text:string})=>{
            return(
                <>
                <Typography sx={{fontSize: "1rem", lineHeight: "1.5rem",paddingBottom:'1rem'}}> <Link href={item.id} style={{fontSize: "1rem", lineHeight: "1.5rem",paddingBottom:'1rem',color:'black',textDecoration:'none',
                    fontWeight:'bold',
                
                  cursor: "pointer",
                 }}>{item.title} </Link>
                 <br />
                <span style={{fontSize:'10px'}}>{item.text}</span>
                 </Typography>
                 
                </>
                 
               
            )
          })
        }
       
      </Box>
      <Box sx={{marginTop:'5px',width:'480px',height:'250px',display:'flex',justifyContent:'space-between',flexWrap:'wrap',boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",alignItems:'center',borderRadius:'10px',background:'#f4f4f4'}}>
        {
          ProductManagerCardDataNavbar.map((item:{image:string})=>{
            return(
              <Box>
                <Avatar src={item.image} style={{width: "10rem",height: "auto",
                  // boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:'50%'
                  }}  />
               </Box> 
            )
          })
        }
          
      </Box>
      
    </Box>
  );
}
