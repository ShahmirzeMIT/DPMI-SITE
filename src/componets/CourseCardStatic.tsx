import { Box, Typography, CircularProgress } from "@mui/material";

interface CourseStatus {
  data: {
    id?: string;
    title: string;
    shortDesc?: string;
    
  };
}

const colors = [
  {
    id: "1",
    color: "#2a74b1",
  },
  {
    id: "2",
    color: "#D8531D",
  },
  {
    id: "3",
    color: "#333333",
  },
  {
    id: "4",
    color: "#4DB6AC",
  },
  {
    id: "5",
    color: "#66BB6A",
  },
  {
    id: "6",
    color: "yellowgreen",
  },
  {
    id: "7",
    color: "orange",
  }
];

const CourseCardStatic = ({ data }: CourseStatus) => {
  const matchedColor =
    colors.find((item) => item.id === data.id)?.color || "";

  return (
    <Box
      display="flex"
      justifyContent="start"
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        textAlign: { xs: "center", sm: "left" },
        alignItems: { xs: "center", sm: "start" },
        marginBottom: { xs: "80px", sm: "0", md: "", lg: "" },
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
          size={120}
          sx={{ color: "#1976d2", background:'#1976d2',borderRadius:'50%' }}
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
            sx={{ fontWeight: "800", fontSize: "18px", color: 'white',textTransform:'uppercase' }}
          >
            {data.id}
          </Typography>
        </Box>
      </Box>
      <Box sx={{}}>
        {data.title && (
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "black",
              fontWeight: "800",
              mb: 1,
              fontSize: "36px",
              marginBottom: "0",
              marginTop: { xs: "0px", sm: "10px" },
            }}
          >
            {data.title}
          </Typography>
        )}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "18px", lineHeight: "27px", minHeight: 80 }}
        >{data.shortDesc}
        </Typography>
      </Box>
    </Box>
  );
};

export default CourseCardStatic;
