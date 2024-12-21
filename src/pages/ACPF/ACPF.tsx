import { Box } from '@mui/material'
import CardDPMCaertificationView from '../DPM/CardDPMCaertificationView'
import CardACPFCertificationView from './ACPFCertificationView'
import RoadmapACPF from './RoadMapACPF'
import { acpfData } from './acpfData'
import DigitalProductFoundationModule from '../SFP/DigitalFounDationProductModule'
import WhyACPF from './WhyAIPF'
import WhatACPF from './WhatACPF'
import WhatLearnACPF from './WhatLearnACPF'
import DetailofACPF from './DetailofACPF'

export default function ACPF() {
  return (
    <div>
        <CardACPFCertificationView/>
        <CardDPMCaertificationView/>
        <RoadmapACPF/>
        <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',width:'90%',margin:'40px auto',gap:'60px',alignItems:'center'}}>
        {acpfData.map((item, index) => <DigitalProductFoundationModule key={index} data={item}/>)}
      </Box>
      <WhyACPF/>
      <WhatACPF/>
      <WhatLearnACPF/>
      <DetailofACPF/>
    </div>
  )
}
