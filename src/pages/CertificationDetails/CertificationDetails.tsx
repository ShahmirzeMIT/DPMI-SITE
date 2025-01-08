import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { certificationsListData } from "../../defaultDatas/certificationsListData";
import ProductManagerCourseView from "../SFP/ProductManagerCourseView";
// import ResponsiveSteps from '../../componets/ResponsiveSteps';
import CardCertificationView from "../SFP/CardCertificationView";
// import Roadmap from '../SFP/RoadMap';
import DigitalProductFoundationModule from "../SFP/DigitalFounDationProductModule";
import WhySpf from "../SFP/WhySpf";
import WhatGetSPF from "../SFP/WhatGetSPF";
import WhatLearnSpf from "../SFP/WhatLearnSpf";
import DetailCard from "../../componets/DetailCard";
import { Avatar, Typography } from "antd";
import Logo from "../../assets/images/detailIcon.png";
// import StepOver from "./StepOver";
// import StepOver from "./StepOver";
import  Timeline  from '../Animations/StepComponent'

export default function CertificationDetails() {
  const { certificateId } = useParams<{ certificateId: string }>();
  const selectedData = certificationsListData.find(
    (item: any) => item.id === certificateId
  );

  if (!selectedData) {
    return (
      <Box sx={{  marginTop: { xs: "20px", md: "120px"}, color: "gray" }}>
        <h2>Certification not found</h2>
      </Box>
    );
  }

  return (
    <Box sx={{}}>
      <Box
        sx={{
          marginTop: { xs: "20px", md: "120px"},
          color: "gray",
          maxWidth: "1280px",
          margin:  "0 auto",
        }}
      >
        <ProductManagerCourseView
          data={{
            title: selectedData.title,
            text: selectedData.shortDesc,
            links: selectedData.links,
            enroll: selectedData.enroll,
            image: selectedData.image,
          }}
        />
        {/* <StepOver/> */}
        {/* <Box sx={{height:"340px", backgroundColor:"#F9FAFC"}}>

        </Box> */}
        {/* <Box sx={{ }}>
           <StepOver/>
        </Box> */}
        {/* <ResponsiveSteps /> */}
        <CardCertificationView />
        <Box sx={{ marginTop: "90px" }}>
          <Typography
            style={{ color: "black", fontWeight: "400", fontSize: "48px",marginBottom:'40px' }}
          >
            Learning Journey
          </Typography>
          <Timeline modules={selectedData?.courseModules || []} index={certificateId as any}/>
          
        </Box>
        <Typography
          style={{
            color: "black",
            fontSize: "36px",
            fontWeight: 400,
            width: "100%",
            margin: "60px auto 0 auto",
            background: "#F9FAFC",
            padding: "30px 0",
           
          }}
        >
          Details of Modules
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            margin: "0px auto",
            flexWrap: "wrap",
            gap: "60px",
            background: "#F9FAFC",
            padding: "40px 10px",
          }}
        >
          {selectedData.courseModules.map((item, index) => (
            <DigitalProductFoundationModule key={index} data={item} />
          ))}
        </Box>
        <WhySpf data={selectedData.whyUs} title={selectedData.title} />
        <WhatGetSPF data={selectedData.whatyouGet} />
        <WhatLearnSpf data={selectedData.whatLearn} />

        <Box id="courses">
          <Typography
            style={{
              color: "black",
              fontSize: "30px",
              fontWeight: "400",
              textAlign: "start",
              marginLeft: "80px",
               textTransform:'uppercase',
               marginBottom:'60px'
            }}
          >
            <Avatar
              src={Logo}
              style={{ width: "60px", height: "60px", marginRight: "20px", }}
              shape="square"
            />
             Course Lists
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: "90%",
            margin: "20px auto",
            gap: "40px",
          }}
        >
        {selectedData.courseModules.map((module, index) =>
            module.course.map((item, subIndex) => (
              <DetailCard key={`${index}-${subIndex}`} data={item} />
            ))
          )}

        </Box>
      </Box>
    </Box>
  );
}
