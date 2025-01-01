import { Modal, Box } from "@mui/material";
import { useEffect, useState } from "react";
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
  const handleOpen = () => setOpen(true);
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

  useEffect(() => {
    getData();
  }, [requestData]);

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
        Show all skills
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ maxWidth: "1400px", margin: "0 auto" }}
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
            {/* <Box
        sx={{
          textAlign: "end",
          width: "100%",
          position: "sticky",
          top: "0%",
          right:'10%',
          background: "transparent",
          zIndex: "1000",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "0 10px",
        }}
      > */}
            <Box
              sx={{
                width: { xs: "100%", md: "93%" },
                height: "50px",
                background: "#f9f9f9",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                position: "fixed",
                zIndex: 1000,
                margin: { xs: "0", md: "0 20px" },
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
