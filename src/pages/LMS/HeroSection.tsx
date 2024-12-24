import  { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Logo from '../../assets/images/aiSimulation.jpg'
const HeroSection = () => {
  // State to track if screen is small
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Effect to listen for window resize
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 960px)');
    setIsSmallScreen(mediaQuery.matches); // Check the initial state

    // Event listener for resizing
    const handleResize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };

    mediaQuery.addListener(handleResize); // Listen for changes
    return () => mediaQuery.removeListener(handleResize); // Cleanup
  }, []);

  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        height: '60vh',
        backgroundColor: '#f5f5f5',
        flexDirection: isSmallScreen ? 'column' : 'row',
        textAlign: isSmallScreen ? 'center' : 'left',
      }}
    >
      {/* Text Section */}
      <Box
        style={{
          flex: 1,
          paddingRight: isSmallScreen ? '0' : '40px',
          marginBottom: isSmallScreen ? '40px' : '0',
        }}
      >
        <Typography
          variant="h1"
          style={{
            fontSize: isSmallScreen ? '2rem' : '2.5rem',
            fontWeight: 400,
            marginBottom: '28px',
          }}
        >
          Master Real-World Skills with AI-Simulation
        </Typography>
        <Typography
          variant="body1"
          style={{
            fontSize: isSmallScreen ? '1rem' : '18px',
            marginBottom: '24px',
            lineHeight:'36px'
          }}
        >
          Simulate real projects, tackle dilemmas, and make decisions that define success.
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="primary"
            style={{
              marginRight: '16px',
              padding: '10px 10px',
              width: isSmallScreen ? '100%' : 'auto',
              marginBottom: isSmallScreen ? '16px' : '0',
            }}
          >
            Start Your Journey to Mastery
          </Button>
          <Button
            variant="outlined"
            color="primary"
            style={{
              padding: '10px 30px',
              width: isSmallScreen ? '100%' : 'auto',
            }}
          >
            Explore the Platform
          </Button>
        </Box>
      </Box>

      {/* Image Section */}
      <Box
        style={{
          flex: 1,
          textAlign: 'center',
          marginTop: isSmallScreen ? '40px' : '0',
        }}
      >
        <img
          src={Logo} // Replace with your image URL
          alt="AI Simulation"
          style={{
            width: '100%',
            maxWidth: '500px',
            borderRadius: '8px',
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
