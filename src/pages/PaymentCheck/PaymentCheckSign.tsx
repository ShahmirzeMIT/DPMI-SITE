
import useSignState from "./useSignState";
import InputText from "../../componets/InputText";
import SelectSingleVertical from "../../componets/SelectSingle";
import {  Col, Row, Typography } from "antd";
// import InputMobile from "../../componets/InputMobile";
import PaymenCard from "../../componets/PaymenCard";
import InputPassWord from "../../componets/InputPassword";
import { useEffect, useState } from "react";
import ButtonPayment from "../../componets/ButtonPayment";


export default function PaymentCheckSign() {
  const {profileState}=useSignState()
  const [localData, setLocalData] = useState<{
    Price: string;
    CourseName: string;
    CourseImgUrl: string;
    Id:string;
    DiscountedPrice:string
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
  





  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={10} lg={8}>

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
            {/* <InputText data={profileState.linkedin}/> */}
            {/* <InputText data={profileState.website}/> */}
            <InputText data={profileState.zipCode}/> 
            <InputText data={profileState.city}/>
            <SelectSingleVertical data={profileState.country}/>
        
          <br />
          <ButtonPayment data={{
            FkClassId:localData?.Id || "",
            Email:profileState.Email.value,
            Password:profileState.Password.value,
            Price:localData?.Price || "",
            DiscountPrice:localData?.DiscountedPrice || "",
            FirstName:profileState.firstName.value,
            LastName:profileState.lastName.value,
            Company:profileState.company.value,
            AddressLine1:profileState.addressLine1.value,
            Country:profileState.country.value,
            City:profileState.city.value,
            ZipCode:profileState.zipCode.value,
     
            // disabled:profileState.Email.message!='' || profileState.Password.message!='' ? true : false
          }}/>
        </div>
      </Col>
      <Col xs={24} sm={24} md={14} lg={16}>
          {/* Order Summary */}
          <PaymenCard data={{
            Price:localData?.Price || "",
            CourseName:localData?.CourseName || "", 
            CourseImgUrl:localData?.CourseImgUrl || "",
            DiscountedPrice:localData?.DiscountedPrice || "",
          }}/>
        </Col>
      </Row>
    </div>
  )
}
