import { motion } from "framer-motion";


const RoadmapAIPP = () => {
 

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
  };

  const markerVariants = (delay: number) => ({
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay, duration: 0.5 },
    },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        position: "relative",
        minHeight: "800px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 800" // Adjust the viewBox to match the vertical line
        style={{ width: "90%", height: "700px" }}
      >
        {/* Road Path (Vertical Line) */}
        <motion.path
          d="M50 50 V750" // Vertical line from top to bottom
          fill="none"
          stroke="#888"
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray="0 100"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Dashed Divider (Vertical Line) */}
        <motion.path
          d="M50 50 V750" // Vertical dashed line from top to bottom
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="10 10"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Markers on the path */}
        <motion.circle
          cx="50"
          cy="50"
          r="25"
          fill="#007bff"
          stroke="#fff"
          strokeWidth="3"
          variants={markerVariants(0.5)}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="50"
          cy="250" // Markers at different Y positions for vertical line
          r="25"
          fill="#007bff"
          stroke="#fff"
          strokeWidth="3"
          variants={markerVariants(1)}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="50"
          cy="500" // Markers at different Y positions for vertical line
          r="25"
          fill="#007bff"
          stroke="#fff"
          strokeWidth="3"
          variants={markerVariants(1.5)}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="50"
          cy="750" // Markers at the bottom of the path
          r="25"
          fill="#007bff"
          stroke="#fff"
          strokeWidth="3"
          variants={markerVariants(2)}
          initial="hidden"
          animate="visible"
        />

        {/* Labels using foreignObject */}
        <foreignObject
           x={"80"}
           y={"20"}
          width="220"
          height="240"
        >
          <motion.div
            style={{
              
              color: "black",
              fontSize: "18px",
              textAlign: "center",
              background: "white",
              padding: "5px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              border: "1px solid black",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>
              Digital Product Foundation
            </h1>
            <div style={{width:'100%',borderBottom:'1px solid black',marginBottom:'5px'}}></div>
            <p style={{ fontSize: "16px" }}>
              Page Foundation, Master Data Analysis, Product Requirement
              Analysis
            </p>
          </motion.div>
        </foreignObject>

        <foreignObject
         x={"80"}
         y={"220"}
          width="220"
          height="200"
        >
          <motion.div
            style={{
              color: "black",
              fontSize: "18px",
              textAlign: "center",
              background: "white",
              padding: "5px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              border: "1px solid black",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>
              Digital Product Research
            </h1>
            <div style={{width:'100%',borderBottom:'1px solid black',marginBottom:'5px'}}></div>
            <p style={{ fontSize: "16px" }}>
              Fundamental SQL, Fundamental API, Digital Product Design
            </p>
          </motion.div>
        </foreignObject>

        <foreignObject
           x={"80"}
           y={"400"}
          width="220"
          height="200"
        >
          <motion.div
            style={{
              color: "black",
              fontSize: "18px",
              textAlign: "center",
              background: "white",
              padding: "5px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              border: "1px solid black",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>
              Digital Product Development
            </h1>
            <div style={{width:'100%',borderBottom:'1px solid black',marginBottom:'5px'}}></div>
            <p style={{ fontSize: "16px" }}>
              Fundamental SQL, Fundamental API, Digital Product Design
            </p>
          </motion.div>
        </foreignObject>

        <foreignObject
          x={"80"}
          y={"620"}
          width="220"
          height="190"
        >
          <motion.div
            style={{
              color: "black",
              fontSize: "18px",
              textAlign: "center",
              background: "white",
              padding: "5px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              border: "1px solid black",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>
              Business Requirement Analysis
            </h1>
            <div style={{width:'100%',borderBottom:'1px solid black',marginBottom:'5px'}}></div>
            <p style={{ fontSize: "16px" }}>
              Business Requirement Analysis, Financial Hypothesis Analysis
            </p>
          </motion.div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default RoadmapAIPP;
