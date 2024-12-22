import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { certificationsListData } from '../../defaultDatas/certificationsListData';
import ProductManagerCourseView from '../SFP/ProductManagerCourseView';
import ResponsiveSteps from '../../componets/ResponsiveSteps';
import CardCertificationView from '../SFP/CardCertificationView';
import Roadmap from '../SFP/RoadMap';
import DigitalProductFoundationModule from '../SFP/DigitalFounDationProductModule';
import WhySpf from '../SFP/WhySpf';
import WhatGetSPF from '../SFP/WhatGetSPF';
import WhatLearnSpf from '../SFP/WhatLearnSpf';
import DetailofDpmCourse from '../DPM/DetailofDpmCourse';

// Define a type for the certification data
// interface Certification {
//     id: string;
//     title: string;
//     text: string;
//     links: string;
//     enroll: string;
//     image: string;
//     courseModules: {
//         title: string;
//         shortDesc: string;
//         mdHours: string;
//         courses: string;
//     }[];
//     whyUs:{
//         title: string;
//         desc: string
//     }[],
//     whatyouGet:{
//         boldTitle: string;
//         title: string
//     }[],
//     whatLearn:{
//         title: string
//     }[]
// }

export default function CertificationDetails() {
    const { certificateId } = useParams<{ certificateId: string }>(); 
    const selectedData = certificationsListData.find((item: any) => item.id === certificateId);

    // Check if selectedData is undefined
    if (!selectedData) {
        return (
            <Box sx={{ marginTop: '120px', color: 'gray' }}>
                <h2>Certification not found</h2>
            </Box>
        );
    }

    return (
        <Box sx={{ marginTop: '120px', color: 'gray' }}>
            <ProductManagerCourseView data={{
                title: selectedData.title, // No need for default value since we checked for undefined
                text: selectedData.text,
                links: selectedData.links,
                enroll: selectedData.enroll,
                image: selectedData.image
            }} />
            <ResponsiveSteps />
            <CardCertificationView />
            <Roadmap />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '90%', margin: '40px auto', gap: '60px' }}>
                {selectedData.courseModules.map((item, index) => (
                    <DigitalProductFoundationModule key={index} data={item} />
                ))}
            </Box>
            <WhySpf data={selectedData.whyUs}/>
            <WhatGetSPF  data={selectedData.whatyouGet}/>
            <WhatLearnSpf data={selectedData.whatLearn}/>
            <DetailofDpmCourse />
        </Box>
    );
}