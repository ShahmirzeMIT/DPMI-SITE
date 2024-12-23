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
import DetailCard from '../../componets/DetailCard';
import { Avatar, Typography } from 'antd';
import Logo from '../../assets/images/detailIcon.png';
import RoadmapACPF from '../ACFP/RoadMapACPF';
import RoadmapACPP from '../ACPP/RoadMapACPP';
import RoadmapDPM from '../DPM/RoadMapDPM';
import RoadmapAIPP from '../AIPP/RoadMapAIPP';
import RoadmapAIFP from '../AIPF/RoadMapAIPF';

const data = [
    { id: "1003", roadMap: <Roadmap /> },
    { id: "1006", roadMap: <RoadmapACPF /> },
    { id: "1004", roadMap: <RoadmapACPP /> },
    { id: "1005", roadMap: <RoadmapDPM /> },
    { id: '5', roadMap: <RoadmapAIPP /> },
    { id: '1', roadMap: <RoadmapAIFP /> }
];

export default function CertificationDetails() {
    const { certificateId } = useParams<{ certificateId: string }>(); 
    const selectedData = certificationsListData.find((item: any) => item.id === certificateId);

    if (!selectedData) {
        return (
            <Box sx={{ marginTop: '120px', color: 'gray' }}>
                <h2>Certification not found</h2>
            </Box>
        );
    }

    // Find the corresponding roadmap based on the certificateId
    const selectedRoadmap = data.find(item => item.id === certificateId);

    return (
        <Box sx={{ marginTop: '120px', color: 'gray' }}>
            <ProductManagerCourseView data={{
                title: selectedData.title,
                text: selectedData.text,
                links: selectedData.links,
                enroll: selectedData.enroll,
                image: selectedData.image
            }} />
            <ResponsiveSteps />
            <CardCertificationView />
            {/* Render the selected roadmap if it exists */}
            {selectedRoadmap && selectedRoadmap.roadMap}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '90%', margin: '40px auto', gap: '60px' }}>
                {selectedData.courseModules.map((item, index) => (
                    <DigitalProductFoundationModule key={index} data={item} />
                ))}
            </Box>
            <WhySpf data={selectedData.whyUs} />
            <WhatGetSPF data={selectedData.whatyouGet} />
            <WhatLearnSpf data={selectedData.whatLearn} />
            <Box>
                <Typography style={{ color: 'black', fontSize: '30px', fontWeight: '600', textAlign: 'start', marginLeft: '80px' }}>
                    <Avatar src={Logo} style={{ width: '60px', height: '60px', marginRight: '20px' }} shape="square" />
                    Details of the Courses
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '90%', margin: '20px auto' }}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_item, index) => (
                        <DetailCard key={index} />
                    ))
                }
            </Box>
        </Box>
    );
}