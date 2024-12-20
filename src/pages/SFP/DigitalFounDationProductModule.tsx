
import {
  Card,
  CardContent,
  Typography,
//   Grid,
  Box,
  Divider,
} from "@mui/material";

interface ProductCardProps {
    data:{
        title: string
        shortDesc: string
        mdHours: string
        courses: string
    }
}
const DigitalProductFoundationModule = ({data}:ProductCardProps) => {
  return (

      <Card
        sx={{
          maxWidth: 600,
          width: "100%",
          boxShadow: 3,
          borderRadius: 2,
          '&:hover': {
            boxShadow: 10,
          }
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{
              backgroundColor: "#1976d2",
              color: "#fff",
              padding: 2,
              borderRadius: "5px 5px 0 0",
              textAlign: "center",
            }}
          >
            {data.title}
          </Typography>

          <Box sx={{ padding: 2 }}>
            {/* Short Description */}
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginBottom: 1 }}
            >
              Short Description
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.shortDesc}
            </Typography>

            <Divider sx={{ marginY: 2 }} />

            {/* Module Hours */}
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginBottom: 1 }}
            >
              Module Hours
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.mdHours}
            </Typography>

            <Divider sx={{ marginY: 2 }} />

            {/* Courses */}
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", marginBottom: 1 }}
            >
              Courses
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.courses}
            </Typography>
          </Box>
        </CardContent>
      </Card>
 
  );
};

export default DigitalProductFoundationModule;
