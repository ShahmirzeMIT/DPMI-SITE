import {  Button, Card, Typography, Row, Col, Divider } from "antd";
import usePaymentState from "./usePaymentState";
import InputText from "../../componets/InputText";
import InputPassWord from "../../componets/InputPassword";
import { callApi } from "../../utils/callApi";

const { Title, Text } = Typography;

export default function PayMentCheckLogin() {
  const {paymentState, setPaymentState}=usePaymentState()

  const submit=async()=>{
    await  callApi('/user/main/login',{
      "Email":paymentState.Email.value,
      "Password":paymentState.Password.value
    })
    setPaymentState((prev)=>({
      Email: {...prev.Email, value:""},
      Password: {...prev.Password, value:""},
    }))

  }
  
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={10} lg={8}>
          <Title level={4}>
            Already a member?{" "}
            <span style={{ color: "#1A73E8", cursor: "pointer" }}>
              <b>Login here</b>
            </span>
          </Title>
          <Text type="secondary">
            To inquire about membership, please get in touch with your Corporate
            Trainer.
          </Text>

          <div style={{ marginTop: "20px" }}>
            <InputText data={paymentState.Email}/>
              <br />
            <InputPassWord data={paymentState.Password}/>
            <br />
            <Button
              type="primary"
              style={{ width: "100%", backgroundColor: "#3b82f6" }}
              onClick={submit}
            >
              Apply
            </Button>
          </div>
        </Col>

        {/* Right Section */}
        <Col xs={24} sm={24} md={14} lg={16}>
          {/* Order Summary */}
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
        </Col>
      </Row>
    </div>
  );
}
