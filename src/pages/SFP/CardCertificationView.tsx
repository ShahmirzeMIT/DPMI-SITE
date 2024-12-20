import { Box } from '@mui/material'
import { Typography } from 'antd'

const data=[
    {
        title:'Course Series',
        text:'Product Manager Certification'
    },
    {
        title:'Fully Understandable Explanations',
        text:'Product Manager Certification'
    },
    
    {
        title:'AI collaborative working environment',
        text:'Product Manager Certification'
    },
    {
        title:'Mentor Supports',
        text:'Product Manager Certification'
    },
]
export default function CardCertificationView() {
  return (
    <Box sx={{ backgroundColor: '#F9FAFC',paddingTop:'40px',paddingBottom:'40px'}}>


    <Box sx={{
        boxShadow: "0px 3px 20px 0px rgba(0, 0, 0, 0.09803921568627451)",
       
        padding: "50px 40px",
        zIndex: 1,
        width:'90%',
        margin:'0 auto',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius: "10px",
        flexWrap:'wrap'
    }}>
        {
            data.map((item, _index) => <Typography style={{   
                fontFamily: "Roboto, Sans-serif",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 'bold',
                color: "#000"
                }}>
            {/* <div style={{ fontFamily: "Roboto, Sans-serif",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 400,
                color: "#000"}}>3 Course Series</div> */}
            {item.title}
        </Typography>
            )
        }
        
    </Box>
    </Box>
  )
}
