
import { Box, Typography } from "@mui/material";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
// import { Facebook, LinkedIn, Twitter, Instagram } from "@mui/icons-material";
import Logo from '../../assets/images/image.png'
export default function FooterBottom() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#214E73", // Blue background
        color: "white",
        padding: "20px 10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Top Section: Logo and Links */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
          marginBottom: "10px",
        }}
      >
        {/* Logo */}
        <Box>
          <img
            src={Logo} // Replace with actual logo
            alt="Pragmatic Logo"
            style={{ height: "120px" }}
          />
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: "20px" }}>
          {["Privacy", "Copyright", "Contact Us", "Cookie Policy", "Pragmatic Merchandise", "Affiliate Program"].map(
            (item, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: "14px",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {item}
              </Typography>
            )
          )}
        </Box>

        {/* Social Media Icons */}
        <Box sx={{ display: "flex", gap: "15px" }}>
           <FaFacebook style={{ cursor: "pointer" ,fontSize:'25px'}} />
          <FaLinkedin style={{ cursor: "pointer" ,fontSize:'25px'}} />
          <FaTwitter style={{ cursor: "pointer" ,fontSize:'25px'}} />
          <FaInstagram style={{ cursor: "pointer" ,fontSize:'25px'}} />
        </Box>
      </Box>

      {/* Contact Info */}
      <Typography sx={{ fontSize: "14px", marginBottom: "5px" }}>
        registrar@pragmaticinstitute.com | (480) 515-1411
      </Typography>

      {/* Copyright */}
      <Typography sx={{ fontSize: "12px" }}>
        © 2024 Pragmatic Institute. All rights reserved.
      </Typography>
    </Box>
  );
}
