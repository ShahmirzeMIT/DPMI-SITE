import { Box, Button, Typography } from '@mui/material'
import Image2 from '../../assets/images/image2.jpg'
export default function Course2() {
  return (
    <Box
    display="flex"
    flexDirection={{ xs: "column", md: "row" }}
    sx={{ width: "100%", height: "60vh",borderTop:'1px solid #e0e0e0', }}
  >
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        position: "relative",
        bgcolor: "#1E88E5", 
      }}
    >
      <Box
        component="img"
        src={Image2}// Şəklin yolu
        alt="User Story Image"
        sx={{
          width: "100%",
          height: "100%",
        }}
      />
    </Box>

        
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
      {/* <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
      >
        USER STORY CARD
      </Typography> */}
      <Typography
        variant="h4"
        sx={{ textAlign: "center", mb: 4, color: "#555" }}
        
      >
       Learn The Language of Digital Product and start to communicate 100% effectively with Agile Team from different backgrounds  
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: "rgb(87, 148, 240)",
          color: "#fff",
          textTransform: "none",
          padding: "7px 50px 7px 50px",
          "&:hover": { bgcolor: "rgb(87, 148, 240)" },
        }}
      >
        View All
      </Button>
    </Box>
  </Box>
  )
}
