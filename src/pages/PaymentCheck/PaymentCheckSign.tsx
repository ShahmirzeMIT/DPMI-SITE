
import useSignState from "./useSignState";
import InputText from "../../componets/InputText";
import SelectSingleVertical from "../../componets/SelectSingle";
import { Button, Col, Row, Typography } from "antd";
// import InputMobile from "../../componets/InputMobile";
import PaymenCard from "../../componets/PaymenCard";
import InputPassWord from "../../componets/InputPassword";
const { Title, Text } = Typography;

export default function PaymentCheckSign() {
  const {profileState}=useSignState()
  const submit=()=>{
 
  }
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={10} lg={8}>
        <Title level={4}>
          Already don't have  a membership?{" "}
          <span style={{ color: "#1A73E8", cursor: "pointer" }}>
            <b>Sign here</b>
          </span>
        </Title>
        <Text type="secondary">
          To inquire about membership, please get in touch with your Corporate
          Trainer.
        </Text>

        <div style={{ marginTop: "20px" }}>
            <Typography style={{color: "rgba(0, 0, 0, 0.88)",fontWeight: 600,fontSize: "20px",lineHeight: "1.4"}}>Personal Information</Typography>
            <InputText data={profileState.firstName}/>
            <InputText data={profileState.lastName}/>
            <InputText data={profileState.Email}/>
            <InputPassWord data={profileState.Password}/>
            <Typography style={{color: "rgba(0, 0, 0, 0.88)",fontWeight: 600,fontSize: "20px",lineHeight: "1.4"}}>Billing Information</Typography>
            {/* <InputPassWord data={profileState.ConfirmPassword}/> */}
            <InputText data={profileState.company}/>
            {/* <InputMobile data={profileState.mobile}/> */}
            <InputText data={profileState.addressLine1}/>
            <InputText data={profileState.addressLine2}/>
            {/* <InputText data={profileState.linkedin}/> */}
            {/* <InputText data={profileState.website}/> */}
            <InputText data={profileState.zipCode}/> 
            <InputText data={profileState.city}/>
            <SelectSingleVertical data={profileState.country}/>
        
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
      <Col xs={24} sm={24} md={14} lg={16}>
          {/* Order Summary */}
            <PaymenCard/>
        </Col>
      </Row>
    </div>
  )
}
