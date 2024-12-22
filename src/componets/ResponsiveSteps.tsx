import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { PiTargetBold } from "react-icons/pi";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const steps = [
  {
    title: "Business",
    description: "This slide is an editable slide with all your needs.",
    icon: <BusinessCenterIcon sx={{ fontSize: "3rem" }}/>,
  },
  {
    title: "Target",
    description: "This slide is an editable slide with all your needs.",
    icon: <PiTargetBold style={{ fontSize: "3rem" }} />,
  },
  {
    title: "Growth",
    description: "This slide is an editable slide with all your needs.",
    icon: <FaArrowUpShortWide  style={{ fontSize: "3rem" }}/>,
  },
  {
    title: "Profit",
    description: "This slide is an editable slide with all your needs.",
    icon: <FaMoneyBillWave style={{ fontSize: "3rem" }} />,
  },
  {
    title: "Success",
    description: "This slide is an editable slide with all your needs.",
    icon: <CheckCircleOutlineIcon style={{ fontSize: "3rem" }} />,
  },
];

const ResponsiveSteps = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      sx={{
        position: "relative",
        height: isMobile ? "auto" : "100vh",
        marginLeft: isMobile ? "0" : "50px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: isMobile ? "center" : "flex-start",
        gap: isMobile ? "0" : "20px",
      }}
    >
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            color: "white",
            // padding: "20px",
            // borderRadius: "8px",
            textAlign: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            width: "250px",
            height: "220px",
            margin: isMobile ? "20px auto" : "0",
            position: isMobile ? "relative" : "absolute",
            left: isMobile ? "unset" : `${index * 19}%`,
            bottom: isMobile ? "unset" : `${index * 15}%`,
            transform: isMobile ? "translateX(0)" : "translateX(0)",
          }}
        >
            <Box sx={{width:'100%',backgroundColor:'#1976d2',paddingBottom:'28px',paddingTop:'10px'}}> {step.icon}  </Box>
          <Box
            sx={{
              width: "100%",
              height: "100px",
              backgroundColor: "white",
              marginBottom: "10px",
              color:'black',
              fontWeight:'bold',
              fontSize:'23px',
              textAlign:'start',
              marginLeft:'25px'
            }}
          >
            {step.title}
          </Box>
            {
                index !== steps.length - 1 && <Box sx={{ position: "absolute", top: "10px", right: "10px",borderLeft:'3px dashed black',width:'20px',height:'220px',translate:'180% -59%'}}></Box>
            }
            {/* <Box sx={{ position: "absolute", top: "10px", right: "10px",borderLeft:'2px dashed black',width:'20px',height:'190px',translate:'180% -70%'}}></Box> */}
          
          <Typography
            variant="h6"
            sx={{ fontSize: "16px", fontWeight: "bold" }}
          >
            
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "12px", marginTop: "5px" }}
          >
            {step.description}
          </Typography>
        </motion.div>
      ))}
    </Box>
  );
};

export default ResponsiveSteps;
