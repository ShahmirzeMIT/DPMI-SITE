import React from "react";
import { Box, Divider } from "@mui/material";

// Images for logos
import ZapierLogo from "../assets/logos/zapier.png";
import SpotifyLogo from "../assets/logos/spotify.png";
import ZoomLogo from "../assets/logos/zoom.png";
import AmazonLogo from "../assets/logos/amazon.png";
import AdobeLogo from "../assets/logos/adobe.png";
import NotionLogo from "../assets/logos/notion.png";
import NetflixLogo from "../assets/logos/netflix.png";

const logos = [
  { id: 1, src: ZapierLogo, alt: "Zapier" },
  { id: 2, src: SpotifyLogo, alt: "Spotify" },
  { id: 3, src: ZoomLogo, alt: "Zoom" },
  { id: 4, src: AmazonLogo, alt: "Amazon" },
  { id: 5, src: AdobeLogo, alt: "Adobe" },
  { id: 6, src: NotionLogo, alt: "Notion" },
  { id: 7, src: NetflixLogo, alt: "Netflix" },
];

export default function LogoSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 4,
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {logos.map((logo, index) => (
        <React.Fragment key={logo.id}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={logo.src} alt={logo.alt} style={{ height: "50px", objectFit: "contain" }} />
          </Box>
          {index !== logos.length - 1 && (
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "#E0E0E0", height: "50px" }}
            />
          )}
        </React.Fragment>
      ))}
    </Box>
  );
}
