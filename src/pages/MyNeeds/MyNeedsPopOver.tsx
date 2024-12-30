import { Box } from "@mui/material";
import { Button, Popover } from "antd";
import HeaderWithAccordion from "./MyNeedsAccordion";

const content = (
  <Box
    sx={{
      width: "100vw", // Full viewport width
      height: "500px", // Maximum height for the content
      background: "#f9f9f9", // Light background
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start", // Align items at the top
      margin: 0, // Remove any extra margin
      padding: 0, // Remove any extra padding
      overflowY: "scroll", // Enable vertical scrolling
      "@media (min-width: 768px)": {
        height: "600px", // Adjust for larger screens
      },
      "@media (min-width: 1200px)": {
        height: "700px", // Adjust for even larger screens
      },
    }}
  >
    <Box sx={{ width: "100%", padding: "120px" }}>
      {/* Render multiple accordions */}
      <HeaderWithAccordion />
      <HeaderWithAccordion />
      <HeaderWithAccordion />
      <HeaderWithAccordion />
      <HeaderWithAccordion />
      <HeaderWithAccordion />
      <HeaderWithAccordion />
      <HeaderWithAccordion />
      <HeaderWithAccordion />
      <HeaderWithAccordion />
    </Box>
  </Box>
);

export default function MyNeedsPopOver() {
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
          backgroundColor: "#F96C23",
          borderColor: "#F96C23",
          padding: "10px 20px",
        }}
      >
        Check Required Skills
      </Button>
    </Popover>
  );
}
