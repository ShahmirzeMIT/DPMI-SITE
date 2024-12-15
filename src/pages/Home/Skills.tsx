import { Box } from '@mui/material'
import { Button } from 'antd'
import SkillsCard from '../../componets/SkillsCard'

export default function Skills() {
  return (
    <Box sx={{marginBottom:'40px'}}>
        <Box sx={{ display:'flex',justifyContent:'space-between',alignItems:'center',padding:'40px',flexWrap:'wrap'}}>
            <Box sx={{width:"74%"}}>
                <h1 style={{color:'black',fontSize: "36px", fontWeight: 600,}}>Build Your Skills With Pragmatic Workshops</h1>
            </Box>
            
            <Box sx={{width:"26%"}}>
                <Button style={{background:'#E9EDF1',padding: "17px 30px 17px 30px",height:'52px',color:'black',borderRadius:'none'}}>View WorkShop  &gt;&gt;</Button>
            </Box>
        </Box>
        <Box>
          <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',width:'90%',margin:'0 auto'}}>
            {
              [1,2,3,4,5,6].map((_, index) => <SkillsCard key={index} 
              title="Product Operations"
              description="Harness the power of product operations to multiply your team’s effectiveness."
              learnMoreLink="#"/>)
            }
          </Box>
          
       
        </Box>
    </Box>
  )
}
