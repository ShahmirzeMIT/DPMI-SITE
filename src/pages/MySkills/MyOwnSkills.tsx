import {  Box, Modal } from "@mui/material";
import { useState } from "react";
import { callApi } from "../../utils/callApi";
import { Button } from "antd";
import MySkillsAccordion from "./MySkillsAccordion";

interface CardDataProps {
  requestData: string[];
  title: string;
  Challenges: [];
}

export default function MyOwnSkills({ requestData }: CardDataProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    getData();
    setOpen(true)};
  // const [changTitle, setChangTitle] = useState("");
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    const responseSkills = await callApi("/lms/main/myneeds/skills/list");
    const responseChallenges = await callApi(
      "/lms/main/myneeds/challenges/by/skills",
      { FkSkillsId: requestData }
    );
    const filterResponseSkills = responseSkills.filter((item: any) =>
      requestData.includes(item.Id)
    );


    // Combine skills with their respective challenges
    const combinedData = filterResponseSkills.map((skill: any) => ({
      ...skill,
      Challenges: responseChallenges.filter(
        (challenge: any) => challenge.FkSkillsId == skill.Id
      ),
    }));


    setData(combinedData);
  };


  return (
    <>
      {/* Button to open the modal */}
      <Button
        type="primary"
        onClick={handleOpen}
        style={{
          marginTop: "20px",
          backgroundColor: "white",
          borderColor: "#2A73B1",
          padding: "15px 25px",
          color: "#2A73B1",
        }}
      >
        Show all Challenges
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          width: "100%",
          maxWidth: "1340px", // Maksimum eni məhdudlaşdırır
          margin: "0 auto",
          overflow: "hidden",
         background: "white",
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
              width: { xs: "82vw", sm: "88vw", md: "85vw", lg: "1280px",xl:"1280px" }, 
              height: "50px",
              background: "#f9f9f9",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              position: "fixed",
              zIndex: 1000,
              margin: { xs: "0px 35px",sm:"0px 40px", md: "0 130px", lg: "0 10px",xl:"0 20px" },
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
              <MySkillsAccordion
                key={index}
                cardData={item.Challenges}
                title={item.SkillName}
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
