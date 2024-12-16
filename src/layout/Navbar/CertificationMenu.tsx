import { Box, MenuItem, Avatar, Link } from "@mui/material";
import { ProductManagerCardData } from "../../defaultDatas/productManagerCardDefaultData";
import { Divider, Typography } from "antd";
import { useState } from "react";

export default function CertificationMenu() {
  // State for tracking hover on individual cards
  const [hoverIndex, setHoverIndex] = useState<null| number>(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "space-between",
           marginLeft: "60px",
      }}
    >
      {ProductManagerCardData.map((cert, index) => (
        <MenuItem
          component="a"
          href="#"
          onMouseEnter={() => setHoverIndex(index)} // Track the currently hovered card
          onMouseLeave={() => setHoverIndex(null)} // Reset hover when mouse leaves
          key={cert.id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 2,
            width: 420,
            height: 218,
            py: 2,
            borderRadius: 2,
         
            background: cert.bgColor || "#f5f5f5",
            textWrap: "wrap",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              background: "#FF9500",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              transform: "scale(1.02)",
            },
          }}
        >
          {/* Icon or Image on the Left */}
          <Avatar
            src={cert.image}
            alt={cert.title}
            sx={{
              width: 90,
              height: 90,
              transition: "transform 0.2s ease",
              transform: hoverIndex === index ? "scale(1.1)" : "scale(1)",
            }}
          />
          <Divider
            style={{
              height: 150,
              border: `1px solid ${hoverIndex === index ? "white" : "black"}`,
            }}
            type="vertical"
          ></Divider>

          <Box>
            <Link
              href="#"
              sx={{
                color: hoverIndex === index ? "white" : "black",
                fontSize: "20px",
                fontWeight: 400,
                textDecoration: "none",
                lineHeight: "30px"
              }}
            >
              {cert.title}
              <Typography
                style={{
                  color: hoverIndex === index ? "white" : "black",
                  marginTop:'40px'
                }}
              >
                {cert.text}
              </Typography>
            </Link>
          </Box>
        </MenuItem>
      ))}
    </Box>
  );
}
