import "./StepOver.css";
import { motion } from "framer-motion";

interface Step {
  data: {
    title: string;
    shortDesc: string;
  }[];
}

const StepOver = ({ data }: Step) => {
  const colors = ["#2a74b1", "#D8531D", "#333333", "#4DB6AC", "#66BB6A"]; // Digər addımlar üçün rənglər.

  const filteredData = [
    ...data,
    {
      title: "Achieve Success",
      shortDesc: "Celebrate milestones and achievements.",
      icon: "🏆",
    },
  ];

  return (
    <div className="step-over-container">
      <div className="steps">
        {filteredData.map((step, index) => (
          <motion.div
            key={index}
            className="step"
            style={{
              backgroundColor:
                step.title === "Achieve Success" ? "#1876D1" : colors[index % colors.length], // "Achieve Success" üçün xüsusi rəng.
            }}
            initial={{
              opacity: 0,
              y: 50,
              transform: `translate(${index * 5}px, ${-index * 100}px)`,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transform: `translate(${index * 5}px, ${-index * 100}px)`,
            }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            transition={{
              duration: 1,
              delay: index * 0.5,
            }}
          >
            {/* <div className="icon">{step.icon}</div> */}
            <div className="title">{step.title}</div>
            <div className="description">{step.shortDesc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StepOver;
