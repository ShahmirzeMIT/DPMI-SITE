import { Modal, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { callApi } from "../../utils/callApi";
import { Button } from "antd";

interface CardDataProps {
  requestData: string[];
  title: string;
  Challenges: [];
}

export default function PaymentModal({ requestData }: CardDataProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  // const [changTitle, setChangTitle] = useState("");
  const handleClose = () => setOpen(false);
  const [_data, setData] = useState([]);

  const getData = async () => {
    if (requestData.length == 0) return;
    const responseSkills = await callApi("/lms/main/myneeds/skills/list");
    const responseChallenges = await callApi(
      "/lms/main/myneeds/challenges/by/skills",
      { FkSkillsId: requestData }
    );
    const filterResponseSkills = responseSkills.filter((item: any) =>
      requestData.includes(item.Id)
    );

    console.log(filterResponseSkills, "filterResponseSkills");

    // Combine skills with their respective challenges
    const combinedData = filterResponseSkills.map((skill: any) => ({
      ...skill,
      Challenges: responseChallenges.filter(
        (challenge: any) => challenge.FkSkillsId == skill.Id
      ),
    }));

    console.log(combinedData, "combinedData");

    setData(combinedData);
  };

  // Fetch data when `requestData` changes
  useEffect(() => {
    if (requestData?.length) {
      getData();
    }
  }, [requestData]);

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
        Challenges to be Solved
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
           
          </Box>

          {/* <HeaderWithAccordio cardData={data.} title={"My Needs"} handleClose={handleClose}  /> */}
        </>
      </Modal>
    </>
  );
}
