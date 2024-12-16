import { Box, Button, Typography } from '@mui/material';
import Image1 from '../../assets/images/image1.jpg';

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
          height: { xs: 'auto', md: '60vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Vertikal ortalama
          alignItems: 'start', // Sol tərəfdən mərkəz
          textAlign: 'start',
          p: { xs: 2, md: 4 },
          gap: 2,
          bgcolor: 'white',
        }}
      >
        {/* Mətnlər */}
        <Box>
          <Typography
            component="span"
            sx={{
              fontSize: '24px',
              color: '#000',
              fontWeight: '400',
            }}
          >
            Up to{' '}
          </Typography>
          <Typography
            component="span"
            sx={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#3F51B5',
              position: 'relative',
              display: 'inline-block',
              mr: 1,
            }}
          >
            <span style={{
                  margin: "0px",
                  fontFamily:' Cabin, sans-serif',
                  fontWeight: "400",
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  backgroundColor:" rgb(87, 148, 240)",
                  display: "inline-block",
                  borderRadius: "50%",
                  filter: "blur(17px)",
                  width: "170px",
                  color: "black",
                  padding: "15% 6%",
                  position: "absolute",
                  top:'15px',
                  left:'-40px'
    }}></span>
            60%
          </Typography>
          <Typography
            component="span"
            sx={{
              fontSize: '28px',
              color: '#000',
              fontWeight: '400',
            }}
          >
            {' '}
            of a success of a Digital Product Development depends on an Agile Communication
          </Typography>
        </Box>

        {/* Aşağıdakı mətn */}
        <Typography
          variant="body1"
          sx={{
            fontSize: '22px',
            color: '#333',
            mb: 2,
          }}
        >
          The Language of Digital Product creates structured and standardized terminologies for easy implementation of an Agile Communication
        </Typography>

        {/* Düymə */}
        <Button
          variant="contained"
          sx={{
            bgcolor: 'rgb(87, 148, 240)',
            color: '#fff',
            textTransform: 'none',
            '&:hover': { bgcolor: 'rgb(87, 148, 240)' },
            padding: '8px 24px',
            fontSize: '16px',
          }}
        >
          Try Free Trials
        </Button>
      </Box>

      {/* Sağ tərəf */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: 'auto', md: '60vh' },
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
