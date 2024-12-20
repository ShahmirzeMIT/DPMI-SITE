
import { Grid,  Typography } from '@mui/material';
import Logo from '../../assets/images/agileCard.png';
import AgileCard from '../../componets/AgileCard';

const data=[
    {
        id:1,
        title:"For Individuals",
        description:"I represent an organization looking to teach or buy agile training.",
        button:"Explore Certifications"
    },
    {
        id:2,
        title:"For Companies",
        description:"I represent an organization looking to teach or buy agile training.",
        button:"Bring Training to Your Organization"
    }
]
const AgileLearning = () => {
  return (
    <div
      style={{
        padding: '40px',
        // textAlign: 'center',
        backgroundImage: `url(${Logo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '100px',
   
      }}
    >
      <Typography variant="h4" style={{ marginBottom: '20px',color:'black' }}>
      Empower Growth with AI: Transform 
      <br />Learning and Support with LMS & TSS!
      </Typography>
      <Typography variant="subtitle1" style={{ marginBottom: '40px',color:'black' }}>
        Make a real impact with relevant, high-quality agile training.
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {
            data.map((item)=>(
                <Grid item xs={12} sm={6} md={4}>
                        <AgileCard data={item}/>
                </Grid>
            ))
        }
      </Grid>
    </div>
  );
};

export default AgileLearning;
