import { Box, MenuItem, Avatar, Link } from "@mui/material";
import { ProductManagerCardData } from "../../defaultDatas/productManagerCardDefaultData";
import { Divider, Typography } from "antd";

export default function CertificationMenu() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "space-between",
      }}
    >
     
      {ProductManagerCardData.map((cert) => (
        <MenuItem
          key={cert.title}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 2,
            width: 350,
            height:200, // Adjust based on your design
            py: 2,
            borderRadius: 2,
            marginLeft: "60px",
            background: cert.bgColor || "#f5f5f5",
            textWrap: "wrap",
          }}
        >
          {/* Icon or Image on the Left */}
          <Avatar
            src={cert.image}
            alt={cert.title}
            sx={{ width: 90, height: 90 }}
          />
          <Divider style={{color:'red',height:150,border:'1px solid black'}} type="vertical"></Divider>
         
          <Box>
            <Link
              href="#"
              sx={{
                color: "inherit",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >

              {cert.title}
              <Typography>{cert.text}</Typography>
            </Link>
          </Box>
        </MenuItem>
      ))}
    </Box>
  );
}
