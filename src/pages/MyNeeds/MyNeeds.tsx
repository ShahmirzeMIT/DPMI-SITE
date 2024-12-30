import { useState } from "react";
import { Progress, Switch, Button, Typography } from "antd";
import { Box } from "@mui/material";
import MyNeedsPopOver from "./MyNeedsPopOver";

const { Title, Paragraph } = Typography;

const MyNeeds = () => {
  // Array of languages
  const languages = [
    { key: "form", name: "The Language of Form", percentage: 30 },
    { key: "userStory", name: "The Language of User Story", percentage: 30 },
    { key: "data", name: "The Language of Data", percentage: 20 },
    { key: "dataOrientedProgramming", name: "The Language of Data Oriented Programming", percentage: 20 },
  ];

  // Switch state for each language
  const [levels, setLevels] = useState({
    form: false,
    userStory: false,
    data: false,
    dataOrientedProgramming: false,
  });

  // Calculate the total progress
  const calculateTotal = () => {
    let total = 100; // Start with 100%.
    languages.forEach((lang) => {
      if (levels[lang.key as keyof typeof levels]) { // Check the value of the corresponding key
        total -= lang.percentage; // Add percentage if checked
      }
    });
    return total;
  };

  // Toggle the switch state
  const toggleLevel = (key: string) => {
    setLevels((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev], // Toggle the state
    }));
  };

  return (
    <Box
      sx={{
        display:{sx:'block',md:'flex'},
        justifyContent: "space-between",
        alignItems: "flex-start",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Left Section */}
      <div style={{ flex: 1, marginRight: "20px" }}>
        <Title level={3} style={{fontSize:'28px'}}>Business Requirements Analysis</Title>
        <Paragraph  style={{background:'white',margin:'0',padding:'20px 10px',textAlign:'left'}}>
          <strong>Anyone</strong> who wants to communicate with the{" "}
          <strong>Development Team</strong> during the Digital Product
          Development Process, the following languages are required.
        </Paragraph>
        {/* Dynamic Switches */}
        <Box sx={{background:'white',padding:'20px 10px'}}>
        {languages.map((lang) => (
          <div
            key={lang.key}
            style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}
          >
            <Switch
              checked={levels[lang.key as keyof typeof levels]}
              onChange={() => toggleLevel(lang.key)}
              style={{ marginRight: "10px" }}
            />
            <span style={{ fontSize: "16px", color: "#333" }}>{lang.name}</span>
          </div>
        ))}
        </Box>
       
      </div>

      {/* Right Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          // marginTop:'6'
        }}
      >
        <Box sx={{height:'60px'}}></Box>
        <Title level={4} style={{width:'90%',textAlign:'center'}}>Required Skills to overcome with the challanges</Title>
        {/* Dynamic Progress */}
        <Progress
          type="circle"
          percent={calculateTotal()}
        //   width={200}
          size={220}
          strokeWidth={12}
          strokeColor="#FCBD06"
          style={{color:'white'}}
          format={(percent) => <p style={{color:'black',textAlign:'center',verticalAlign:'center',paddingTop:'20px'}}>{percent}%</p>}
        />
        <Button
          style={{ marginTop: "20px", borderColor: "#2C73B4" ,padding:'10px 40px',color:'#2C73B4'}}
        >
          View All Skills
        </Button>
        {/* <Button
          type="primary"
          style={{ marginTop: "20px", backgroundColor: "#F96C23", borderColor: "#F96C23", }}
        >
          Check Required Skills
        </Button> */}
       <MyNeedsPopOver/>
      </div>
    </Box>
  );
};

export default MyNeeds;
