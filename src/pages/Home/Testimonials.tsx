import { Box, Typography} from "@mui/material";
import UserCards from "./UserCards";


export default function Testimonials() {
  return (
    <Box sx={{ padding: "50px 10%", backgroundColor: "#fff" }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          flexWrap: "wrap",
          width:'100%'
          
        }}
      >
        <Box sx={{width:'100%',textAlign:'center'}}>
          <Typography
            variant="h4"
            sx={{  marginBottom: "10px" ,color:'black',textAlign:'center', 
              textTransform:'uppercase',}}
          >
            Our Testimonials
          </Typography>
          
        </Box>
       
      </Box>

      {/* Testimonials Section */}
     <UserCards/>
    </Box>
  );
}
