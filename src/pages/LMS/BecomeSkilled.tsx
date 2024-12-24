import { Box, Grid, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const BecomeSkilled = () => {
  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom align="center">
             The Challenges of Becoming a Skilled Professional
      </Typography>

      <Grid container spacing={3} alignItems="center">

      <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: '#f1f1f1',
              padding: 3,
              borderRadius: 2,
              boxShadow: 2,
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" paragraph>
              "AI-Simulation Platform accelerates your growth, simulating years of experience in months"
            </Typography>
          </Box>
        </Grid>
        {/* Left side: Key Attributes */}
        <Grid item xs={12} md={6}>
          <List>
            <ListItem>
              <ListItemText
                primary="Lack of a working environment that simulates real-world projects with diverse challenges"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="The need for case studies, dilemmas, criteria, and alternatives to build problem-solving capabilities."
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Gaining experience takes time and exposure to real projects"
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Overcoming complex challenges requires years of hands-on application"
              />
            </ListItem>
          </List>
        </Grid>

        {/* Right side: Quote */}
       
      </Grid>
    </Box>
  );
};

export default BecomeSkilled;
