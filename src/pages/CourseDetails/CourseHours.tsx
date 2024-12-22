import { Box } from '@mui/material'
import { Avatar, Typography } from 'antd'
import Logo from '../../assets/images/hours.png'
const data=[
    {
        title:'Real Project Hours ',
        text:'3'
    },
    {
        title:'Interactive Practice Hours',
        text:'5'
    },
    
    {
        title:'Total Hours',
        text:'8'
    },
   
]
export default function CourseHours() {
  return (
    <Box sx={{ paddingTop:'60px',paddingBottom:'60px'}}>
        <Typography  style={{color:'black',fontSize:'30px',fontWeight:'bold',marginBottom:'10px',textAlign:'start'}}>
        <Avatar src={Logo} style={{width:'70px',height:'70px',marginRight:'5px'}} shape="square" />
        Hours</Typography>
    <Box sx={{
        boxShadow: "0px 3px 20px 0px rgba(0, 0, 0, 0.09803921568627451)",
       
        padding: "50px 40px",
        zIndex: 1,
        width:'100%',
        margin:'0 auto',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius: "10px",
        flexWrap:'wrap'
    }}>
        {
            data.map((item, _index) => <Typography style={{   
               
                fontSize: "23px",
                lineHeight: "20px",
                fontWeight: 'bold',
                color: "#000",
                
                }}>
            <div style={{
                fontSize: "27px",
                lineHeight: "20px",
                fontWeight: 400,
                color: "#000",marginBottom:'20px'}}>{item.text}</div>
            {item.title}
        </Typography>
            )
        }
        
    </Box>
    </Box>
  )
}
