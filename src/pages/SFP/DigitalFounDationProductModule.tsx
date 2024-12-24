
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
          maxWidth: 380,
          width: "100%",
          boxShadow: 3,
          borderRadius: 2,
          '&:hover': {
            boxShadow: 10,
          }
        }}
      >
        <CardContent sx={{padding:'0'}}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              backgroundColor: "#1976d2",
              color: "#fff",
              padding: 2,
              borderRadius: "5px 5px 0 0",
              textAlign: "center",
              fontSize:'28px',
              bold:'400'
            }}
          >
            {data.title}
          </Typography>

          <Box sx={{ padding: 2 }}>
            {/* Short Description */}
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "400", marginBottom: 1,fontSize:'26px' }}
            >
              Short Description
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontSize:'18px'}}>
              {data.shortDesc}
            </Typography>

            <Divider sx={{ marginY: 2 }} />

            {/* Module Hours */}
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "400", marginBottom: 1 ,fontSize:'26px'}}
            >
              Module Hours
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontSize:'18px'}}>
              {data.mdHours}
            </Typography>

            <Divider sx={{ marginY: 2 }} />

            {/* Courses */}
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "400", marginBottom: 1 ,fontSize:'26px'}}
            >
              Courses
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontSize:'18px'}}>
              {data.courses}
            </Typography>
          </Box>
        </CardContent>
      </Card>
 
  );
};

export default DigitalProductFoundationModule;
