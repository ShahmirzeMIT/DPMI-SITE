import { Box, Button, Typography } from '@mui/material';
import Image1 from '../../assets/images/image3.jpg';

export default function Courses1() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      sx={{
        width: '100%',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      {/* Sol tərəf */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: '50vh', md: '60vh' }, // Eyni hündürlük
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Vertikal ortalama
          alignItems: 'center', // Horizontal ortalama
          textAlign: 'center',
          p: 4,
          bgcolor: 'white',
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', mb: 3, color: '#555',fontSize:'32px',fontWeight:'500'  }}
        >
          Learn The Language of Digital Product with a Simulation Card in 20 hours
        </Typography>
        <div
          style={{fontSize:'22px', color: '#555' }}
        >
          Get first steps in a Digital Product Development
        </div>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#FFC107',
            color: '#fff',
            textTransform: 'none',
            '&:hover': { bgcolor: '#E0A800' },
              padding:'7px 70px'
          }}
        >
          Try It
        </Button>
      </Box>

      {/* Sağ tərəf */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: '50vh', md: '60vh' }, // Eyni hündürlük
          position: 'relative',
        
        }}
      >
        <Box
          component="img"
          src={Image1} // Şəklin yolu
          alt="User Story Image"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
    </Box>
  );
}
