import { Avatar, Card, Col, Divider, Row, Typography } from 'antd'
const { Title, Text } = Typography;
export interface PaymentCardProps{
  data:{
    Price:string;
    CourseName:string;
    CourseImgUrl:string
  }
}
export default function PaymenCard({data}:PaymentCardProps) {
  return (
    <>
       <Card
    title={<b>ORDER SUMMARY</b>}
    bordered={false}
    style={{ marginBottom: "20px" }}
  >
    <Row justify="space-between">
      <Col>
        <Text>Items:</Text>
      </Col>
      <Col>
        <Text>{data.Price}$</Text>
      </Col>
    </Row>
    <Row justify="space-between">
      <Col>
        <Text>Tax:</Text>
      </Col>
      <Col>
        <Text>Free</Text>
      </Col>
    </Row>
    <Divider />
    <Row justify="space-between">
      <Col>
        <Title level={5}>Due at check-out:</Title>
      </Col>
      <Col>
        <Title level={5}>{data.Price}$</Title>
      </Col>
    </Row>
  </Card>
  {/* Shopping Cart */}
  <Card title={<b>SHOPPING CART</b>} bordered={false}>
    <Row>
      <Col xs={24} sm={8} md={6}>
        <Avatar src={data.CourseImgUrl} style={{ height: "100px", width: "100px" }}  shape="square"/>
      </Col>
      <Col xs={24} sm={16} md={18} style={{ paddingLeft: "10px" }}>
        <Row justify="space-between">
          <Col>
            <Text>{data.CourseName}</Text>
          </Col>
          <Col>
            <Text>{data.Price}$</Text>
          </Col>
        </Row>
        <div style={{ marginTop: "10px" }}>
          <Text>Quantity: 1</Text>
          <br />
          <Text>Price: 136.99$</Text>
        </div>
      </Col>
    </Row>
  </Card>
    </>
 
  )
}
