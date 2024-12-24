
import { Box, Typography, Link } from "@mui/material";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Logo from "../../assets/images/image.png"; // Replace with your logo path
import { IoIosMail } from "react-icons/io";
import { HiPhone } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";
export default function FooterBottom() {
 const navigate = useNavigate();
 const startYear = 2024; // Starting year
  const currentYear = new Date().getFullYear();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#fff",
        color: "#333",
        padding: "40px 10%",
        borderTop: "1px solid #E0E0E0",
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1.5fr 1fr 1fr 1fr" },
          gap: "30px",
          justifyContent: "space-between",
        }}
      >
        {/* Logo and Contact Info */}
        <Box>
          <Avatar
          onClick={()=>navigate('/')}
          shape="square" 
            src={Logo}
            alt="DPMI Logo"
            style={{ width: "120px",height: "44px", marginBottom: "10px",cursor:'pointer' }}
          />
          <Typography
            sx={{ fontSize: "16px", display: "flex", alignItems: "center", gap: "5px" }}
          >
            <IoIosMail style={{color: "#333", fontSize: "20px"}}/>hello@dpmi.com
          </Typography>
          <Typography
            sx={{ fontSize: "16px", display: "flex", alignItems: "center", gap: "5px" }}
          >
            <HiPhone style={{color: "#333", fontSize: "20px"}} />+91 91813 23 2309
          </Typography>
          <Typography
            sx={{ fontSize: "16px", display: "flex", alignItems: "center", gap: "5px" }}
          >
            <IoLocationOutline style={{color: "#333", fontSize: "20px"}} /> Somewhere in the World
          </Typography>
        </Box>

        {/* Navigation Links - Home */}
        <Box>
          <Typography
            variant="h6"
            sx={{ fontSize: "18px", marginBottom: "10px", fontWeight: "bold" }}
          >
            Home
          </Typography>
          {["Benefits", "Our Courses", "Our Testimonials", "Our FAQ"].map(
            (item, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: "16px",
                  cursor: "pointer",
                  color: "#555",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {item}
              </Typography>
            )
          )}
        </Box>

        {/* Navigation Links - About Us */}
        <Box>
          <Typography
            variant="h6"
            sx={{ fontSize: "18px", marginBottom: "10px", fontWeight: "bold" }}
          >
            About Us
          </Typography>
          {["Company", "Achievements", "Our Goals"].map((item, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: "16px",
                cursor: "pointer",
                color: "#555",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* Social Profiles */}
        <Box>
          <Typography
            variant="h6"
            sx={{ fontSize: "18px", marginBottom: "10px", fontWeight: "bold" }}
          >
            Social Profiles
          </Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Link href="#" sx={{ color: "#333", fontSize: "20px" }}>
              <FaFacebook  style={{ color: "#333", fontSize: "25px" }}/>
            </Link>
            <Link href="#" sx={{ color: "#333", fontSize: "20px" }}>
              <FaTwitter style={{ color: "#333", fontSize: "25px" }} />
            </Link>
            <Link href="#" sx={{ color: "#333", fontSize: "20px" }}>
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
          fontSize: "12px",
          color: "#888",
          borderTop: "1px solid #E0E0E0",
          paddingTop: "10px",
        }}
      > <Typography color="text.secondary" style={{ textAlign: 'center' }}>
      
      {`  ${startYear} - ${currentYear} `} {`©`} ACF System GmbH. DPM Institute is managed by ACF System GmbH. All rights reserved.
    </Typography>
      </Box>
    </Box>
  );
}
