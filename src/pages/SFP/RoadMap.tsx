import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
};
const Roadmap = () => {
  const screenWidth = useScreenWidth();
  console.log(screenWidth,'screenWidth');
  

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
        minHeight:'800px'
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 400"
        style={{ width: "90%", height: "350px" }}
      >
        {/* Road Path */}
        <motion.path
          d="M50 350 Q200 100 400 150 Q600 200 750 50"
          fill="none"
          stroke="#888"
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray="0 100"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Dashed Divider */}
        <motion.path
          d="M50 350 Q200 100 400 150 Q600 200 750 50"
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
          cy="350"
          r="25"
          fill="#007bff"
          stroke="#fff"
          strokeWidth="3"
          variants={markerVariants(0.5)}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="220"
          cy="160"
          r="25"
          fill="#007bff"
          stroke="#fff"
          strokeWidth="3"
          variants={markerVariants(1)}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="500"
          cy="150"
          r="25"
          fill="#007bff"
          stroke="#fff"
          strokeWidth="3"
          variants={markerVariants(1.5)}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="750"
          cy="50"
          r="25"
          fill="#007bff"
          stroke="#fff"
          strokeWidth="3"
          variants={markerVariants(2)}
          initial="hidden"
          animate="visible"
        />

        {/* Labels using foreignObject */}
        <foreignObject x={screenWidth<1032?"100":"-175"} y={screenWidth<1032?"280":"220"} width="200" height="240">
          <motion.div
            style={{
              color: "black",
              fontSize: "14px",
              textAlign: "center",
              background: "white",
              padding: "5px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              border:'1px solid black'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>Digital Product Foundation</h1>
            <p style={{fontSize:'12px'}}>Page FounDation, Master Data Analysis, Product Requirment Analysis</p>
          </motion.div>
        </foreignObject>

        <foreignObject x={screenWidth<1032?"0":"230"} y={screenWidth<1032?"50":"190" }width="200" height="200">
          <motion.div
            style={{
              color: "black",
              fontSize: "14px",
              textAlign: "center",
              background: "white",
              padding: "5px",
              borderRadius: "8px",
               boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              border:'1px solid black'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
             <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>Digital Product Research</h1>
             <p style={{fontSize:'12px'}}>Fundamental Sql, Fundamental Api, Digital Product Design</p>
          </motion.div>
        </foreignObject>

        <foreignObject x={screenWidth<1032?"500":"290"} y={screenWidth<1032?"180":"10"} width="220" height="200">
          <motion.div
            style={{
              color: "black",
              fontSize: "14px",
              textAlign: "center",
              background: "white",
              padding: "5px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              border:'1px solid black'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
             <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>Bussiness Requirment Analysis</h1>
             <p style={{fontSize:'12px'}}>Bussiness Requirment Analysis, Financial Hypothesis Analysis</p>
          </motion.div>
        </foreignObject>

        <foreignObject x={screenWidth<1032?"500":"740"} y={screenWidth<1032?"00":"80"} width="220" height="120">
          <motion.div
            style={{
              color: "black",
              fontSize: "14px",
              textAlign: "center",
              background: "white",
              padding: "5px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              border:'1px solid black'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <h1 style={{ fontSize: "14px", fontWeight: "bold" }}>Specialaized Modules</h1>
            <p style={{fontSize:'12px'}}>The Art and Skill of Sensing Respondin to Market Need</p>
          </motion.div>
          
          
        </foreignObject>
      </svg>
    </div>
  );
};

export default Roadmap;
