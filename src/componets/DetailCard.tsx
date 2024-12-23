import { Box, Typography } from "@mui/material";
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
          fontSize: "20px",
          fontWeight: "600",
          textAlign: "start",
        }}
      >
        {data.title}
      </Typography>

      <Box sx={{ marginTop: "30px", marginBottom: "60px" }}>
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
      <Box
        sx={{
          marginTop: "30px",
          position: "absolute",
          bottom: "30px",
          display: "flex",
          left: "10px",
          justifyContent: "space-between",
          width: "90%",
          margin: "0 auto",
        }}
      >
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
      </Box>
    </Box>
  );
};

export default DetailCard;
