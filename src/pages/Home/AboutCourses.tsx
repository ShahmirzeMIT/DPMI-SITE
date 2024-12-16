import { Box } from '@mui/material'
import ProductManagerCard from '../../componets/ProductManagerCard'
import { Button } from 'antd'
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
           <Box>
            <Button style={{background:'#E9EDF1',padding: "17px 30px 17px 30px",height:'52px',color:'black',borderRadius:'none',marginRight:'20px'}}>View Certificates  &gt;&gt;</Button>
            <Button style={{background:'#E9EDF1',padding: "17px 30px 17px 30px",height:'52px',color:'black',borderRadius:'none'}}>View Courses  &gt;&gt;</Button>
           </Box>
        </Box>
    </Box>
  )
}
