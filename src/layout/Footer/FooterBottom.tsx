
import { Box, Typography, Link } from "@mui/material";
import {  FaLinkedin } from "react-icons/fa6";
import Logo from "../../assets/images/image.png"; // Replace with your logo path
import { IoIosMail } from "react-icons/io";
import { HiPhone } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";
// import { ProductManagerCardDataNavbar } from "../../defaultDatas/ProductManagerNavbar";
export default function FooterBottom() {
  const deployTime = "23:51";
 const navigate = useNavigate();
 const startYear = 2024; // Starting year
  const currentYear = new Date().getFullYear();

  const data=[
    {
      id:'/certificates',
      title:'Certifications',
    },
    {
      id:'/courses',
      title:'Courses',
    },
    {
      id:'/aisimulation',
      title:'AI Simulations',
    },
   
    {
      id:'/mychallanges',
      title:'My Challanges',
    },
    {
      id:'/myskills',
      title:'My Skills',
    },
  ]
  const data2=[
    {
      id:'/companies',
      title:'For Companies',
    },
    {
      id:'/classes',
      title:'Find Classes',
    },
    {
      id:'https://dpminstitute.org/my/login',
      title:'Login',
    },
    {
      id:'/termofuse',
      title:'Term of Use',
    },
    {
      id:'/privacy',
      title:'Privacy Statement',
    },
    {
      id:'/legalnotice',
      title:'Legal Notice',
     },
   
  ]
  return (
<Box
  component="footer"
  sx={{
    backgroundColor: "#fff",
    color: "#333",
    padding: { xs: "20px 5%", sm: "30px 8%", md: "40px 10%" },
    borderTop: "1px solid #E0E0E0",
    textAlign: { xs: "center", sm: "left" }, // Mobilde merkezleme
  }}
>
  {/* Top Section */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr", // Mobil cihazlar
        sm: "1fr 1fr", // Tablet
        md: "1.5fr 1fr 1fr 1fr", // Desktop
      },
      gap: { xs: "20px", md: "30px" },
      justifyContent: { xs: "center", sm: "space-between" }, // Mobilde ortalama
    }}
  >
    {/* Logo and Contact Info */}
    <Box
      sx={{
        textAlign: { xs: "center", sm: "left" }, // Mobilde merkezleme
      }}
    >
      <Avatar
        onClick={() => navigate("/")}
        shape="square"
        src={Logo}
        alt="DPMI Logo"
        style={{
          width: "120px",
          height: "44px",
          marginBottom: "10px",
          cursor: "pointer",
        }}
      />
      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px" },
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" }, // Mobilde ortalama
          alignItems: "center",
          gap: "5px",
        }}
      >
        <IoIosMail style={{ color: "#333", fontSize: "20px" }} />
        info@dpminstitute.org
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px" },
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" }, // Mobilde ortalama
          alignItems: "center",
          gap: "5px",
        }}
      >
        <HiPhone style={{ color: "#333", fontSize: "20px" }} />
        +49 176 36820503
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "16px" },
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" }, // Mobilde ortalama
          alignItems: "center",
          gap: "5px",
        }}
      >
        <IoLocationOutline style={{ color: "#333", fontSize: "20px" }} />
        Fuchslöcherstraße 7, 07749 Jena, Germany
      </Typography>
    </Box>

    {/* Certificates */}
    <Box
      sx={{
        textAlign: { xs: "center", sm: "left" }, // Mobilde merkezleme
      }}
    >
      {data.map((item, index) => (
        <Typography
          key={index}
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            cursor: "pointer",
            color: "#555",
            "&:hover": { textDecoration: "underline" },
            marginTop: "10px",
          }}
          onClick={() => {
            console.log(item.id,'item.id');
            
            navigate(item.id); 
          }}
        >
          {item.title}
        </Typography>
      ))}
    </Box>

    {/* Company */}
    <Box
      sx={{
        textAlign: { xs: "center", sm: "left" }, // Mobilde merkezleme
      }}
    >
      {data2.map((item, index) => (
       <Typography
       key={index}
       sx={{
         fontSize: { xs: "14px", sm: "16px" },
         cursor: "pointer",
         color: "#555",
         "&:hover": { textDecoration: "underline" },
         marginTop: "10px",
       }}
       onClick={() => {
        if(item.id=="/termofuse" || item.id=="/privacy" || item.id=='/legalnotice'){
          navigate(item.id);
        }
        else{
          navigate(`/${item.id}`);

        }
       }}
     >
       {item.title}
     </Typography>
      ))}
    </Box>

    {/* Social Profiles */}
    <Box
      sx={{
        textAlign: { xs: "center", sm: "left" }, // Mobilde merkezleme
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "16px", sm: "18px" },
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        Social Profiles
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" }, // Mobilde ortalama
          gap: "10px",
        }}
      >
        <Link
          href="https://www.linkedin.com/company/dpm-institute/"
          sx={{ color: "#333", fontSize: "20px" }}
        >
          <FaLinkedin style={{ color: "#333", fontSize: "25px" }} />
        </Link>
      </Box>
    </Box>
  </Box>

  {/* Bottom Section */}
  <Box
    sx={{
      textAlign: "center",
      marginTop: "30px",
      fontSize: { xs: "10px", sm: "12px" },
      color: "#888",
      borderTop: "1px solid #E0E0E0",
      paddingTop: "10px",
    }}
  >
    <Typography color="text.secondary" style={{textAlign:'center'}}>
      {`  ${startYear} - ${currentYear} `} {`©`} ACF System GmbH. DPM Institute
      is managed by ACF System GmbH. All rights reserved.
      Deploy Time: {deployTime}
    </Typography>
  </Box>
</Box>

  
  );
}
