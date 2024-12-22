import { Box } from '@mui/material'
// import ProductManagerCard from '../../componets/ProductManagerCard'
import { Button } from 'antd'
import CertificateCard from '../SecondHome/CertificateCard'
import { ProductManagerCardData } from '../../defaultDatas/productManagerCardDefaultData'
export default function AboutCourses() {
  return (
    <Box >
        <Box sx={{ padding: "80px 10px 60px 10px",margin:{xs:'0', sm:'0',md:'120px',lg:0}}}>
            <h1 style={{color:'black',fontSize: "36px", fontWeight: 600,width:'60%',margin:'0 auto'}}>Our Certifications</h1>

            <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',width:'80%',margin:'0 auto',gap:4,  marginBottom:'60px',marginTop:'40px' }}>
                {
                   ProductManagerCardData.map((item:{title:string,image:string}, index) => <CertificateCard data={{
                      id:index.toString(),
                      title:item.title,
                      image:item.image
                    }} key={index}/>)
                }
            </Box>
           <Box>
            <Button style={{background:'#E9EDF1',padding: "17px 30px 17px 30px",height:'52px',color:'black',borderRadius:'none',marginRight:'20px'}}>View Certificates  &gt;&gt;</Button>
       
           </Box>
        </Box>
    </Box>
  )
}
