import { Box } from '@mui/material'

export default function AboutCount() {
  return (
    <Box sx={{borderTop:'15px solid #D34E27'}}>   
        <Box sx={{background:'#FBEDE9',padding:'40px'}}>
          <Box sx={{display:{xs:'block',md:'flex'},justifyContent:'space-between',width:'75%',margin:'0 auto'}}>
          
             <h1 style={{color:'black',fontSize:'60px',fontWeight:'bold'}}>250,000+
                <span style={{color:'black',fontSize:'20px',fontWeight:'bold', display:'block'}}>Total Alumni</span>
            </h1> 
            
            <h1 style={{color:'black',fontSize:'60px',fontWeight:'bold'}}>10,000+
            <span style={{color:'black',fontSize:'20px',fontWeight:'bold', display:'block'}}>Companies</span>
            </h1>
            <h1 style={{color:'black',fontSize:'60px',fontWeight:'bold'}}>50+
            <span style={{color:'black',fontSize:'20px',fontWeight:'bold', display:'block'}}>Countries</span>
            </h1>
          </Box>
          
        </Box>
    </Box>
  )
}
