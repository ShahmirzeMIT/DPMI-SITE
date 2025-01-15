import { Box} from "@mui/material";
import { useEffect, useState } from "react";
import { callApi } from "../../utils/callApi";
import PaymentCard from "./PaymentCard";
export default function Payment() {
  const [cardValues, setCardValues] = useState([]);
  const fetchCardData = async () => {
    const res = await callApi("/lms/main/class/list");
    const updatedData = res.map((item: any, index: number) => ({
      ...item,
      id: index + 1,
    }));
    setCardValues(updatedData);
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <Box sx={{ marginTop: "100px", padding: "20px" }}>
      <Box sx={{
         flexDirection: { xs: "column", sm: "row" },
         padding:'20px',
        
        //  border: "1px solid #E0E0E0",
         borderRadius: "8px",
         marginBottom: "20px",
         overflow: "hidden",
         boxShadow: "none",
         background: "#FA6B23",
         maxWidth: "1340px",
         margin: "40px auto",
         color:'white',
         fontSize:'18px'
       }}
      >
        Use promocode <span style={{fontSize:'20px',fontWeight:'bold'}}>FREE2025</span>  to enroll in demo classes and explore the
        AI-Simulation Learning Platform with real project simulations,
        comprehensive guidelines, video tutorials, gamified learning, an AI
        Mentor, and expert Coaches—everything you need to enhance your practical
        skills in AI Transformation!
      </Box>
      {cardValues.map((item: any) => (
        <PaymentCard key={item.id} item={item} />
      ))}
    </Box>
  );
}
