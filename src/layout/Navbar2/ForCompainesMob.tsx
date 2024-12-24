import { Box, Link, Typography } from "@mui/material";
import { Avatar } from "antd";
import Logo from '../../assets/images/showAll.jpg';
import { allForCOmpaines } from "../../defaultDatas/forCompanies";
export default function ForCompaniesMob() {
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
        {allForCOmpaines.map((item: { title: string; id: string; text: string }) => {
          return (
            <Box key={item.id} sx={{ marginBottom: "1.5rem" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "20px",
                  paddingBottom: "0.5rem",
                  maxWidth: "200px", // Maksimum genişlik
                  wordWrap: "break-word", // Uzun mətnləri qırmaq
                  overflowWrap: "break-word",
                  marginLeft:'50px',
                  padding:'10px 40px'
                }}
              >
                <Link
                  href={item.id}
                  style={{
                    fontSize: "20px",
                    lineHeight: "20px",
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "400",
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
                   marginLeft:'50px',
                    padding:'10px 40px'
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
          
          alignItems: "center",
          // borderRadius: "10px",
          // background: "#f4f4f4",
        }}
      >
              <Avatar
                src={Logo}
                style={{
                  width: "95%",
                  height: "270px",
                //   boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                shape="square"
              />
      </Box>
    </Box>
  );
}
