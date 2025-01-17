import { Modal, Box } from "@mui/material";
import { useState } from "react";
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
  const handleOpen = () => {
    setOpen(true);
    getData();
  };
  // const [changTitle, setChangTitle] = useState("");
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    if (requestData.length == 0) return;
    const response = await callApi("/lms/main/myneeds/skill/by/challenges", {
      FkChallengesId: requestData,
    });

    const challanges = await callApi("/lms/main/myneeds/challenges/list");
    const updatedData = challanges.map((item: any) => ({
      ...item,
      Chanllanges: response.filter(
        (challengeResponse: any) => challengeResponse.FkChallengesId == item.Id
      ),
    }));

    setData(updatedData);
  };

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

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          width: "100%",
          maxWidth: "1340px",  // Maksimum eni məhdudlaşdırır
          margin: "0 auto",
          overflow: "hidden",
          // position:'relative'
        }}
      >
        <>
          {/* Spacer to Account for Fixed Header */}
          <Box sx={{ height: "30px" }}></Box>

          {/* Accordion Section */}
          <Box
            sx={{
              maxHeight: "92vh",
              overflowY: "scroll",
              position: "relative",
            }}
          >
            <Box
               sx={{
                width: { xs: "80vw", sm: "88vw", md: "85vw", lg: "1280px",xl:"1280px" }, 
                height: "50px",
                background: "#f9f9f9",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                position: "fixed",
                zIndex: 1000,
                margin: { xs: "0px 45px",sm:"0px 40px", md: "0 130px", lg: "0 10px",xl:"0 20px" },
              }}
            >
              <Button
                style={{
                  background: "#d32f2f",
                  color: "white",
                  fontSize: "16px",
                }}
                onClick={handleClose}
              >
                X
              </Button>
            </Box>

            {/* </Box> */}
            {data.map((item: any, index: number) => (
              <HeaderWithAccordion
                key={index}
                cardData={item.Chanllanges}
                title={item.ChallengeName}
                handleClose={handleClose}
              />
            ))}
          </Box>

          {/* <HeaderWithAccordion cardData={data.} title={"My Needs"} handleClose={handleClose}  /> */}
        </>
      </Modal>
    </>
  );
}
