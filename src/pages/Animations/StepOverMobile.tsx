import { motion } from "framer-motion";
import "./StepOverMobile.css";
interface Step {
  data: {
    title: string;
    shortDesc: string;
  }[];
}


const StepOverMobile = ({ data }: Step) => {
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
    <div className="step-over-mobile-container">
      {filteredData.map((step, index) => (
        <motion.div
          key={index}
          className={`step-mobile ${index % 2 === 0 ? "left" : "right"}`}
          style={{
            backgroundColor:
            step.title === "Achieve Success" ? "#1876D1" : colors[index % colors.length], 
            alignSelf: index % 2 === 0 ? "flex-start " : "flex-end",
            marginTop: "50px",
            maxWidth: "700px",
            width:'400px',
            minHeight:'300px'
          }}
          initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
        >
          {/* <div className="icon-mobile">{step.icon}</div> */}
          <div className="title-mobile">{step.title}</div>
          <div className="description-mobile">{step.shortDesc}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default StepOverMobile;
