import { Box } from "@mui/material";
import { Avatar, Typography } from "antd";
import Logo from "../../assets/images/skill-development.png";
import PointText from "../../componets/PointText";
interface WhatLearnSpfProps {
  data: { Id: string; SkillName: string }[];
}

export default function ByCoursesDetail({ data }: WhatLearnSpfProps) {
  if (data.length == 0) {
    return (
      <Box sx={{ width: "100%", margin: "90px auto" }}>
        <Typography
          style={{
            color: "red",
            fontSize: "36px",
            fontWeight: "400",
            marginLeft: "10px",
            textTransform: "uppercase",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          {"Records Not Founded"}
        </Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ width: "100%", margin: "90px auto" }}>
      <Typography
        style={{
          color: "black",
          fontSize: "36px",
          fontWeight: "400",
          textAlign: "start",
          marginLeft: "10px",
          textTransform: "uppercase",
          marginBottom: "50px",
        }}
      >
        <Avatar
          src={Logo}
          style={{ width: "70px", height: "70px", marginRight: "20px" }}
          shape="square"
        />
        SKILLS YOU WILL GET
      </Typography>
      <ul style={{ width: "100%", marginTop: "20px" }}>
        {data.length > 0 ? (
          data.map((item, _index) => (
            <li
              style={{
                color: "black",
                fontSize: "18px",
                fontWeight: "200",
                textAlign: "start",
                marginLeft: "40px",
                lineHeight: "30px",
                marginTop: "20px",
                listStyle: "none",
                // ,display:'flex',alignItems:'center'
              }}
            >
              <PointText />
              <span style={{ fontSize: "24px" }}>{item.SkillName}</span>
            </li>
          ))
        ) : (
          <Typography style={{ textAlign: "center", color: "red" }}>
            {"Records Not Founded"}
          </Typography>
        )}
      </ul>
    </Box>
  );
}
