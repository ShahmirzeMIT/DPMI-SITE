import { Box } from "@mui/material";
import { Button } from "antd";
import { useState } from "react";
import HeaderWithAccordion from "./MyNeedsAccordion";

export default function MyNeedsPopOver() {
  const [visible, setVisible] = useState(false); // Popoverun görünüş vəziyyətini idarə et

  const closePopover = () => {
    setVisible(false); // Popoveru bağlayır
  };

  const content = (
    <Box
      sx={{
        position: "fixed", // Sabit yer tutur
        top: 30,
        left: 0,
        width: "100vw", // Tam ekranın eni
        height: "100vh", // Tam ekranın hündürlüyü
        background: "#f9f9f9", // Açıq rəngdə fon
        zIndex: 1000, // Üstünlük verilir
        display: "flex",
        flexDirection: "column", // X düyməsini və məzmunu vertikal düz
        alignItems: "center",
        justifyContent: "flex-start", // Üst hissədən başlayır
        padding: "20px",
        overflowY: "scroll", // Şaquli skrol aktiv
        overflowX: "hidden", // Üfüqi skrol deaktiv
      }}
    >
      {/* Close Button */}
     

      {/* Accordion content */}
      <Box sx={{ width: "100%", padding: "20px" }}>
        <Box sx={{textAlign:'right'}}>
        <Button 
      type="primary"
        danger
        onClick={closePopover}
        style={{
          alignSelf: "flex-end", // Sağ üstə hizalanır
          fontSize: "24px",
          color: "white",
          cursor: "pointer",
          marginTop:'100px'
        }}
      >
        X
      </Button>
        </Box>
      
        {/* Render multiple accordions */}
        <HeaderWithAccordion />
        <HeaderWithAccordion />
        <HeaderWithAccordion />
        <HeaderWithAccordion />
        <HeaderWithAccordion />
        <HeaderWithAccordion />
        <HeaderWithAccordion />
        <HeaderWithAccordion />
        <HeaderWithAccordion />
      </Box>
    </Box>
  );

  return (
    <>
      {/* Popover düyməsi */}
      <Button
        type="primary"
        onClick={() => setVisible(true)} // Popoveru açır
        style={{
          marginTop: "20px",
          backgroundColor: "#F96C23",
          borderColor: "#F96C23",
          padding: "10px 20px",
        }}
      >
        Check Required Skills
      </Button>

      {/* Şərtli Popover */}
      {visible && content}
    </>
  );
}
