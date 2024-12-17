import {   Typography, Row, Col } from "antd";
import usePaymentState from "./usePaymentState";
import InputText from "../../componets/InputText";
import InputPassWord from "../../componets/InputPassword";
import PaymenCard from "../../componets/PaymenCard";
import { useEffect, useState } from "react";
import ButtonPaymentForLogin from "../../componets/ButtonPaymentForLogin";

const { Title, Text } = Typography;

export default function PayMentCheckLogin() {
  const {paymentState}=usePaymentState()
  const [localData, setLocalData] = useState<{
    Price: string;
    CourseName: string;
    CourseImgUrl: string;
    DiscountedPrice:string
    Id:string;
  } | null>(null);
  

  const getPaymentData=()=>{
    const data=localStorage.getItem('paymentData')
    if(data) {
      return JSON.parse(data)

    }

    return null

  }
  useEffect(() => {
    const local = getPaymentData();
    if (local) {
      setLocalData(local);
    }
    
  }, [])

  console.log(localData,'localData');
  
  
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
            
            <ButtonPaymentForLogin data={{
              Email:paymentState.Email.value,
              FkClassId:localData?.Id || "",
              Password:paymentState.Password.value,
            }}/>
            
          </div>
        </Col>

        {/* Right Section */}
        <Col xs={24} sm={24} md={14} lg={16}>
          {/* Order Summary */}
          <PaymenCard data={{
            Price:localData?.Price || "",
            CourseName:localData?.CourseName || "", 
            CourseImgUrl:localData?.CourseImgUrl || "",
            DiscountedPrice:localData?.DiscountedPrice || ""
          }}/>
        </Col>
      </Row>
    </div>
  );
}
