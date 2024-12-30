import { Modal, Box } from "@mui/material";
import { useEffect, useState } from "react";
import HeaderWithAccordion from "./MyNeedsAccordion";
import { callApi } from "../../utils/callApi";
import { Button } from "antd";


export default function MyNeedsModal() {
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
          backgroundColor: "#F96C23",
          borderColor: "#F96C23",
          padding: "10px 20px",
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
        <Box sx={{background:'#F9F9F9',textAlign:'end'}}><Button onClick={handleClose} style={{color:'red'}}>X</Button></Box>
        <HeaderWithAccordion  cardData={data}/>
        </>
          

      </Modal>
    </>
  );
}
