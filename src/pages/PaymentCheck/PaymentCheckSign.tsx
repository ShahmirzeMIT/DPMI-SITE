import { Box } from "@mui/material";
import useSignState from "./useSignState";
import InputText from "../../componets/InputText";
import SelectSingleVertical from "../../componets/SelectSingle";
import { Button } from "antd";
import InputMobile from "../../componets/InputMobile";


export default function PaymentCheckSign() {
  const {profileState}=useSignState()
  return (
    <Box sx={{  width:"90%",background:'#fff',  paddingTop: "20px",paddingBottom: "60px"}}>
    <Box sx={{width:'80%',margin:'0 auto'}}>
       <InputText data={profileState.firstName}/>
       <InputText data={profileState.lastName}/>
       <InputText data={profileState.company}/>
        <InputMobile data={profileState.mobile}/>
       <InputText data={profileState.addressLine1}/>
       <InputText data={profileState.addressLine2}/>
       <InputText data={profileState.linkedin}/>
       <InputText data={profileState.website}/>
       <InputText data={profileState.zipCode}/> 
       <SelectSingleVertical data={profileState.city}/>
       <SelectSingleVertical data={profileState.country}/>
        <Box sx={{textAlign:'center',marginTop:'30px'}}>
          <Button type="primary" style={{  height:'48px',width:'54%',fontSize: "22px",fontWeight: "600",textTransform:'uppercase' as const}}>Sign In</Button>
        </Box>
    </Box>
</Box>
  )
}
