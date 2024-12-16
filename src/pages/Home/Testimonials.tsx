import { Box, Typography, Button} from "@mui/material";
import UserCards from "./UserCards";


export default function Testimonials() {
  return (
    <Box sx={{ padding: "50px 10%", backgroundColor: "#fff" }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          flexWrap: "wrap",
          width:'100%'
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginBottom: "10px" ,color:'black',textAlign:'start'}}
          >
            Our Testimonials
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#555", maxWidth: "600px" ,textAlign:'start',marginBottom:'20px'}}
          >
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh.
          </Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#E0E0E0",
            color: "#333",
            textTransform: "none",
            borderRadius: "8px",
            height: "40px",
            "&:hover": { borderColor: "#ccc" },
          }}
        >
          View All
        </Button>
      </Box>

      {/* Testimonials Section */}
     <UserCards/>
    </Box>
  );
}
