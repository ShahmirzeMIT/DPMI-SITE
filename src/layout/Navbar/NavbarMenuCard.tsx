import { Box } from '@mui/material'
import { Card } from 'antd'


export default function NavbarMenuCard() {
  return (
        <Box style={{ }}>
            <Card title="Card title" bordered={false} style={{width: 500,
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                height:210
             }}>
            Card content
        </Card>
        </Box>
    
  )
}
