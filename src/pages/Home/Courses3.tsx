import { Box, Button, Typography } from '@mui/material'
import Image1 from '../../assets/images/image3.jpg'
export default function Courses3() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      sx={{ width: "100%", height: "60vh",borderTop:'1px solid #e0e0e0', }}
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
          sx={{ textAlign: "center", mb: 4, color: "#555" }}
        >
             Learn The Language of Digital Product with a Simulation Card in 20 hours
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", mb: 4, color: "#555" }}
        >
            Get first steps in a Digital Product Development
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#FFC107",
            color: "#fff",
            textTransform: "none",
            padding: "7px 90px 7px 90px",
            "&:hover": { bgcolor: "#E0A800" },
          }}
        >
         Try It
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
          src={Image1} // Şəklin yolu
          alt="User Story Image"
          sx={{
            width: "100%",
            height: "100%",
            // objectFit: "cover",
            // opacity: 0.7,
          }}
        />
      </Box>
    </Box>
  )
}
