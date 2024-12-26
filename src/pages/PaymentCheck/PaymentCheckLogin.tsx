import {    Row, Col, Checkbox, Typography } from "antd";
import usePaymentState from "./usePaymentState";
import InputText from "../../componets/InputText";
import InputPassWord from "../../componets/InputPassword";
import PaymenCard from "../../componets/PaymenCard";
import { useEffect, useState } from "react";
import ButtonPaymentForLogin from "../../componets/ButtonPaymentForLogin";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";


export default function PayMentCheckLogin() {
  const navigate = useNavigate();
  const {paymentState}=usePaymentState()
  const [disabled, setDisabled] = useState(false);
  const [localData, setLocalData] = useState<{
    Price: string;
    CourseName: string;
    CourseImgUrl: string;
    DiscountedPrice:string
    FkClassId:string
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
  
  const onChange = (e:any) => {
    setDisabled(e.target.checked)
  }
  
  
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={10} lg={8}>
        

          <div style={{ marginTop: "20px" }}>
            <InputText data={paymentState.Email}/>
              <br />
            <InputPassWord data={paymentState.Password}/>
            <br />
            <Box sx={{textAlign:'start'}}>
                <Checkbox onChange={onChange}>
                I agree
            </Checkbox>
            </Box>
           
            <Typography style={{color:'blacl',textAlign:'start'}}>  By checking the box below, you agree to DPM Institute's  {" "}
                        <a  onClick={() =>navigate('/termofuse')} >Terms of Use</a></Typography>
            <ButtonPaymentForLogin data={{
              Email:paymentState.Email.value,
              FkClassId:localData?.Id || "",
              Password:paymentState.Password.value,
              disabled:disabled,
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
            DiscountedPrice:localData?.DiscountedPrice || "",
            FkClassId:localData?.Id || "",
          }}/>
        </Col>
      </Row>
    </div>
  );
}
