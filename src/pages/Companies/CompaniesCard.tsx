import { Box,  Grid, Typography } from '@mui/material'

interface ProductCardProps {
    data: {
        title: string;
        description: string;
    };
}
export default function CompaniesCard({data}:ProductCardProps) {
  return (
    <Grid item xs={12} sm={6} md={4}>
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        textAlign: "center",
        transition: "transform 0.3s ease-in-out",
        '&:hover': {
          transform: "scale(1.05)",
        }
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        {data.title}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        {data.description}
      </Typography>
      {/* <Button
        variant="contained"
        color="primary"
        sx={{ textTransform: "capitalize" }}
      >
        Learn More
      </Button> */}
    </Box>
  </Grid>
  )
}
