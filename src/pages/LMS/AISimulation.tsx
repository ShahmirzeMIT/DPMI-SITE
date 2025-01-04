import { Box } from '@mui/material';
import HeroSectionAi from './HeroSection';

import SkillDefinition from './SkillDefinition';
import { aiSimulationData, whyChoose } from '../../defaultDatas/aiSimulationData';
import WhySpf from '../SFP/WhySpf';
import SkillGapComponent from './SkillGapCOmponent';

export default function AISimulation() {
  const data = aiSimulationData;
 

  return (
    <Box sx={{ color: 'black',   marginTop: { xs: "40px", md: "120px"}, }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <HeroSectionAi />
        <SkillGapComponent />
        {
          data.map((item) => (
            <SkillDefinition key={item.id} data={item} />
          ))
        }
        <WhySpf data={whyChoose[0].data} title={whyChoose[0].title} />
      </Box>
    </Box>
  );
}
