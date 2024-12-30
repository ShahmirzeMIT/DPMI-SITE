import { Modal, Box } from "@mui/material";
import { useEffect, useState } from "react";
import HeaderWithAccordion from "./MyNeedsAccordion";
import { callApi } from "../../utils/callApi";
import { Button } from "antd";

interface CardDataProps {
  requestData: string[];
  title: string;
  Challenges: [];
}

export default function MyNeedsModal({ requestData }: CardDataProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [changTitle, setChangTitle] = useState("");
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);


  const getData = async () => {
    const response = await callApi("/lms/main/myneeds/skill/by/challenges", {
      FkChallengesId: requestData,
    });

    const challanges= await callApi('/lms/main/myneeds/challenges/list')
    const updatedData=challanges.map((item:any)=>({
      ...item,
      Chanllanges:response.filter((challengeResponse:any)=>challengeResponse.FkChallengesId==item.Id)
    }))
    
    console.log(updatedData,'updatedData');
    
    setData(updatedData);
  };

  useEffect(() => {
    getData();
    
  }, [requestData]);
 
  
const checkData=data.map((item:any)=>{
  // console.log(item,'item');
  
  return item
})
console.log(checkData,'checkData');

  return (
    <>
      {/* Button to open the modal */}
      <Button
        type="primary"
        onClick={handleOpen}
        style={{
          marginTop: "20px",
          borderColor: "#F96C21",
          padding: "10px 20px",
          backgroundColor: "#F96C21",
        }}
      >
        Check Required Skills
      </Button>

      <Modal open={open} onClose={handleClose}>
        <>
      

          {/* Spacer to Account for Fixed Header */}
          <Box sx={{ height: "30px" }}></Box>

          {/* Accordion Section */}
          <Box sx={{ maxHeight: "85vh",
        overflowY: "scroll",
        position: "relative",}}>
{
            data.map((item: any, index: number) => (
              <HeaderWithAccordion
                key={index}
                cardData={item.Chanllanges}
                title={item.ChallengeName}
                handleClose={handleClose}
              />
            ))
          }
          </Box>
          
          {/* <HeaderWithAccordion cardData={data.} title={"My Needs"} handleClose={handleClose}  /> */}
        </>
      </Modal>
    </>
  );
}
