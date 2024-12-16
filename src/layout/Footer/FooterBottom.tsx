import { Box, Typography } from "@mui/material";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa6";
import Logo from "../../assets/images/image.png";

export default function FooterBottom() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0E1C36", // Dark blue background
        color: "white",
        padding: "30px 10%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
          gap: "30px",
          justifyContent: "space-between",
        }}
      >
        {/* Logo Section */}
        <Box>
          <img
            src={Logo}
            alt="Valar Logo"
            style={{ height: "80px", marginBottom: "10px" }}
          />
        </Box>

        {/* Navigation Links */}
        <Box>
          <Typography variant="h6" sx={{ fontSize: "16px", marginBottom: "10px" }}>
            VALAR
          </Typography>
          {["The MBA", "The Executive MBA", "Student Experience", "Consumer Disclosure", "Valar Catalog"].map(
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

        {/* Tuition Model Links */}
        <Box>
          <Typography variant="h6" sx={{ fontSize: "16px", marginBottom: "10px" }}>
            TUITION MODEL
          </Typography>
          {["Tuition Fees", "Tuition Assistance", "Scholarship Opportunities"].map(
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
        <Box>
          <Typography variant="h6" sx={{ fontSize: "16px", marginBottom: "10px" }}>
            RESOURCES
          </Typography>
          {["iOS App", "Android App", "FAQ", "Press", "Contact"].map((item, index) => (
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
          ))}
        </Box>
      </Box>

      {/* Social Media Links */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <FaFacebook style={{ cursor: "pointer", fontSize: "25px" }} />
        <FaLinkedin style={{ cursor: "pointer", fontSize: "25px" }} />
        <FaTwitter style={{ cursor: "pointer", fontSize: "25px" }} />
        <FaInstagram style={{ cursor: "pointer", fontSize: "25px" }} />
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          textAlign: "center",
          fontSize: "12px",
          marginTop: "10px",
          borderTop: "1px solid #3A4A60",
          paddingTop: "10px",
        }}
      >
        <Typography>
          Valar Institute is a Division of Quantic School of Business and Technology. Accredited by DEAC.
        </Typography>
        <Typography>
          Contact: info@valar.quantic.edu | (571) 483-8002
        </Typography>
      </Box>
    </Box>
  );
}
