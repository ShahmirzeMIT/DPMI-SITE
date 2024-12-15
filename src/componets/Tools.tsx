import { Box } from '@mui/material'
import { Avatar, Card } from 'antd'
import { Typography } from 'antd'
import { toolsData } from '../defaultDatas/toolsData';
const { Title, Link } = Typography;
interface ToolsProps {
    data:{
        id: number;
    }
}
export default function Tools({data}:ToolsProps) {
    const selectedData = toolsData.find((item:{ id: number}) => item.id === data.id);

  return (
    <Box
    style={{
      position: "relative",
      width: "350px",
      margin: "50px auto",
      height: "250px",
    }}
  >
    <Card
      style={{
        borderRadius: "10px",
        textAlign: "start",
        // backgroundImage: selectedData.bgColor,
        boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)",
        color: "#fff",
        height: "280px",
      }}
      bodyStyle={{ padding: "30px 40px" }}
    >
    <Avatar size={60} src={selectedData?.img} />
      <Title  level={3} style={{ color: "black",marginTop:'10px' }}>
        {selectedData?.title}
      </Title>
      <Typography style={{
        fontSize: "18px",
        fontWeight: '300',
        color: "#030303",
        marginBottom:'25px'
      }}>{selectedData?.description}</Typography>
      <Link
        href="#"
        style={{
            color: "#2779DB",
          fontSize: "16px",
          textDecoration: "underline",
        }}
      >
        Learn More &gt;&gt;
      </Link>
    </Card>
  </Box>
  )
}
