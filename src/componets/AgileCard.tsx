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

       <Card style={{ backgroundColor: '#2a74b1', color: 'white',border:'none',    boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px", }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {data.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {data.description}
              </Typography>
              <Button variant="contained" style={{ backgroundColor: '#fb6b22', color: 'whie' }}>
                {data.button}
              </Button>
            </CardContent>
          </Card>

  )
}