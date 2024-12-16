import { Box, Button, Typography } from '@mui/material';
import Image1 from '../../assets/images/image1.jpg';

export default function Courses1() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }} // Mobil üçün alt-üst, Desktop üçün yan-yana
      sx={{
        width: '100%',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      {/* Sol tərəf */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: '50vh', md: '100%' }, // Mobil üçün yarım hündürlük, Desktop üçün tam
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
          sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}
        >
          USER STORY CARD
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', mb: 4, color: '#555' }}
        >
          Digital Services, Master Data & Operations, Segmentations, Financial
          Statements, Business Model, Revenue Stopper, Competitors, Advantages,
          Value Propositions, Market Entry.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#FFC107',
            color: '#fff',
            textTransform: 'none',
            '&:hover': { bgcolor: '#E0A800' },
          }}
        >
          View
        </Button>
      </Box>

      {/* Sağ tərəf */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: '50vh', md: '100%' }, // Hündürlük mobil və masaüstü üçün uyğunlaşdırıldı
          position: 'relative',
          bgcolor: '#1E88E5',
        }}
      >
        <Box
          component="img"
          src={Image1} // Şəklin yolu
          alt="User Story Image"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Şəkil uyğunlaşdırılır
            opacity: 0.7, // Şəffaflıq
          }}
        />
      </Box>
    </Box>
  );
}
