import { Button, CardContent, Typography } from '@mui/material'
import { Card } from 'antd'
interface AgileCardProps {
    data:{
        title:string
        description:string
        button:string
    }
}
export default function AgileCard({data}:AgileCardProps) {
  return (

       <Card style={{ width: 400,height:200,backgroundColor: '#2a74b1', color: 'white',border:'none',    boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",borderRadius:'30px' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {data.title}
              </Typography>
              <Typography variant="body2" gutterBottom sx={{height:'60px'}}>
                {data.description}
              </Typography>
              <Button variant="contained" style={{ backgroundColor: '#fb6b22', color: 'white',width:"80%" }}>
                {data.button}
              </Button>
            </CardContent>
          </Card>

  )
}
