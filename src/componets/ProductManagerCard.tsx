import React from "react";
import { Avatar, Card, Typography } from "antd";
import "antd/dist/reset.css";
import { Box } from "@mui/material";
import { ProductManagerCardData } from "../defaultDatas/productManagerCardDefaultData";

const { Title, Link } = Typography;

interface ProductManagerCardProps {
    data:{
         id: number;
    }
}

const ProductManagerCard: React.FC<ProductManagerCardProps> = ({ data }: ProductManagerCardProps) => {
  // id ilə datanı tapırıq
  const selectedData = ProductManagerCardData.find((item:{ id: number}) => item.id === data.id);

  if (!selectedData) {
    // Əgər id tapılmasa, məlumat yoxdur mesajı qaytarırıq
    return (
      <Box style={{ textAlign: "center", margin: "50px auto" }}>
        <Title level={4}>Məlumat tapılmadı!</Title>
      </Box>
    );
  }

  return (
    <Box
      style={{
        position: "relative",
        width: "350px",
        margin: "50px auto",
        height: "250px",
      }}
    >
      {/* Badge Avatar */}
      <Box
        sx={{
          position: "absolute",
          top: "-45px",
          left: "25%",
          transform: "translateX(-50%)",
          zIndex: 9,
        }}
      >
        <Avatar size={150} src={selectedData.image} />
      </Box>

      {/* Card */}
      <Card
        style={{
          borderRadius: "10px",
          textAlign: "start",
          backgroundImage: selectedData.bgColor,
          color: "#fff",
          height: "200px",
        }}
        bodyStyle={{ padding: "80px 20px" }}
      >
        <Title level={3} style={{ color: "#fff" }}>
          {selectedData.title}
        </Title>
        <Link
          href="#"
          style={{
            color: "#fff",
            fontSize: "16px",
            textDecoration: "underline",
          }}
        >
          Learn More &gt;&gt;
        </Link>
      </Card>
    </Box>
  );
};

export default ProductManagerCard;
