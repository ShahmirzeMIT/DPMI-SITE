import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface DetailCardProps {
  data: {
    id: number;
    title: string;
    shortDesc: string;
    totalHours: number;
    interactivePracticeHours: number;
    realProjectHours: number;
  };
}
const DetailCard = ({ data }: DetailCardProps) => {
  const navigate=useNavigate()
  return (
    <Box
      sx={{
        padding: "40px 20px",
        maxWidth: "350px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        borderRadius: "15px",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/courses/${data.id}`)}
    >
      <Typography
        variant="h4"
        sx={{
          color: "rgb(251, 107, 34)",
          // textDecoration: "underline",
          fontSize: "28px",
          fontWeight: "600",
          textAlign: "start",
        }}
      >
        {data.title}
      </Typography>

      <Box sx={{ marginTop: "40px", marginBottom: "60px" }}>
        <Typography
          sx={{
            color: "#545454",
            fontSize: "16px",
            textAlign: "start",
            minHeight: "120px",
          }}
        >
          {data.shortDesc}
        </Typography>
      </Box>
      {/* <Box sx={{display:'flex',width:'100%',justifyContent:'space-between',flexWrap:'wrap',marginBottom:'30px'}}>
              <div>
          <strong>
            Total <br />
            Hours:
          </strong>
          {data.totalHours}
        </div>
        <div>
          <strong>
            Interactive Practice <br />
            Hours:
          </strong>{" "}
          {data.interactivePracticeHours}
        </div>
        <div>
          <strong>
            Real Project <br /> Hours:
          </strong>{" "}
          {data.realProjectHours}
        </div>
        </Box> */}
      <Box
        sx={{
          marginTop: "90px",
          position: "absolute",
          bottom: "20px",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <Box sx={{display: "flex",
          left: "10px",
          justifyContent: "space-between",}}>
       
       <Button
          sx={{
            padding: "5px 20px",
            color: "#fb1201",
            border: "1px solid rgb(251, 107, 34)",
            fontFamily:" Cabin, sans-serif !important",
            "&:hover": { background: "rgb(251, 107, 34)", color: "white" },
          }}
          // onClick={handleNavigate}
        >
         View Course
        </Button>
        </Box>
       
       
    
      </Box>
      
    </Box>
  );
};

export default DetailCard;
