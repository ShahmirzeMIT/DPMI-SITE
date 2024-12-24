import React from 'react';
import { Box, Grid, Typography, List, Divider } from '@mui/material';

interface SkillDefinitionProps {
  data: {
    id: string;
    quote: string;
    title: string;
    text: { title: string }[];
  };
}

const SkillDefinition = ({ data }: SkillDefinitionProps) => {
  // Parse the id as an integer to check if it's odd or even
  const isOddId = parseInt(data.id, 10) % 2 !== 0;

  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{fontWeight:400}}>
        {data.title}
      </Typography>

      <Grid container spacing={3} alignItems="center">
        {/* Left side: Key Attributes */}
        <Grid item xs={12} md={6} order={isOddId ? 2 : 1}>
          <List>
            {data.text.map((item, index) => (
              <React.Fragment key={index}>
                <li style={{fontSize:'16px',textAlign:'start',lineHeight:'35px'}}>
                  {item.title }
                </li>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Grid>

        {/* Right side: Quote */}
        <Grid item xs={12} md={6} order={isOddId ? 1 : 2}>
          <Box
            sx={{
              backgroundColor:isOddId ? '#F86C21' : '#1876D1',
              padding: 3,
              borderRadius: 2,
              boxShadow: 2,
              color:'white',
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" paragraph>
              {`"${data.quote}"`}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillDefinition;
