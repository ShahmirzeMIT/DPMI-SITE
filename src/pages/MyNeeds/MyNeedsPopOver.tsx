import { Modal, Box } from "@mui/material";
import { useEffect, useState } from "react";
import HeaderWithAccordion from "./MyNeedsAccordion";
import { callApi } from "../../utils/callApi";
import { Button } from "antd";

interface CardDataProps {
  requestData: string[];
  title: string;
  Challenges: any[];
}

export default function MyNeedsModal({ requestData, Challenges }: CardDataProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [changTitle, setChangTitle] = useState("");
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);


  const getData = async () => {
    const response = await callApi("/lms/main/myneeds/skill/by/challenges", {
      FkChallengesId: "1",
    });
    setData(response);
  };

  useEffect(() => {
    getData();
    
  }, []);
  useEffect(() => {
    if (requestData.length > 0) {
      // Filter items where Id matches "1"
      const filteredData = Challenges.filter((item:any) => item.Id === "1");
      console.log(filteredData, "filteredData");
      setChangTitle(filteredData[0]?.ChallengeName || "");
      // Optionally update the state if needed
      // setChangTitle(filteredData[0]?.ChallengeName || "");
    }
  }, [requestData]);
  

  console.log(Challenges,requestData, "Challenges");

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
          <HeaderWithAccordion cardData={data} title={changTitle} handleClose={handleClose}  />
        </>
      </Modal>
    </>
  );
}
