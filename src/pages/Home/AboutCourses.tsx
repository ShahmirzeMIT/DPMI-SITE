import { Box } from '@mui/material'
import ProductManagerCard from '../../componets/ProductManagerCard'
export default function AboutCourses() {
  return (
    <Box >
        <Box sx={{ padding: "80px 10px 60px 10px"}}>
            <h1 style={{color:'black',fontSize: "36px", fontWeight: 600,width:'60%',margin:'0 auto'}}>The Most Sought-After Product Management and Product Marketing Certifications In The World</h1>

            <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',width:'80%',margin:'0 auto'}}>
                {
                    [1,2,3,4,5].map((item, index) => <ProductManagerCard data={{id:item}} key={index}/>)
                }
            </Box>
           
        </Box>
    </Box>
  )
}
