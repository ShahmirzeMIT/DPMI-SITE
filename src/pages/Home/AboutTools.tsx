import { Box } from '@mui/material'
import Tools from '../../componets/Tools'

export default function AboutTools() {
  return (
    <Box>
        <Box sx={{ padding: "80px 10px 60px 10px"}}>
             <h1 style={{color:'black',fontSize: "36px", fontWeight: 600,width:'60%',margin:'0 auto'}}>Pragmatic Institute Training Gives You the Tools, Templates, and Tactics You Need</h1>
           <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',width:'80%',margin:'0 auto'}}>
                {
                [1,2,3,].map((item, index) => <Tools data={{id:item}} key={index}/>)
            }
           </Box>
          
        </Box>
      
    </Box>
  )
}
