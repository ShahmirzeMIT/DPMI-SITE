import { Box, Typography, Button } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      sx={{ width: "100%", height: "100vh" }}
    >
      {/* Sol tərəf */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
          bgcolor: "white",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
        >
          USER STORY CARD
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", mb: 4, color: "#555" }}
        >
          Digital Services, Master Data & Operations, Segmentations, Financial
          Statements, Business Model, Revenue Stopper, Competitors, Advantages,
          Value Propositions, Market Entry.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#FFC107",
            color: "#fff",
            textTransform: "none",
            "&:hover": { bgcolor: "#E0A800" },
          }}
        >
          View
        </Button>
      </Box>

      {/* Sağ tərəf */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          position: "relative",
          bgcolor: "#1E88E5", // Mavi rəng kölgəsi
        }}
      >
        <Box
          component="img"
          src="/path-to-your-image.jpg" // Şəklin yolu
          alt="User Story Image"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.7,
          }}
        />
      </Box>
    </Box>
  );
}
