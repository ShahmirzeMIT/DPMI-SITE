import { Modal, Box } from "@mui/material";
import { useEffect, useState } from "react";
import HeaderWithAccordion from "./MyNeedsAccordion";
import { callApi } from "../../utils/callApi";
import { Button } from "antd";
interface CardDataProps {
  requestData:string[],
  title:string
}

export default function MyNeedsModal({ requestData,title }: CardDataProps) {
  console.log(requestData, "requestData");
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await callApi("/lms/main/myneeds/skill/by/challenges", {
      FkChallengesId: "1",
    });
    setData(response);
    console.log(response, "response");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* Button to open the modal */}
      <Button
        type="primary"
        onClick={handleOpen}
        style={{
          marginTop: "20px",
          // backgroundColor: "",
          borderColor: "#F96C21",
          padding: "10px 20px",
          backgroundColor: "#F96C21",
        }}
      >
        Check Required Skills
      </Button>

      <Modal
        open={open} // Correct close mechanism
        style={{
          overflow: "auto",
        }}
      >
        {/* Wrap the modal content in a Box */}
        {/* <Box sx={style}>
        
        </Box> */}
        <>
        <Box sx={{background:'#F9F9F9',textAlign:'end'}}><Button onClick={handleClose} type="primary" danger style={{marginTop:'40px',marginRight:'40px'}}>X</Button></Box>
        <HeaderWithAccordion  cardData={data} title={data.title}/>
        </>
          

      </Modal>
    </>
  );
}
