import { Box } from "@mui/material";
import logo1 from '../../assets/images/partner1.png'
import logo2 from '../../assets/images/partner2.png'
import logo3 from '../../assets/images/partner3.png'
import logo4 from '../../assets/images/partner4.png'
import logo5 from '../../assets/images/partner5.png'

const data = [
  {
    links: logo1,
    text: 'TextMagic',
  },
  {
    links: logo2,
    text: 'Microsoft',
  },
  {
    links: logo3,
    text: 'Skype',
  },
  {
    links: logo4,
    text: 'Facebook',
  },
  {
    links: logo5,
    text: 'Material UI',
  },

];

export default function PartnersGrid() {
  return (
    <Box sx={{ padding: "60px 10px", textAlign: "center" }}>
      <h1
        style={{
          color: "black",
          fontSize: "36px",
          width: "60%",
          margin: "0 auto",
          textAlign: "center",
          textTransform: 'uppercase',
          marginBottom: '60px',
        
        }}
      >
        Our Partners
      </h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "40px",
          // padding:'30px 0',
          background:"#F4F4F4",
          padding:"50px 0"
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",

            }}
          >
            <img
              style={{width:"180px",height:"60px"}} 
              src={item.links}
              alt={`Logo of ${item.text}`}
              // shape="square"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
