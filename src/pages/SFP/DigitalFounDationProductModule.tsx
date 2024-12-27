import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { Button, Popover } from "antd";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  data: any;
}

const DigitalProductFoundationModule = ({ data }: ProductCardProps) => {
  const navigate=useNavigate()
  return (
    <Card
      sx={{
        maxWidth: 380,
        width: "100%",
        boxShadow: 3,
        borderRadius: 2,
        "&:hover": {
          boxShadow: 10,
        },
      }}
    >
      <CardContent sx={{ padding: "0" }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            backgroundColor: "#1976d2",
            color: "#fff",
            padding: 2,
            borderRadius: "5px 5px 0 0",
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "400",
          }}
        >
          {data.title}
        </Typography>

        <Box sx={{ padding: 2 }}>
          {/* Short Description */}
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "400", marginBottom: 1, fontSize: "26px" }}
          >
            Short Description
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "18px" }}>
            {data.shortDesc}
          </Typography>

          <Divider sx={{ marginY: 2 }} />

          {/* Module Hours */}
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "400", marginBottom: 1, fontSize: "26px" }}
          >
            Module Hours
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "18px" }}>
            {data.mdHours}
          </Typography>

          <Divider sx={{ marginY: 2 }} />

          {/* Courses */}
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "400", marginBottom: 1, fontSize: "26px" }}
          >
            Courses
          </Typography>
          <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-around' }}>
            {data.course?.map((courseItem: any) => (
              <div>
                <Popover content={<Box sx={{width:'300px'}}><Typography>{courseItem.text}</Typography>
                  <Button onClick={() => navigate(`/courses/${courseItem.id}`)}  style={{backgroundColor: '#2a74b1', color: 'white',marginTop:'10px'}}>Read More</Button>
                </Box>} >
                 {courseItem.title}
                </Popover>
              </div>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DigitalProductFoundationModule;
