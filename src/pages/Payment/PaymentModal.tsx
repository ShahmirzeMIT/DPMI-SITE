import { useState } from "react";
import { Modal, Box, Typography, Avatar } from "@mui/material";
import { Button } from "antd";
import { FaLinkedin } from "react-icons/fa";
interface PaymentModalProps {
    title: string;
    Img: string
    name: string
    desc: string
    JobTitle: string
    Linkedin: string
    Company:string
}
export default function PaymentModal({title,Img,name,desc,JobTitle,Linkedin,Company}:PaymentModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Button to open the modal */}
      <Typography 
        onClick={handleOpen}
        sx={{
        fontWeight: "600", fontSize: "18px", color: "black",
        cursor:'pointer', 
        '&:hover':{
            textDecoration:'underline'
        }
        }}
      >
       { title}
      </Typography>

      {/* Modal Content */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: { xs: "90%", md: "60%" },
            margin: "auto",
            marginTop: "10%",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: 24,
          }}
        >
          {/* Header */}
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <Avatar
              src={Img}// Şəkil yolunu daxil edin
              sx={{ width: 150, height: 150, marginRight: "20px" }}
            />
            <Typography sx={{ fontWeight: "bold",fontSize:'36px' }}>
              {name}
            </Typography>
          </Box>

          {/* Content */}
          <Typography variant="body1" sx={{ marginBottom: "20px", lineHeight: "1.8" }}>
            {desc}
          </Typography>

          <Typography variant="body2" sx={{ marginBottom: "20px" }}>
            {JobTitle}
          </Typography>

          <Typography variant="body2" sx={{ marginBottom: "20px" }}>
            {Company}
          </Typography>

          {/* LinkedIn */}
          <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
            <FaLinkedin
            onClick={() => window.open(Linkedin, "_blank")}
              style={{ width: "24px", height: "24px", marginRight: "8px" }}
            />
          </Typography>

          {/* Close Button */}
          <Box sx={{ textAlign: "right", marginTop: "20px" }}>
            <Button
              style={{
                background: "#d32f2f",
                color: "white",
                padding: "10px 20px",
                fontSize: "16px",
              }}
              onClick={handleClose}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}