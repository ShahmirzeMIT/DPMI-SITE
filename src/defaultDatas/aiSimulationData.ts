export interface SkillData {
    id: string;
    quote: string;
    title: string;
    text: { title: string }[];
  }
  
  export const aiSimulationData: SkillData[] = [
    {
      id: "1",
      quote: 'AI-Simulation Platform empowers you to gain these skills in a structured and efficient manne',
      title: "What Makes Someone Truly Skilled",
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
      title: 'AI-Simulation is Your Best Choice',
      data: [
        { title: ' Real-World Learning Through Challenges.',text:"Tackle realistic scenarios to master problem-solving, decision-making, and strategic analysis in a risk-free environment." },
        { title: 'Accelerated Skill Development',text:"Acquire industry-specific skills and global terminologies in a fraction of the time through interactive, hands-on practice." },
        { title: 'Personalized Feedback and Accurate Insights',text:"Receive tailored guidance from AI mentors and rely on precise, KPI-driven metrics to measure progress and refine your expertise." },
        {title:"Practical Applications and Team Collaboration",text:"Apply knowledge to real-world projects, enhance team collaboration, and prepare for real organizational dynamics."},
        {title:'Future-Ready Skills with Societal Awareness',text:"Gain the skills needed for an AI-driven future while exploring the societal and ethical impacts of AI solutions."},
        {title:"Comprehensive Knowledge Integration",text:"Seamlessly transition from theory to practice, ensuring the retention and application of knowledge in professional settings."},
        {title:"Enhanced Decision-Making Confidence",text:"Strengthen your ability to analyze situations critically and make impactful decisions with a clear understanding of strategic outcomes."},
      ]
    }
  ];
  