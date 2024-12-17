import { Box } from '@mui/material'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate=useNavigate()
  return (
    <Box>
        <Button style={{marginRight: 10}}>Login</Button>
        <Button  onClick={() => navigate("/classes")} >Register Now</Button>
    </Box>
  )
}
