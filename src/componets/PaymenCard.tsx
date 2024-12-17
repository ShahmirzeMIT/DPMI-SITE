import { Card, Col, Divider, Row, Typography } from 'antd'
const { Title, Text } = Typography;

export default function PaymenCard() {
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
        <Text>136.99$</Text>
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
        <Title level={5}>136.99$</Title>
      </Col>
    </Row>
  </Card>
  {/* Shopping Cart */}
  <Card title={<b>SHOPPING CART</b>} bordered={false}>
    <Row>
      <Col xs={24} sm={8} md={6}>
        <div
          style={{
            width: "100%",
            height: "100px",
            backgroundColor: "#6699ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          CP-LD®
        </div>
      </Col>
      <Col xs={24} sm={16} md={18} style={{ paddingLeft: "10px" }}>
        <Row justify="space-between">
          <Col>
            <Text>Language of Data</Text>
          </Col>
          <Col>
            <Text>136.99$</Text>
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
