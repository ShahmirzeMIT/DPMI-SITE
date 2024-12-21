
import ACPPCertificationView from './ACPPCertificationView'
import CardDPMCaertificationView from '../DPM/CardDPMCaertificationView'
import RoadmapACPP from './RoadMapACPP'
import WhyACPP from './WhyACPP'
import WhatGetACPP from './WhatGetACPP'
import { Box } from '@mui/material'
import { acppData } from './acppData'
import DigitalProductFoundationModule from '../SFP/DigitalFounDationProductModule'
import WhatLearnACPP from './WhatLearnACPP'
import DetailofACPP from './DetailsofACPP'

export default function ACPP() {
  return (
    <div>
        <ACPPCertificationView/>
        <CardDPMCaertificationView/>
        <RoadmapACPP/>
        <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',width:'90%',margin:'40px auto',gap:'60px',alignItems:'center'}}>
          {acppData.map((item, index) => <DigitalProductFoundationModule key={index} data={item}/>)}
        </Box>
        <WhyACPP/>
        <WhatGetACPP/>
        <WhatLearnACPP/>
        <DetailofACPP/>
    </div>
  )
}
