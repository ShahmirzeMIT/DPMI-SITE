import  { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../../assets/images/skillsAI.png'
const SkillGapComponent = () => {
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
        // backgroundColor: '#f5f5f5',
        flexDirection: isSmallScreen ? 'column' : 'row',
        textAlign: isSmallScreen ? 'center' : 'left',
      }}
    >

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
            fontSize: isSmallScreen ? '2rem' : '36px',
            fontWeight: 400,
            marginBottom: '28px',
          }}
        >
         The Need for Skilled Professionals
        </Typography>
        <Typography
          variant="body1"
          style={{
            fontSize: isSmallScreen ? '1rem' : '20px',
            marginBottom: '24px',
             lineHeight:'36px'
          }}
        >
          In today’s competitive world, companies demand skilled individuals in specific areas.
          Professionals must improve their skills to secure good jobs and stay ahead of competitors
        </Typography>
      
      </Box>

      {/* Image Section */}
      
    </Box>
  );
};

export default SkillGapComponent;
