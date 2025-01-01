import { useState, useEffect } from "react";
import { Progress, Switch, Typography } from "antd";
import { Box } from "@mui/material";
import MyNeedsPopOver from "./MyNeedsPopOver";
import MyOwnNeedsModalPopOver from "./MyOwnNeedsPopOver";

const { Title, Paragraph } = Typography;

interface Challenge {
  Id: string;
  ChallengeName: string;
  Challenges: string;
  LongDesc: string;
  ShortDesc: string;
}

interface MyNeedProps {
  data?: any;
}

const MyNeeds = ({
  data = { GroupName: "", ShortDesc: "", Id: "", ImgUrl: "", Challenges: [] },
}: MyNeedProps) => {
  
  const challenges = data.Challenges || [];
  const [isExpanded, setIsExpanded] = useState(false);
  const [takeId, setTakeId] = useState([]);
  const [allTakeId, setAllTakeId] = useState<string[]>([]);
  const [percent, setPercent] = useState(100);

  const getIdsFromChallenges = (challenges: Challenge[]): string[] => {
    return challenges.map((challenge) => challenge.Id);
  };

  // Set `takeId` with all challenge IDs when the component mounts
  useEffect(() => {
    const allIds = getIdsFromChallenges(data.Challenges || []);
    setAllTakeId(allIds);
  }, [data]);
  // Assign a percentage to each challenge
  const challengesWithPercentages: (Challenge & { percentage: number })[] =
    challenges.length > 0
      ? challenges.map((challenge: Challenge) => ({
          ...challenge,
          percentage: Math.floor(100 / challenges.length), 
        }))
      : [];

  // Switch state for each challenge
  const [completedChallenges, setCompletedChallenges] = useState<
    Record<string, boolean>
  >(
    challenges.reduce((acc: Record<string, boolean>, challenge: Challenge) => {
      acc[challenge.Id] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  // Calculate total progress using useEffect
  useEffect(() => {
    if (challengesWithPercentages.length === 0) {
      setPercent(100); // If no challenges, set progress to 100%
      return;
    }

    const completedCount = challengesWithPercentages.reduce(
      (acc, challenge) => (completedChallenges[challenge.Id] ? acc + 1 : acc),
      0
    );
    const total =
      100 - (completedCount * 100) / challengesWithPercentages.length;

    setPercent(total);
  }, [completedChallenges, challengesWithPercentages]);

  // Toggle challenge completion state
  const toggleChallenge = (id: string) => {
    setCompletedChallenges((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    setTakeId((prev: any) => {
      if (prev.includes(id)) {
        return prev.filter((existingId: any) => existingId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <Box
      sx={{
        display: { xs: "block", md: "flex" },
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
        <Title level={3} style={{ fontSize: "28px" }}>
          {data.GroupName}{" "}{challengesWithPercentages?.length > 0 && "("}{`${challengesWithPercentages?.length==0?"":challengesWithPercentages?.length})`}
        </Title>
        <Paragraph
          style={{
            background: "white",
            margin: "0",
            padding: "10px 10px",
            textAlign: "left",
            fontSize:'18px',
            color:"#FB6B23"
          }}
        >
          {data.ShortDesc}
        </Paragraph>
        {/* Dynamic Challenge Switches */}
        <Box
          sx={{
            background: "white",
            padding: "20px 10px",
            position: "relative",
            overflow: isExpanded ? "visible" : "hidden", // Overflow ilə nəzarət
            height: isExpanded
              ? "auto"
              : data.Challenges.length > 0
              ? "360px"
              : "auto", // Hündürlüyü dəyiş
            cursor: "pointer",
            "&::after": {
              content: isExpanded ? '""' : '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              height: isExpanded ? "0" : "40px", // Şəffaflığın görünüşü
              background: isExpanded
                ? ""
                : "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.9) 100%)",
              zIndex: 1,
              pointerEvents: "none",
            },
          }}
        >
          {!isExpanded && (
            <Typography
              style={{
                color: "blue",
                cursor: "pointer",
                textAlign: "center",
                position: "absolute",
                bottom: 0,
                display: data.Challenges.length > 0 ? "block" : "none",
                left: "40%",
              }}
              onClick={() => setIsExpanded(true)}
            >
              Show More...
            </Typography>
          )}
          {challengesWithPercentages.map((challenge) => (
            <div
              key={challenge.Id}
              style={{
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Switch
                checked={completedChallenges[challenge.Id]}
                onChange={() => toggleChallenge(challenge.Id)}
                style={{ marginRight: "10px" }}
              />
              <span
                style={{ fontSize: "16px", color: "#333", textAlign: "start" }}
                // onClick={() => {
                //   setIsExpanded(!isExpanded);
                // }}
              >
                {challenge.ChallengeName}
              </span>
            </div>
          ))}

          {isExpanded && (
            <Typography
              style={{ color: "blue", cursor: "pointer", textAlign: "center" }}
              onClick={() => setIsExpanded(false)}
            >
              Show Less...
            </Typography>
          )}
        </Box>
      </div>

      {/* Right Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ height: "60px" }}></Box>
        <Title level={4} style={{ width: "90%", textAlign: "center" }}>
          My Skills to Overcome the Challenges
        </Title>
        {/* Dynamic Progress */}
        <Progress
          type="circle"
          percent={percent}
          size={220}
          strokeWidth={12}
          strokeColor="#FCBD06"
          style={{ color: "white" }}
          format={(percent) => (
            <p
              style={{
                color: "black",
                textAlign: "center",
                verticalAlign: "center",
                paddingTop: "20px",
              }}
            >
              {percent?.toFixed(0)}%
            </p>
          )}
        />

        {percent == 100 ? (
          <Box sx={{ color: "#2A73B1", paddingTop: "20px" }}>
            {" "}
            You own all skills 😃
          </Box>
        ) : (
          <MyNeedsPopOver
            requestData={takeId}
            title={"hjdasj"}
            Challenges={data.Challenges}
          />
        )}
        <MyOwnNeedsModalPopOver
          requestData={allTakeId}
          Challenges={data.Challenges}
          title={""}
        />
      </div>
    </Box>
  );
};

export default MyNeeds;
