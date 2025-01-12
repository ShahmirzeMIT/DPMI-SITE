import { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import { Button } from "antd";

interface PaymentModalProps {
  title: string;
  desc: string; // HTML content as a string
}

export default function PaymentCourseDescription({ title, desc }: PaymentModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Button to open the modal */}
      <Typography
        onClick={handleOpen}
        sx={{
          fontWeight: "600",
          fontSize: "18px",
          color: "black",
          cursor: "pointer",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        {title}
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
          {/* Render desc as HTML */}
          <Box
            sx={{ marginBottom: "20px", lineHeight: "1.8" }}
            dangerouslySetInnerHTML={{ __html: desc }}
          />

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
