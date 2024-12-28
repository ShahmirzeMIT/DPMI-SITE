import React from "react";
import "./StepOver.css";

const StepOver = () => {
  const steps = [
    { title: "Business", description: "This slide is an editable slide with all your needs.", icon: "💼" },
    { title: "Target", description: "This slide is an editable slide with all your needs.", icon: "🎯" },
    { title: "Growth", description: "This slide is an editable slide with all your needs.", icon: "📈" },
    { title: "Profit", description: "This slide is an editable slide with all your needs.", icon: "💰" },
    { title: "Success", description: "This slide is an editable slide with all your needs.", icon: "🏆" },
  ];

  return (
    <div className="step-over-container">
      <div className="steps">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className="step"
              style={{
                transform: `translate(${index * 1
                }%, ${-index * 100}px)`,
              }}
            >
              <div className="icon">{step.icon}</div>
              <div className="title">{step.title}</div>
              <div className="description">{step.description}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepOver;
