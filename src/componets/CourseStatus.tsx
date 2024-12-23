import { Box, Typography, CircularProgress } from "@mui/material";

interface CourseStatus {
  data: {
    id: string;
    title: string;
    text?: string;
  };
}

const colors = [
  {
    id: "1",
    color: "#FFA726",
  },
  {
    id: "2",
    color: "#FFCA28",
  },
  {
    id: "3",
    color: "#FFF176",
  },
  {
    id: "4",
    color: "#4DB6AC",
  },
  {
    id: "5",
    color: "#66BB6A",
  },
];

const CourseStatus = ({ data }: CourseStatus) => {
  const matchedColor = colors.find((item) => item.id === data.id)?.color || "gray"; 

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="start"
      p={4}
      sx={{
        flexDirection: { xs: "column", sm: "row" }, 
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          mb: { xs: 2, sm: 0 }, 
          mr: { sm: 2 }, 
        }}
      >
        <CircularProgress
          variant="determinate"
          value={100}
          size={190} 
          sx={{ color: matchedColor }} 
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "20px", // Oxun eni
              height: "20px", // Oxun hündürlüyü
              backgroundColor: matchedColor, // Ox rəngi də matchedColor-a uyğun təyin olunur
              borderRadius: "50%", // Yumru ox
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              top: {
                xs: "93%", // Mobil ekranlarda ox dairənin aşağısında
                sm: "50%", // Böyük ekranlarda ox dairənin sağında
              },
              transform: {
                xs: "translate(-50%, 0)", // Mobil üçün oxu mərkəzləşdir
                sm: "translateY(-50%)", // Böyük ekran üçün oxu ortala
              },
              left: { xs: "50%", sm: "auto" }, // Mobil ekranlarda oxun ortalanması
              right: { xs: "auto", sm: "-10px" }, // Böyük ekranlarda oxun sağda olması
            },
          }}
        >
          <Typography
            variant="h6"
            component="div"
            color="text.primary"
            sx={{ fontWeight: "400", fontSize: "46px" }}
          >
            {data.id}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: matchedColor,
            fontWeight: "40",
            mb: 1,
            fontSize: "48px",
          }}
        >
          {data.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "18px", lineHeight: "40px" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer typesetting, remaining
          essentially unchanged.
        </Typography>
      </Box>
    </Box>
  );
};

export default CourseStatus;
