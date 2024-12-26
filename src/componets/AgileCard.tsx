import { Button,  Typography } from '@mui/material'
import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'
interface AgileCardProps {
    data:{
        title:string
        description:string
        button:string
        links:string
    }
}
export default function AgileCard({data}:AgileCardProps) {
  const navigate=useNavigate()
  return (

       <Card style={{ width: 400,height:190,backgroundColor: '#2a74b1', color: 'white',border:'none',    boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",borderRadius:'8px' }}>
            {/* <CardContent style={{padding:"0 important"}}> */}
              <Typography variant="h6" gutterBottom sx={{fontSize:'28px',margin:'0 !important'}}>
                {data.title}
              </Typography>
              <Typography variant="body2" gutterBottom sx={{height:'60px',fontSize:'18px',lineHeight:'20px',lineSpacing:'0',marginBottom:'0 !important',color:'white',textAlign:'center'}}>
                {data.description}
              </Typography>
              <Button variant="contained" style={{ backgroundColor: '#fb6b22', color: 'white',width:"80%" ,}} onClick={() => navigate(data.links)}>
                {data.button}
              </Button>
            {/* </CardContent> */}
          </Card>

  )
}
