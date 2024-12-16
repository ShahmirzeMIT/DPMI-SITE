
import { Box, Button, Typography } from "@mui/material";

export default function Question() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: "url('https://via.placeholder.com/1600x400')", // Replace with actual image
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(234, 125, 45, 0.8), rgba(44, 168, 178, 0.8))", // Gradient overlay
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Have a Question?
        </Typography>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          {/* Team Training Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F37324", // Orange
              color: "black",
              padding: "10px 20px",
              fontSize: "16px",
              "&:hover": { backgroundColor: "#e56210" },
            }}
          >
            Team Training
          </Button>

          {/* Contact Us Button */}
          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              padding: "10px 20px",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "white",
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
