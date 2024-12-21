import { Box, Button, Typography } from '@mui/material'

interface ProductCardProps {
    data:{
    title: string
    description: string
    learnMoreLink?: string
    }
}

export default function CourseCard({data}:ProductCardProps) {
  return (
    <Box sx={{padding:'40px',maxWidth:'600px',minWidth:'400px',width:'550px',boxShadow:" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",borderRadius:'5px'}}>
        <Box sx={{display:'flex',justifyContent:'space-between',marginBottom:'20px'}}>
            <Typography variant='h5' sx={{color:'#939393',fontSize:'12px',fontWeight:'600',textTransform:'uppercase'}}>ClassRoom Based Teaching</Typography>
        </Box>
        <Typography variant='h4' sx={{color:'#fb1201',textDecoration:'underline',fontSize:'20px',fontWeight:'600',textAlign:'start'}}>{data.title}</Typography>

        <Box sx={{marginTop:'30px'}}>
            <Typography  sx={{color:'#545454',fontSize:'16px',textAlign:'start'}}>
                {data.description}
            </Typography>
        </Box>
        <Box sx={{marginTop:'30px'}}>
            <Button sx={{marginRight:'20px',padding:'12px 52px',background:'#fb1201',color:'white',
                '&:hover':{background:'white',color:'#fb1201',border:'1px solid #fb1201'}
            }}>Sign Up</Button>
            <Button sx={{padding:'12px 50px',color:'#fb1201',
                border:'1px solid #fb1201',
                '&:hover':{background:'#fb1201',color:'white'}
            }}>Read More</Button>
        </Box>
        
    </Box>
  )
}
