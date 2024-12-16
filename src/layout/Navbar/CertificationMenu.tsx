
import { Box, MenuItem, Avatar, Link } from "@mui/material";
import { ProductManagerCardData } from "../../defaultDatas/productManagerCardDefaultData";



export default function CertificationMenu() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {ProductManagerCardData.map((cert) => (
        <MenuItem
          key={cert.title}
          sx={{ display: "flex", alignItems: "center", gap: 1, py: 1 }}
        >
          <Avatar src={cert.image} alt={cert.title} sx={{ width: 60, height: 60 }} />
          <Link
            href="#"
            underline="hover"
            sx={{ color: "inherit", fontSize: "14px", fontWeight: 500 }}
          >
            {cert.title}
          </Link>
        </MenuItem>
      ))}
    </Box>
  );
}