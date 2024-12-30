import { Box } from "@mui/material";
import { Button, Popover } from "antd";
// import HeaderWithAccordion from "./MyNeedsAccordion";

const content = (
  <Box
    sx={{
      width: "100vw", // Full viewport width
      height: "300px", // Maximum height for the content
      background: "#f9f9f9", // Light background
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start", // Align items at the top
      margin: 0, // Remove any extra margin
      padding: 0, // Remove any extra padding
      overflowY: "scroll", // Enable vertical scrolling
      "@media (min-width: 768px)": {
        height: "450px", // Adjust for larger screens
      },
      "@media (min-width: 1200px)": {
        height: "550px", // Adjust for even larger screens
      },
    }}
  >
    <Box sx={{ width: "100%", padding: "120px" }}>
      Render multiple accordions
    
    </Box>
  </Box>
);

// interface MyNeedsPopOverProps{
//     data:{
//         title:string;
        
//     }
// }
export default function MyOwnNeedsPopOver() {
  return (
    <Popover
      content={content}
      overlayInnerStyle={{
        padding: 0, // Remove padding inside the popover
        borderRadius: 0, // Optional: Remove border radius
        backgroundColor: "transparent", // Ensure the popover background matches the content
      }}
      overlayStyle={{
        width: "100vw", // Ensure the popover takes the full screen width
        maxWidth: "none", // Disable max-width limitation
        left: 0, // Ensure it aligns with the left edge of the screen
        right: 0, // Ensure it aligns with the right edge of the screen
      }}
      trigger="click" // Optional: Trigger the popover on click
    >
      <Button
        type="primary"
        style={{
            marginTop: "20px",
          backgroundColor: "white",
          borderColor: "#2A73B1",
          padding: "15px 25px",
          color:'#2A73B1'
          }}
      >
       Show all skills 
      </Button>
    </Popover>
  );
}
