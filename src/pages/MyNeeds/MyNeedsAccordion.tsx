import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function HeaderWithAccordion() {
  const [expanded, setExpanded] = useState<string | false>(false);

  // Example accordion data
  const accordionData = [
    { id: "1", title: "Tələbin 1", content: "Bu, 1-ci tələbin geniş məzmunudur." },
    { id: "2", title: "Tələbin 2", content: "Bu, 2-ci tələbin geniş məzmunudur." },
    { id: "3", title: "Tələbin 3", content: "Bu, 3-cü tələbin geniş məzmunudur." },
  ];

  // Handle accordion changes
  const handleAccordionChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        width: "100vw", // Full viewport width
        minHeight: "10vh", // Full viewport height
        backgroundColor: "#f9f9f9", // Light background
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 0",
      }}
    >
      {/* Header */}
      <Typography
        sx={{
          color: "#F96C23", // Orange text color for the header
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Proqramlaşdırma Komandası ilə Ünsiyyət
      </Typography>

      {/* Accordion Section */}
      <Box
        sx={{
          width: "90%",
          maxWidth: "600px",
          borderRadius: "8px",
        //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        {accordionData.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleAccordionChange(item.id)}
            sx={{
              marginTop: "20px", // Space between accordion items
              borderRadius: "8px", // Optional rounded corners
              border: "1px solid #f0f0f0", // Border around accordion
            //   boxShadow: "none", // No box shadow
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              "&:before": {
                display: "none", // Remove default divider
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "white", // Light background for summary
                "&:hover": {
                  transform: "scale(1.002)", // Hover effect
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#333", // Dark text color
                }}
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.content}</Typography>
              {/* More button */}
              <Button
                onClick={() => alert("Daha ətraflı məlumat...")}
                sx={{
                  marginTop: "10px",
                  padding: 0,
                  color: "#F96C23",
                  fontWeight: "bold",
                  textTransform: "none", // Remove uppercase text
                }}
              >
                Daha çox...
              </Button>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
