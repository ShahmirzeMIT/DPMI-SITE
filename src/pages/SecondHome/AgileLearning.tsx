import { Box,  Typography } from "@mui/material";

import AgileCard from "../../componets/AgileCard";


const data = [
  {
    id: 1,
    title: "For Individuals",
    description:"I want to be best in my career",
    button: "Explore Certifications",
    links:"/certificates"
  },
  {
    id: 2,
    title: "For Companies",
    description: "We want fastest, measureable applicable AI Transformation",
    button: "Check our Services",
     links:"/ourservices"
  },
];

const AgileLearning = () => {
  return (
    <Box
      sx={{
        position: "relative", // Background üçün ::before istifadəsinə imkan yaratmaq
        padding: "120px 0",
        color: "white",
       
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // marginTop: "20px",
        overflow: "hidden", // Background çıxmasın deyə
      }}
    >

      {/* Məzmun */}
      <div style={{ position: "relative", zIndex: 3,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:2 }}> {/* Məzmun tünd backgroundun üstündə qalır */}
      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', gap: 2}}>
          {data.map((item) => (
              <AgileCard data={item} />
          ))}
        </Box>

        <Typography
          variant="h4"
          style={{ marginBottom: "20px", color: "black",textAlign:'center',marginLeft:'60px',lineHeight:'56px', }}
        >
          Our Certifications are  designed  to accelerate
          <br />
          career growth for individuals and support
          <br />
          companies in building reliable, measureable, and 
          <br />
          practical pathways for <span style={{color:'#fb6b22',fontWeight:'bold'}}>AI Transformation</span>
        </Typography>
      
       
      </div>
    </Box>
  );
};

export default AgileLearning;
