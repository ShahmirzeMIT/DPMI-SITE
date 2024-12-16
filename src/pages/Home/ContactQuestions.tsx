import { Box } from '@mui/material'
import Accordion from '../../componets/Accordion'


export default function ContactQuestions() {
  return (
    <Box sx={{backgroundImage:'linear-gradient(180deg, #244874 0%, #12243A 100%)',padding: "100px 0px 120px 0px",minHeight:'400px'}}>
            <h1 style={{color:'white',fontSize: "36px", fontWeight: 600,width:'60%',margin:'0 auto'}}>Frequently Asked Questions</h1>
            <Box>
                <Accordion/>
            </Box>
    </Box>
  )
}
