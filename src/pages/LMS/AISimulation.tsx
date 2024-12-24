import { Box } from '@mui/material';
import HeroSectionAi from './HeroSection';
import SkillGapComponent from './SkillGapComponent';
import SkillDefinition from './SkillDefinition';
import { aiSimulationData, whyChoose } from '../../defaultDatas/aiSimulationData';
import WhySpf from '../SFP/WhySpf';

export default function AISimulation() {
  const data = aiSimulationData;
 

  return (
    <Box sx={{ color: 'black', marginTop: '130px' }}>
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
