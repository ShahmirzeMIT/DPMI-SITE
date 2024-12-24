import { Avatar, Button, Card, Col, Divider, Input, Row, Typography } from 'antd'
const { Title, Text } = Typography;
export interface PaymentCardProps{
  data:{
    Price:string;
    CourseName:string;
    CourseImgUrl:string
    DiscountedPrice:string
  }
}
export default function PaymenCard({data}:PaymentCardProps) {
  return (
    <>
  
  {/* Shopping Cart */}
  <Card bordered={false}>
    <Row>
      <Col xs={24} sm={8} md={6}>
        <Avatar src={data.CourseImgUrl} style={{ height: "100px", width: "100px" }}  shape="square"/>
      </Col>
      <Col xs={24} sm={16} md={18} style={{ paddingLeft: "10px" }}>
        <Row justify="space-between">
          <Col>
            <Text style={{ fontWeight: "400", fontSize:'28px'}}>{data.CourseName}</Text>
          </Col>
          
        </Row>
        
      </Col>
    </Row>
  </Card>
  <Card
    title={<b>ORDER SUMMARY</b>}
    bordered={false}
    style={{ marginBottom: "20px" }}
  >
    <Row justify="space-between">
      <Col>
        <Text>Price:</Text>
      </Col>
      <Col>
        <Text>{data.Price}$</Text>
      </Col>
    </Row>
    <Row justify="space-between">
      <Col>
        <Text>Discounted Price:</Text>
      </Col>
      <Col>
        <Text>{data.DiscountedPrice}$</Text>
      </Col>
    </Row>
    <Row justify="space-between">
      <Col>
        <Text>Promocode Discount:</Text>
      </Col>
      <Col>
        <Text>{data.DiscountedPrice}$</Text>
      </Col>
    </Row>
    <Row justify="space-between">
      <Col>
        <Text>Quantity:</Text>
      </Col>
      <Col>
        <Text>1</Text>
      </Col>
    </Row>
    {/* <Text>Quantity: 1</Text> */}
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
        <Title level={5}>Final Price:</Title>
      </Col>
      <Col>
        <Title level={5}>{data.DiscountedPrice}$</Title>
      </Col>
    </Row>
    <Divider />
    <Row justify="space-between">
      {/* <Col> */}
      <Input placeholder={"Promocode"} style={{width:'200px'}}/>
      <Button style={{backgroundColor:'#2A73B3',color:'white'}}>Apply</Button>

    </Row>
  </Card>
    </>
 
  )
}
