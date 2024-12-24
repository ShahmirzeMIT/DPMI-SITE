export interface SkillData {
    id: string;
    quote: string;
    title: string;
    text: { title: string }[];
  }
  
  export const aiSimulationData: SkillData[] = [
    {
      id: "1",
      quote: '"Exposure to diverse case studies and complex dilemmas through years of experience."',
      title: "The Challenges of Becoming a Skilled Professional",
      text: [
        { title: "Exposure to diverse case studies and complex dilemmas through years of experience." },
        { title: "Familiarity with various criteria and alternatives for solving problems effectively." },
        { title: "Proactive decision-making skills to anticipate and resolve upcoming challenges." },
        { title: "Strong theoretical background with practical solutions tailored to specific problems." }
      ]
    },
    {
      id: "2",
      quote: "AI-Simulation Platform accelerates your growth, simulating years of experience in months",
      title: "The Challenges of Becoming a Skilled Professional",
      text: [
        { title: "Lack of a working environment that simulates real-world projects with diverse challenges" },
        { title: "The need for case studies, dilemmas, criteria, and alternatives to build problem-solving capabilities." },
        { title: "Gaining experience takes time and exposure to real projects" },
        { title: "Overcoming complex challenges requires years of hands-on application" }
      ]
    },
    {
      id: "3",
      title: "Your Path to Mastery",
      quote: "AI-Simulation Platform enables you to practice and apply skills in projects like Booking.com, Mobile Banking, and WhatsApp",
      text: [
        { title: 'Work on real-world projects across different industries' },
        { title: 'Manage projects with complex case studies' },
        { title: 'Face challenging dilemmas during product development and management.' },
        { title: 'Extract learned lessons from each case study for continuous improvement.' },
        { title: 'Gain insights into dilemmas, decision-making criteria, alternatives, and strategic approaches' }
      ]
    }
  ];
  
  export const whyChoose = [
    {
      title: 'Why AI-Simulation is Your Best Choice',
      data: [
        { title: 'Simulate real-world challenges and learn through experience.' },
        { title: 'Gain expertise in decision-making and strategic analysis.' },
        { title: 'Develop industry-specific skills in a fraction of the time' }
      ]
    }
  ];
  