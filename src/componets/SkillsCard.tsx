import React from "react";
import { Card, Typography, Row, Col, Avatar } from "antd";
import { Box, Button } from "@mui/material"; // Optional for spacing/styling

const { Title, Paragraph, Link } = Typography;

interface ProductCardProps {
  title: string;
  description: string;
  learnMoreLink: string;
//   icon?: React.ReactNode;
}

const SkillsCard: React.FC<ProductCardProps> = ({
  title,
  description,
  learnMoreLink,
//   icon,
}) => {
  return (
    <Box sx={{ margin: "20px auto", maxWidth: "400px" }}>
      <Card
        style={{
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
        bodyStyle={{ padding: "20px 24px" }}
      >
        {/* Icon and Title */}
        <Row align="middle" style={{ marginBottom: "12px" }}>
          <Col flex="40px" style={{ marginRight: "12px" }}>
            {/* {icon} */}
            <Avatar size={40}  src=""/>
          </Col>
          <Col>
            <Title level={4} style={{ margin: 0 }}>
              {title}
            </Title>
          </Col>
        </Row>

        {/* Description */}
        <Paragraph style={{ 
        fontSize: "18px",
        fontWeight: '300',
        color: "#030303",
        marginBottom:'25px'
      }}>{description}</Paragraph>

        {/* Footer with Links and Buttons */}
        <Row justify="space-between" align="middle">
          <Link href={learnMoreLink} style={{ fontWeight: "500" }}>
            Learn More &gt;&gt;
          </Link>
          <Button  style={{ background:'#E9EDF1',padding: "17px 30px 17px 30px",height:'52px',color:'black',borderRadius:'none' }}>
            Register Now
          </Button>
        </Row>
      </Card>
    </Box>
  );
};

export default SkillsCard;
