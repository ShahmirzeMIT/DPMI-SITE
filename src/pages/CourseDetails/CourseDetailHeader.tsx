import { Box, Typography, Grid } from "@mui/material";
import "../../styles/headerSection.css";

interface CourseDetailHeaderProps {
  data: {
    title: string;
    img: string;
    CourseShortDesc: string;
  };
}

const CourseDetailHeader = ({ data }: CourseDetailHeaderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" }, // Kiçik ekranlarda column-reverse
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5", // Açıq boz fon
        padding: "40px",
        borderRadius: "10px",
        gap: "20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Sol tərəf məzmunu */}
      <Grid
        container
        spacing={2} // Hər element arasında boşluq
        sx={{
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {/* Şəkil */}
        <Grid
          item
          xs={12} // Mobil üçün tam genişlik
          sm={6} // Tablet və yuxarı üçün 50% genişlik
          md={2}
          sx={{ display: { xs: "none", md: "flex" } }} // Desktop üçün də 50% genişlik
        >
          <Box
            component="img"
            src={data.img}
            alt={data.title}
            sx={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
              margin: { xs: "0 auto", sm: "0" }, // Mobil üçün mərkəzləşdir
              display: "block", // Şəkilin düzgün yerləşməsi üçün
            }}
          />
        </Grid>

        {/* Mətn */}
        <Grid
          item
          xs={12} // Mobil üçün tam genişlik
          sm={6} // Tablet və yuxarı üçün 50% genişlik
          md={10} // Desktop üçün də 50% genişlik
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "20px", md: "48px" }, // Kiçik ekranlarda kiçilir
              color: "#222",
              fontWeight: 400,
              marginBottom: "10px",

              textAlign: { xs: "center", sm: "left" }, // Mobil üçün mərkəzləşdir
            }}
          >
            {data.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "18px", md: "18px" },
              lineHeight: 1.5,
              color: "#555",
              textAlign: { xs: "center", sm: "left" }, // Mobil üçün mərkəzləşdir
              maxWidth: "800px",
            }}
          >
            {data.CourseShortDesc}
          </Typography>
        </Grid>
      </Grid>

      {/* Sağ tərəfdəki şəkil */}
      <Box
        sx={{
          position: "relative",
          maxWidth: { xs: "100%", md: "40%" },
          display: "flex",
          alignItems: { xs: "center", md: "flex-start" }, // Mobil üçün mərkəz
          justifyContent: "center",
          flexDirection: "column",
          marginTop: { xs: "20px", md: "50px" },
        }}
      >
        <Box
          component="img"
          src={data.img}
          alt="Decorative"
          sx={{
            width: { xs: "120px", md: "150px" }, // Kiçik ekranlarda ölçü kiçilir
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            zIndex: 2,
          }}
        />
        {/* Dekorativ sarı dairə */}
        <Box
          sx={{
            content: '""',
            position: "absolute",
            top: "30%",
            left: "-20%",
            width: "200px",
            height: "200px",
            backgroundColor: "#ffd737",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
        {/* Dekorativ ağ dairə */}
        <Box
          sx={{
            content: '""',
            position: "absolute",
            bottom: "-20%",
            right: "-10%",
            width: "150px",
            height: "150px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default CourseDetailHeader;
