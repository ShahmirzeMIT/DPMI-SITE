import { Box, Typography } from "@mui/material";
import { Avatar } from "antd";
import { ProductManagerCardDataNavbar } from "../../defaultDatas/ProductManagerNavbar";
import { useNavigate } from "react-router-dom";
export default function CertificationMenu() {
  const navigate = useNavigate();
  // State for tracking hover on individual cards

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "space-around",
        marginLeft: "20px",
        alignItems: "center",
        //  "@media (max-width: 115px)": {
        //   alignItems:'center',
        //   flexDirection: 'column',
        //   justifyContent:'center'
        //  }
      }}
    >
      <Box sx={{ marginTop: "25px", textAlign: "start", marginRight: "40px" }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "21px",
            fontStyle: "normal",
            fontWeight: " 400",
            lineHeight: "25px",
            letterSpacing: "0em",
            paddingBottom: "2rem",
            color: "rgb(105 105 105)",
          }}
          onClick={() => navigate("/certificates")}
        >
          {" "}
          Explore All Certifications
        </Typography>
        {ProductManagerCardDataNavbar.map(
          (item: { title: string; link: string }) => {
            return (
              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  paddingBottom: "1rem",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {" "}
                <Box
                  // href={item.link}
                  onClick={() => navigate(item.link)}
                  sx={{
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    paddingBottom: "1rem",
                    color: "black",
                    textDecoration: "none",
                    padding:'0',
                    margin:"0",
                    cursor: "pointer",
                  }}
                >
                  {item.title}{" "}
                </Box>
              </Typography>
            );
          }
        )}
      </Box>
      <Box
        sx={{
          marginTop: "5px",
          width: "480px",
          height: "250px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          alignItems: "center",
          borderRadius: "10px",
          background: "#f4f4f4",
        }}
      >
        {ProductManagerCardDataNavbar.map((item: { image: string }) => {
          return (
            <Box>
              <Avatar
                src={item.image}
                style={{
                  width: "10rem",
                  height: "auto",
                  // boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:'50%'
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
