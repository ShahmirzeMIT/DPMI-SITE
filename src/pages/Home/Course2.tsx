import { Box, Button, Typography } from '@mui/material';
import Image2 from '../../assets/images/image2.jpg';

export default function Course2() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }} // Mobil üçün alt-üst, Desktop üçün yan-yana
      sx={{
        width: '100%',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      {/* Şəkil olan tərəf */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: '50vh', md: '100%' }, // Mobil üçün yarım hündürlük
          position: 'relative',
          bgcolor: '#1E88E5',
        }}
      >
        <Box
          component="img"
          src={Image2} // Şəklin yolu
          alt="User Story Image"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Şəkil sahəyə uyğunlaşır
          }}
        />
      </Box>

      {/* Mətn olan tərəf */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: '50vh', md: '100%' }, // Mobil üçün yarım hündürlük
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 4,
          bgcolor: 'white',
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', mb: 4, color: '#555' }}
        >
          Learn The Language of Digital Product and start to communicate 100%
          effectively with Agile Team from different backgrounds
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'rgb(87, 148, 240)',
            color: '#fff',
            textTransform: 'none',
            padding: '7px 50px',
            '&:hover': { bgcolor: 'rgb(87, 148, 240)' },
          }}
        >
          View All
        </Button>
      </Box>
    </Box>
  );
}
