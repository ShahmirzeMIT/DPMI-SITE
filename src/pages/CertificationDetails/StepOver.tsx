import "./StepOver.css";
import { motion } from "framer-motion";

const StepOver = () => {
  const steps = [
    { title: "Business Analysis", description: "Identify business needs and opportunities.", icon: "💼", color: "#4CAF50" },
    { title: "Set Targets", description: "Define clear and achievable goals.", icon: "🎯", color: "#FF9800" },
    { title: "Growth Strategy", description: "Plan and execute growth initiatives.", icon: "📈", color: "#2196F3" },
    { title: "Profit Maximization", description: "Optimize resources for maximum profit.", icon: "💰", color: "#9C27B0" },
    { title: "Achieve Success", description: "Celebrate milestones and achievements.", icon: "🏆", color: "#F44336" },
    { title: "Achieve Success", description: "Celebrate milestones and achievements.", icon: "🏆", color: "#F44336" },
  ];

  return (
    <div className="step-over-container">
      <div className="steps">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="step"
            style={{
              backgroundColor: step.color,
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
              scale: 2.5, 
              transition: { duration: 0.3 },
            }}
            transition={{
              duration: 1,
              delay: index * 0.5,
            }}
          >
            <div className="icon">{step.icon}</div>
            <div className="title">{step.title}</div>
            <div className="description">{step.description}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StepOver;
