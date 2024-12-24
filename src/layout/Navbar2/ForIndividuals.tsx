import { Box, Link, Typography } from "@mui/material";
import { Avatar } from "antd";
import { allForIndividuals } from "../../defaultDatas/forindividualsData";
import Logo from '../../assets/images/individuals.png';
export default function ForIndividuals() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "space-between",
        marginLeft: "20px",
        alignItems: "center",
      }}
    >
      {/* Sol tərəfdəki mətnlər */}
      <Box
        sx={{
          marginTop: "25px",
          textAlign: "start",
          marginRight: "40px",
          width: "450px",
        }}
      >
        {allForIndividuals.map((item: { title: string; id: string; text: string }) => {
          return (
            <Box key={item.id} sx={{ marginBottom: "1.5rem" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "20px",
                  paddingBottom: "0.5rem",
                  maxWidth: "400px", // Maksimum genişlik
                  wordWrap: "break-word", // Uzun mətnləri qırmaq
                  overflowWrap: "break-word",
                }}
              >
                <Link
                  href={item.id}
                  style={{
                    fontSize: "22px",
                    lineHeight: "20px",
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "bold",
                    cursor: "pointer",
                    marginBottom:'0',
                    paddingBottom:'0',
                    whiteSpace: "wrap",
                  }}
                >
                  {item.title}
                </Link>
              </Typography>
              <Typography
                style={{
                  fontSize: "0.85rem",
                  lineHeight: "1.25rem",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  // width:'100px',
                  whiteSpace: "wrap",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* Sağ tərəfdəki şəkillər */}
      <Box
        sx={{
          marginBottom: "45px",
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
              <Avatar
                src={Logo}
                style={{
                  width: "100%",
                  height: "290px",
                }}
                shape="square"
              />
      </Box>
    </Box>
  );
}
