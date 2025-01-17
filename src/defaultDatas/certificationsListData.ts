import Image1 from "../assets/images/sfp.jpeg";
import Image2 from "../assets/images/dpm.png";
import Image3 from "../assets/images/aipf.png";
import Image4 from "../assets/images/aipp.png";
import Image5 from "../assets/images/acpf.png";
import Image6 from "../assets/images/acpp.png";
import Image7 from "../assets/images/AIPM.jpeg";
const firstCourses=[
  {
    title: "MVP Development",
    id: "1",
    shortDesc:
      "In digital/agile transformation and product management, pages and forms are essential visual tools that represent digital products. Participants will learn how to effectively visualize, understand the interrelations of pages and forms, and use components to align with business requirements.",
  },
  {
    title: "Fundamental SQL",
    id: "2",
    shortDesc: "In agile communication, aligning business needs with technical implementation requires a strong understanding of data. This course teaches participants essential SQL skills to query, analyze, and manage data, enabling seamless communication and turning data-driven requirements into actionable insights.",
  },
  {
    title: "Fundamental API",
    id: "3",
    shortDesc: "APIs are central to agile communication, linking business needs with technical solutions. This course introduces participants to API fundamentals, teaching how to design and interpret APIs for clear, structured communication between systems and teams, boosting collaboration and efficiency in digital product management.",
  },
]

const tecnicalRequierMent=[
  {
    title: "Technical Requirement Analysis",
    id: "1",
    shortDesc: "User acceptance criteria are vital in agile communication, providing a clear guide for what needs to be delivered, tested, and coded. Participants will learn to analyze product requirements and define precise acceptance criteria, ensuring clarity across business, research, and development teams.",
  },
  {
    title: "Design Thinking for Digital Products",
    id: "2",
    shortDesc: "Efficient data flow, database structure, and API design are essential for seamless digital product development and agile communication. This course empowers business representatives, researchers, and developers to align technical systems with business goals, ensuring optimized performance, scalability, and cross-functional collaboration.",
  }
]

const digitalProduct= {
  title: "Digital Product Design ",
  shortDesc:
    "Master the bridge between business and technology with essential SQL and API skills. Drive seamless collaboration and data-driven solutions in digital product management.",
  mdHours:
    "24 hours (Interactive Practice 15 hours, real project 9  hours)",
  courses: "Fundamental SQL, Fundamental API, Digital Product Design",
  course: tecnicalRequierMent
}

const  businessRequirment=   
{
  title: "Business Analysis Foundation ",
  shortDesc:
    "Master the art of translating business needs into actionable requirements that drive successful digital products. Gain the skills to assess market opportunities, financial viability, and create solutions that align with strategic goals.",
  mdHours:
    " 20 hours (Interactive Practice 14 hours, real project 6 hours)",
  courses: "Business Analysis Foundation, Business Model Analysis",
  course: [
      {
          title: "Business Analysis Foundation",
          id: "7",
          shortDesc: "Understanding business needs is crucial for successful digital products and agile communication. This course equips participants with the skills to analyze target audiences, segmentation, and data-driven challenges, helping them craft actionable requirements that bridge business goals with technical solutions for impactful digital products."
      },
      {
          title: "Business Model Analysis",
          id: "8",
          shortDesc: "In this course, participants will learn to build and assess financial hypotheses critical to digital product success. The course covers evaluating business models, estimating expenses and revenues, conducting risk analysis, and strategies for market entry, ensuring informed decision-making that maximizes value and minimizes risk in Digital Product Design."

      }
      
  ]
}

export const certificationsListData = [
  {
    id: "1003",
    title: "Startup Foundation Practitioner",
    shortDesc: "Discover essential strategies and frameworks to build, manage, and scale a successful startup in the digital product domain. Participants will learn foundational tools like SQL and APIs, as well as techniques for market analysis and responding to evolving customer needs. Perfect for aspiring entrepreneurs seeking to transform their innovative ideas into sustainable business ventures.",
    links: "/certificates",
    enroll: "/classes",
    image: Image1,
    courseModules: [
      {
        title: "Digital Product Foundation ",
        shortDesc:
          "Master agile communication, Technical Requirement Analysis, and data flow design to drive digital product success. Gain the foundational skills needed to navigate and lead digital product transformations effectively.",
        mdHours:
          "24 hours (Interactive Practice 15 hours, real project 9 hours)",
        courses:
          "MVP Development, Technical Requirement Analysis, Master Data Analysis",
        course: firstCourses,
      },
      businessRequirment,
      digitalProduct,
      
      {
        title: "  Startup Foundation Practitioner ",
        shortDesc:
          "Empower your startup journey with the skills to build scalable digital products and grow organically. Master agile communication and strategic innovation for sustainable success.",
        mdHours:
          " 12 hours (Interactive Practice 9 hours, real project 3 hours)",
        courses: "Market Analysis and Niche Segmentation",
        course: [
          {
            title: "Market Analysis and Niche Segmentation",
            id: "11",
            shortDesc: "This course highlights agile communication as a key skill in responding to market demands. Participants will learn to analyze market dynamics, craft business models, and use data-driven insights to innovate for future opportunities while aligning with evolving market needs.",
          }
        ]
      },
    ],
    whyUs: [
      {
        title: "Comprehensive Startup Ecosystem Knowledge",
        desc: "Gain a deep understanding of the startup ecosystem, including market trends, funding models, startup culture, and business models.",
      },
      {
        title: "Practical Entrepreneurial Skills",
        desc: "Develop practical entrepreneurial skills, such as problem-solving, business planning, and business management.",
      },
      {
        title: "Real-world Application",
        desc: "Apply the knowledge and skills gained in the program to real-world applications and projects.",
      },
      {
        title: "Agile Communication Mastery",
        desc: "Develop effective communication skills and become a confident communicator in the startup ecosystem.",
      },
      {
        title: "Innovation & Strategy Development",
        desc: "Develop innovation and strategic thinking skills to drive business growth and success.",
      },
      {
        title: "Market Research and Product-Market Fit",
        desc: "Conduct market research and identify product-market fits to drive business success.",
      },
      {
        title: "Building Entrepreneurial Mindset",
        desc: "Develop a entrepreneurial mindset to drive business growth and success.",
      },
      {
        title: "Mentorship and Networking",
        desc: "Learn how to network with mentors and industry experts, gain access to resources, and build relationships that can lead to career growth.",
      },
    ],
    whatyouGet: [
      {
        boldTitle: "Completion Certification",
        title: " Official recognition of course completion.",
      },
      {
        boldTitle: "Access to Training Simulation System",
        title: "Real-world practice with digital tools.",
      },
      {
        boldTitle: "1-Year Full Access to Course Materials",
        title: " Continuous learning with unlimited resources.",
      },
      {
        boldTitle: "Unlimited Real Projects in Training Simulation",
        title: "Hands-on project creation and sharing.",
      },
      {
        boldTitle: "Hands-On Projects",
        title: "Practical application through real-world scenarios.",
      },
      {
        boldTitle: "Quizzes & Assessments",
        title: "Test knowledge and track progress.",
      },
      {
        boldTitle: "Mentor Support",
        title: " Guidance from experienced professionals.",
      },
      {
        boldTitle: "Certification Exam Voucher",
        title: " Free voucher for certification exam.",
      },
      {
        boldTitle: "Interactive Learning Tools",
        title: " Engaging and immersive learning experience.",
      },
    ],
    whatLearn: [
      {
        title: "Digital Product Components & UX Design",
        desc: "Understand the key components of digital products and how UX design shapes user interactions and experiences.",
      },
      {
        title: "Component Organization and Layout",
        desc: "Learn how to effectively organize component length, order, and relations to create logical page structures.",
      },
      {
        title: "Form Design & Input Management",
        desc: "Discover how to design interactive forms using components like shortDesc areas, file pickers, and select boxes, ensuring smooth user input.",
      },
      {
        title: "Event Actions & Form Handling",
        desc: " Master event actions like form popups, redirects, and closing forms to improve user engagement and flow.",
      },
      {
        title: "Styling with CSS Gain hands-on experience in applying",
        desc: "CSS styles to digital product pages and components, ensuring visual consistency and responsiveness.",
      },
    ],
  },
  {
    id: "1006",
    title: "Digital Product Manager",
    shortDesc: "Acquire comprehensive skills to manage digital products effectively, from initial concept to final launch. This program covers key areas such as backlog assessment, project management, and digital product design while emphasizing essential soft skills for leadership. Geared toward Product Managers, Startups, and Program Managers, it ensures a practical and impactful learning experience.",
    links: "/certificates",
    enroll: "/classes",
    image: Image2,
    courseModules: [
      {
        title: "Digital Product Foundation ",
        shortDesc:
          "Master agile communication, Technical Requirement Analysis, and data flow design to drive digital product success. Gain the foundational skills needed to navigate and lead digital product transformations effectively.",
        mdHours:
          "24 hours (Interactive Practice 15 hours, real project 9 hours)",
        courses:
          "MVP Development, Technical Requirement Analysis, Master Data Analysis",
        course: firstCourses,
      },
      businessRequirment,
      digitalProduct,
      {
        title: " Digital Product Management ",
        shortDesc:
          "Empower your startup journey with the skills to build scalable digital products and grow organically. Master agile communication and strategic innovation for sustainable success.",
        mdHours:
          " 12 hours (Interactive Practice 9 hours, real project 3 hours)",
        courses: "Backlog Assessment,Project Management",
        course: [
          {
            title: "Backlog Assessment",
            id: "9",
            shortDesc: "Participants will learn how to assess and manage a product backlog using Agile Communication principles. The course focuses on prioritizing issues, managing sprints, estimating and tracking hours, calculating project duration, and managing budgets, ensuring alignment and effective resource allocation for successful project delivery.",
          },
          {
            title: "Project Management",
            id: "10",
            shortDesc: "This course explores project management through Agile Communication, teaching techniques for issue management, sprint planning, and tracking spent hours. Participants will learn how to calculate project duration and budget, monitor team performance, and manage a comprehensive work breakdown, ensuring precise, collaborative, and successful project delivery.",
          }
        ]
      },
    ],
    whyUs: [
      {
        title: "Comprehensive Startup Ecosystem Knowledge",
      },
      {
        title: "End-to-End Product Lifecycle Expertise",
      },
      {
        title: "Practical Tools and Techniques",
      },
      {
        title: "Data-Driven Decision-Making",
      },
      {
        title: "Real-World Simulations",
      },
      {
        title: "Focus on Cost and Time Efficiency",
      },
      {
        title: "Global Market Perspective",
      },
      {
        title: "Certified Industry Recognition",
      },
    ],
    whatyouGet: [
      {
        boldTitle: "Completion Certification",
        title: " Official recognition of course completion.",
      },
      {
        boldTitle: "Access to Training Simulation System",
        title: "Real-world practice with digital tools.",
      },
      {
        boldTitle: "1-Year Full Access to Course Materials",
        title: " Continuous learning with unlimited resources.",
      },
      {
        boldTitle: "Unlimited Real Projects in Training Simulation",
        title: "Hands-on project creation and sharing.",
      },
      {
        boldTitle: "Hands-On Projects",
        title: "Practical application through real-world scenarios.",
      },
      {
        boldTitle: "Quizzes & Assessments",
        title: "Test knowledge and track progress.",
      },
      {
        boldTitle: "Mentor Support",
        title: " Guidance from experienced professionals.",
      },
      {
        boldTitle: "Certification Exam Voucher",
        title: " Free voucher for certification exam.",
      },
      {
        boldTitle: "Interactive Learning Tools",
        title: " Engaging and immersive learning experience.",
      },
    ],
    whatLearn: [
      {
        title: "How to Create and Manage a Project Backlog Master ",
        desc: "the use of UI Cards and Data Flow Cards to structure and organize all project tasks and features.",
      },
      {
        title: "How to Plan and Adjust Sprints Effectively Learn ",
        desc: "to prioritize tasks, manage scope changes, and align sprint goals with business objectives.",
      },
      {
        title:
          "How to Apply Estimation Techniques for Accurate Planning Explore ",
        desc: "methods like Parametric and Expert Judgment to calculate precise task completion times",
      },
      {
        title: "How to Handle Change Requests During Sprints Discover ",
        desc: "strategies to manage change and new requests while maintaining project quality and timelines",
      },
      {
        title:
          "How to Foster Collaboration Through Agile Communication Develop ",
        desc: "skills to enhance team alignment, resolve conflicts, and integrate user feedback for continuous improvement",
      },
    ],
  },
  {
    id: "1004",
    title: "AI Foundation Practitioner",
    shortDesc: "Build a comprehensive understanding of AI fundamentals and their transformative impact on the modern business landscape. This certification focuses on equipping learners with the knowledge to navigate global market trends and integrate AI concepts into their strategies. Designed for professionals at all levels looking to future-proof their skill set in a rapidly evolving digital environment.",
    links: "/certificates",
    enroll: "/classes",
    image: Image3,
    courseModules: [
      {
        title: "Digital Product Foundation  ",
        shortDesc:
          "Master agile communication, Technical Requirement Analysis, and data flow design to drive digital product success. Gain the foundational skills needed to navigate and lead digital product transformations effectively.",
        mdHours:
          "24 hours (Interactive Practice 15 hours, real project 9 hours)",
        courses:
          "MVP Development, Technical Requirement Analysis, Master Data Analysis",
        course: firstCourses
      },
      {
        title: " AI Foundation Practitioner ",
        shortDesc:
          "Master the art of translating business needs into actionable requirements that drive successful digital products. Gain the skills to assess market opportunities, financial viability, and create solutions that align with strategic goals.",
        mdHours:
          " 20 hours (Interactive Practice 14 hours, real project 6 hours)",
        courses: "Fundamental of AI/GenAI",
        course: [
              {
                title: "Fundamental of AI/GenAI",
                id: "14",
                shortDesc: "This course introduces the fundamentals of Artificial Intelligence (AI) and Generative AI (GenAI), exploring their impact on industries like business, manufacturing, fintech, and more. Participants will learn how these technologies are transforming sectors through automation, optimization, and innovation, providing foundational knowledge of AI/GenAI and their real-world applications.",
              }
            
        ]
      },
    ],
    whyUs: [
      {
        title: "Master Agile Communication in Technical Requirement Analysis",
      },
      {
        title:
          "Strengthen Cross-functional Communication in Digital Product Design",
      },
      {
        title:
          "Apply Agile Principles to Master Data and Business Model Analysis",
      },
      {
        title:
          "Enhance Collaboration Across Teams with Business Analysis Foundation",
      },
      {
        title: "Foster Effective Communication in SQL and API Design",
      },
      {
        title:
          "Align Agile Communication with Product Development and Strategy",
      },
      {
        title:
          "Streamline Decision-making Processes through Agile Communicationt",
      },
      {
        title: "Improve Stakeholder Communication in Complex Digital Projects",
      },
    ],
    whatyouGet: [
      {
        boldTitle: "Completion Certification",
        title: " Official recognition of course completion.",
      },
      {
        boldTitle: "Access to Training Simulation System",
        title: "Real-world practice with digital tools.",
      },
      {
        boldTitle: "1-Year Full Access to Course Materials",
        title: " Continuous learning with unlimited resources.",
      },
      {
        boldTitle: "Unlimited Real Projects in Training Simulation",
        title: "Hands-on project creation and sharing.",
      },
      {
        boldTitle: "Hands-On Projects",
        title: "Practical application through real-world scenarios.",
      },
      {
        boldTitle: "Quizzes & Assessments",
        title: "Test knowledge and track progress.",
      },
      {
        boldTitle: "Mentor Support",
        title: " Guidance from experienced professionals.",
      },
      {
        boldTitle: "Certification Exam Voucher",
        title: " Free voucher for certification exam.",
      },
      {
        boldTitle: "Interactive Learning Tools",
        title: " Engaging and immersive learning experience.",
      },
    ],
    whatLearn: [
      {
        title: "Digital Product Components & UX Design Understand ",
        desc: "how digital products are structured and how UX design impacts user interaction.",
      },
      {
        title: "Data Flow Management Master ",
        desc: "the process of managing data flow between pages, tables, and components to ensure smooth functionality.",
      },
      {
        title: "SQL & API Integration: Learn SQL ",
        desc: "for database management and how to integrate APIs to connect systems and databases.",
      },
      {
        title: "Database Design & Relationships Gain ",
        desc: "skills in designing relational databases and managing data relationships with ERDs.",
      },
      {
        title: "Business Requirement Mapping Learn ",
        desc: "how to capture and document actionable business and data-driven requirements to ensure successful product development",
      },
    ],
  },
  {
    id: "1005",
    title: "AI  Profesional Practitioner ",
    shortDesc: " Delve into advanced AI applications to craft real-world solutions and drive innovation in digital services. This certification explores niche segmentation, AI-driven service models, and Business Model Analysis to prepare participants for strategic roles in AI transformation. Ideal for professionals aiming to lead AI initiatives and unlock new opportunities in global markets.",
    links: "/certificates",
    enroll: "/classes",
    image: Image4,
    courseModules: [
      {
        title: "Digital Product Foundation  ",
        shortDesc:
          "Master agile communication, Technical Requirement Analysis, and data flow design to drive digital product success. Gain the foundational skills needed to navigate and lead digital product transformations effectively.",
        mdHours:
          "24 hours (Interactive Practice 15 hours, real project 9 hours)",
        courses:
          "MVP Development, Technical Requirement Analysis, Master Data Analysis",
          course: firstCourses
      },
      businessRequirment,
      digitalProduct,
      {
        title: " AI Professional Practitioner ",
        shortDesc:
          "Master the art of translating business needs into actionable requirements that drive successful digital products. Gain the skills to assess market opportunities, financial viability, and create solutions that align with strategic goals.",
        mdHours:
          " 20 hours (Interactive Practice 14 hours, real project 6 hours)",
        courses: "Fundamental of AI/GenAI",
        course: [
            {
                title: "Fundamentals of AI/GenAI",
                id: "14",
                shortDesc: "This course introduces the fundamentals of Artificial Intelligence (AI) and Generative AI (GenAI), exploring their impact on industries like business, manufacturing, fintech, and more. Participants will learn how these technologies are transforming sectors through automation, optimization, and innovation, providing foundational knowledge of AI/GenAI and their real-world applications."
            },
            {
                title: "Advanced Application of AI/GenAI",
                id: "20",
                shortDesc: "In this course, participants will learn how AI and Generative AI are revolutionizing digital services through automation and service enhancement. They will gain practical experience in implementing AI-driven solutions to improve operational efficiency, customer experience, and decision-making, using real-world examples and applications in sectors like finance, healthcare, and e-commerce"
  
            }
            
        ]
      }
    ],
    whyUs: [
      {
        title: "Master Agile Communication in Technical Requirement Analysis",
      },
      {
        title:
          "Strengthen Cross-functional Communication in Digital Product Design",
      },
      {
        title:
          "Apply Agile Principles to Master Data and Business Model Analysis",
      },
      {
        title:
          "Enhance Collaboration Across Teams with Business Analysis Foundation",
      },
      {
        title: "Foster Effective Communication in SQL and API Design",
      },
      {
        title:
          "Align Agile Communication with Product Development and Strategy",
      },
      {
        title:
          "Streamline Decision-making Processes through Agile Communicationt",
      },
      {
        title: "Improve Stakeholder Communication in Complex Digital Projects",
      },
    ],
    whatyouGet: [
      {
        boldTitle: "Completion Certification",
        title: " Official recognition of course completion.",
      },
      {
        boldTitle: "Access to Training Simulation System",
        title: "Real-world practice with digital tools.",
      },
      {
        boldTitle: "1-Year Full Access to Course Materials",
        title: " Continuous learning with unlimited resources.",
      },
      {
        boldTitle: "Unlimited Real Projects in Training Simulation",
        title: "Hands-on project creation and sharing.",
      },
      {
        boldTitle: "Hands-On Projects",
        title: "Practical application through real-world scenarios.",
      },
      {
        boldTitle: "Quizzes & Assessments",
        title: "Test knowledge and track progress.",
      },
      {
        boldTitle: "Mentor Support",
        title: " Guidance from experienced professionals.",
      },
      {
        boldTitle: "Certification Exam Voucher",
        title: " Free voucher for certification exam.",
      },
      {
        boldTitle: "Interactive Learning Tools",
        title: " Engaging and immersive learning experience.",
      },
    ],
    whatLearn: [
      {
        title: "Digital Product Components & UX Design Understand ",
        desc: "how digital products are structured and how UX design impacts user interaction.",
      },
      {
        title: "Data Flow Management Master ",
        desc: "the process of managing data flow between pages, tables, and components to ensure smooth functionality.",
      },
      {
        title: "SQL & API Integration Learn SQL ",
        desc: "for database management and how to integrate APIs to connect systems and databases.",
      },
      {
        title: "Database Design & Relationships Gain ",
        desc: "skills in designing relational databases and managing data relationships with ERDs.",
      },
      {
        title: "Business Requirement Mapping Learn ",
        desc: "how to capture and document actionable business and data-driven requirements to ensure successful product development",
      },
    ],
  },
  {
    id: "1001",
    title: "Agile Communication Foundation Practitioner ",
    shortDesc: "Master the core principles of Agile Communication to foster seamless collaboration and improve team efficiency. This certification equips professionals with tools to effectively analyze product requirements and leverage foundational frameworks for digital transformation projects. Ideal for individuals working directly in Digital Product Transformation, including Product Owners, Managers, and Engineers.",
    links: "/certificates",
    enroll: "/classes",
    image: Image5,
    courseModules: [
      {
        title: "Digital Product Foundation  ",
        shortDesc:
          "Master agile communication, Technical Requirement Analysis, and data flow design to drive digital product success. Gain the foundational skills needed to navigate and lead digital product transformations effectively.",
        mdHours:
          "24 hours (Interactive Practice 15 hours, real project 9 hours)",
        courses:
          "MVP Development, Technical Requirement Analysis, Master Data Analysis",
        course: firstCourses
      },

    ],
    whyUs: [
      {
        title: "Foundational Knowledge of AI and GenAI",
      },
      {
        title: "Hands-On Experience with Real-World AI Projects",
      },
      {
        title: "Practical Application in Digital Product Design",
      },
      {
        title: "AI Integration Across Various Industries",
      },
      {
        title: "Advanced Tools and Technologies in AI",
      },
      {
        title: "Data-Driven Decision-Making and Analytics",
      },
      {
        title: "Enhancing Business Processes with AI Solutions",
      },
      {
        title: "Agile Communication for Effective AI Implementation",
      },
    ],
    whatyouGet: [
      {
        boldTitle: "Completion Certification",
        title: " Official recognition of course completion.",
      },
      {
        boldTitle: "Access to Training Simulation System",
        title: "Real-world practice with digital tools.",
      },
      {
        boldTitle: "1-Year Full Access to Course Materials",
        title: " Continuous learning with unlimited resources.",
      },
      {
        boldTitle: "Unlimited Real Projects in Training Simulation",
        title: "Hands-on project creation and sharing.",
      },
      {
        boldTitle: "Hands-On Projects",
        title: "Practical application through real-world scenarios.",
      },
      {
        boldTitle: "Quizzes & Assessments",
        title: "Test knowledge and track progress.",
      },
      {
        boldTitle: "Mentor Support",
        title: " Guidance from experienced professionals.",
      },
      {
        boldTitle: "Certification Exam Voucher",
        title: " Free voucher for certification exam.",
      },
      {
        boldTitle: "Interactive Learning Tools",
        title: " Engaging and immersive learning experience.",
      },
    ],
    whatLearn: [
      {
        title: "How to Segment Niche Markets Using AI/GenAIMaster AI ",
        desc: "tools to identify and target niche markets with precision for tailored business strategies.",
      },
      {
        title: "How to Design AI-Driven Digital Service Models Learn",
        desc: "to create innovative digital services using AI, GenAI, and blockchain to drive global market growth",
      },
      {
        title: "How to Leverage Big Data for Business Insights Explore ",
        desc: "methods to utilize AI and ML for extracting actionable insights and enhancing customer experiences",
      },
      {
        title: "How to Optimize Market Strategies with AI/GenAI Use AI ",
        desc: "to enhance sales efforts, personalize campaigns, and improve customer satisfaction.",
      },
      {
        title:
          "How to Apply Predictive Analytics for Service Efficiency Utilize AI",
        desc: "-powered analytics to anticipate trends, improve operations, and optimize service delivery",
      },
      {
        title: "How to Automate Processes with AI/GenAI Tools Master ",
        desc: "the implementation of AI-driven solutions to streamline business operations and improve efficiency.",
      },
    ],
  },
  {
    id: "1002",
    title: "Agile Communication Professional Practitioner ",
    shortDesc: "Elevate your Agile Communication capabilities to lead high-performing teams and drive successful project execution. This program dives deeper into advanced concepts such as digital product design, SQL, and API fundamentals, alongside mastering business requirement and Business Model Analysis. Tailored for professionals managing Agile teams in dynamic, transformation-focused environments.",
    links: "/certificates",
    enroll: "/classes",
    image: Image6,
    courseModules: [
      {
        title: "Digital Product Foundation  ",
        shortDesc:
          "Master agile communication, Technical Requirement Analysis, and data flow design to drive digital product success. Gain the foundational skills needed to navigate and lead digital product transformations effectively.",
        mdHours:
          "24 hours (Interactive Practice 15 hours, real project 9 hours)",
        courses:
          "MVP Development, Technical Requirement Analysis, Master Data Analysis",
        course: firstCourses
      },
      businessRequirment,
      digitalProduct,
    ],
    whyUs: [
      {
        title: "Foundational Knowledge of AI and GenAI",
      },
      {
        title: "Hands-On Experience with Real-World AI Projects",
      },
      {
        title: "Practical Application in Digital Product Design",
      },
      {
        title: "AI Integration Across Various Industries",
      },
      {
        title: "Advanced Tools and Technologies in AI",
      },
      {
        title: "Data-Driven Decision-Making and Analytics",
      },
      {
        title: "Enhancing Business Processes with AI Solutions",
      },
      {
        title: "Agile Communication for Effective AI Implementation",
      },
    ],
    whatyouGet: [
      {
        boldTitle: "Completion Certification",
        title: " Official recognition of course completion.",
      },
      {
        boldTitle: "Access to Training Simulation System",
        title: "Real-world practice with digital tools.",
      },
      {
        boldTitle: "1-Year Full Access to Course Materials",
        title: " Continuous learning with unlimited resources.",
      },
      {
        boldTitle: "Unlimited Real Projects in Training Simulation",
        title: "Hands-on project creation and sharing.",
      },
      {
        boldTitle: "Hands-On Projects",
        title: "Practical application through real-world scenarios.",
      },
      {
        boldTitle: "Quizzes & Assessments",
        title: "Test knowledge and track progress.",
      },
      {
        boldTitle: "Mentor Support",
        title: " Guidance from experienced professionals.",
      },
      {
        boldTitle: "Certification Exam Voucher",
        title: " Free voucher for certification exam.",
      },
      {
        boldTitle: "Interactive Learning Tools",
        title: " Engaging and immersive learning experience.",
      },
    ],
    whatLearn: [
      {
        title: "How to Segment Niche Markets Using AI/GenAI",
        desc: "Master AI tools to identify and target niche markets with precision for tailored business strategies.",
      },
      {
        title: "How to Design AI-Driven Digital Service Models ",
        desc: "Learn to create innovative digital services using AI, GenAI, and blockchain to drive global market growth",
      },
      {
        title: "How to Leverage Big Data for Business Insights ",
        desc: "Explore methods to utilize AI and ML for extracting actionable insights and enhancing customer experiences",
      },
      {
        title: "How to Optimize Market Strategies with AI/GenAI ",
        desc: "Use AI to enhance sales efforts, personalize campaigns, and improve customer satisfaction.",
      },
      {
        title: "How to Apply Predictive Analytics for Service Efficiency ",
        desc: "Utilize AI-powered analytics to anticipate trends, improve operations, and optimize service delivery",
      },
      {
        title: "How to Automate Processes with AI/GenAI Tools",
        desc: "Master the implementation of AI-driven solutions to streamline business operations and improve efficiency.",
      },
    ],
  },
  {
    id: "1007",
    title: "AI Product Manager",
    shortDesc: "Acquire comprehensive skills to manage digital products effectively, from initial concept to final launch. This program covers key areas such as backlog assessment, project management, and digital product design while emphasizing essential soft skills for leadership. Geared toward Product Managers, Startups, and Program Managers, it ensures a practical and impactful learning experience.",
    links: "/certificates",
    enroll: "/classes",
    image: Image7,
    courseModules: [
      {
        title: "Digital Product Foundation ",
        shortDesc:
          "Master agile communication, Technical Requirement Analysis, and data flow design to drive digital product success. Gain the foundational skills needed to navigate and lead digital product transformations effectively.",
        mdHours:
          "24 hours (Interactive Practice 15 hours, real project 9 hours)",
        courses:
          "MVP Development, Technical Requirement Analysis, Master Data Analysis",
        course: firstCourses,
      },
      businessRequirment,
      digitalProduct,
      {
        title: " Digital Product Management ",
        shortDesc:
          "Empower your startup journey with the skills to build scalable digital products and grow organically. Master agile communication and strategic innovation for sustainable success.",
        mdHours:
          " 12 hours (Interactive Practice 9 hours, real project 3 hours)",
        courses: "Backlog Assessment,Project Management",
        course: [
          {
            title: "Backlog Assessment",
            id: "9",
            shortDesc: "Participants will learn how to assess and manage a product backlog using Agile Communication principles. The course focuses on prioritizing issues, managing sprints, estimating and tracking hours, calculating project duration, and managing budgets, ensuring alignment and effective resource allocation for successful project delivery.",
          },
          {
            title: "Project Management",
            id: "10",
            shortDesc: "This course explores project management through Agile Communication, teaching techniques for issue management, sprint planning, and tracking spent hours. Participants will learn how to calculate project duration and budget, monitor team performance, and manage a comprehensive work breakdown, ensuring precise, collaborative, and successful project delivery.",
          }
        ]
      },
      {
        title: " AI Professional Practitioner ",
        shortDesc:
          "Master the art of translating business needs into actionable requirements that drive successful digital products. Gain the skills to assess market opportunities, financial viability, and create solutions that align with strategic goals.",
        mdHours:
          " 20 hours (Interactive Practice 14 hours, real project 6 hours)",
        courses: "Fundamental of AI/GenAI",
        course: [
            {
                title: "Fundamentals of AI/GenAI",
                id: "14",
                shortDesc: "This course introduces the fundamentals of Artificial Intelligence (AI) and Generative AI (GenAI), exploring their impact on industries like business, manufacturing, fintech, and more. Participants will learn how these technologies are transforming sectors through automation, optimization, and innovation, providing foundational knowledge of AI/GenAI and their real-world applications."
            },
            {
                title: "Advanced Application of AI/GenAI",
                id: "20",
                shortDesc: "In this course, participants will learn how AI and Generative AI are revolutionizing digital services through automation and service enhancement. They will gain practical experience in implementing AI-driven solutions to improve operational efficiency, customer experience, and decision-making, using real-world examples and applications in sectors like finance, healthcare, and e-commerce"
  
            },
            {
              title: "Market Analysis and Niche Segmentation",
              id: "11",
              shortDesc: "This course highlights agile communication as a key skill in responding to market demands. Participants will learn to analyze market dynamics, craft business models, and use data-driven insights to innovate for future opportunities while aligning with evolving market needs.",
            }
            
        ]
      }
     
    ],
    whyUs: [
      {
        title: "Comprehensive Startup Ecosystem Knowledge",
      },
      {
        title: "End-to-End Product Lifecycle Expertise",
      },
      {
        title: "Practical Tools and Techniques",
      },
      {
        title: "Data-Driven Decision-Making",
      },
      {
        title: "Real-World Simulations",
      },
      {
        title: "Focus on Cost and Time Efficiency",
      },
      {
        title: "Global Market Perspective",
      },
      {
        title: "Certified Industry Recognition",
      },
    ],
    whatyouGet: [
      {
        boldTitle: "Completion Certification",
        title: " Official recognition of course completion.",
      },
      {
        boldTitle: "Access to Training Simulation System",
        title: "Real-world practice with digital tools.",
      },
      {
        boldTitle: "1-Year Full Access to Course Materials",
        title: " Continuous learning with unlimited resources.",
      },
      {
        boldTitle: "Unlimited Real Projects in Training Simulation",
        title: "Hands-on project creation and sharing.",
      },
      {
        boldTitle: "Hands-On Projects",
        title: "Practical application through real-world scenarios.",
      },
      {
        boldTitle: "Quizzes & Assessments",
        title: "Test knowledge and track progress.",
      },
      {
        boldTitle: "Mentor Support",
        title: " Guidance from experienced professionals.",
      },
      {
        boldTitle: "Certification Exam Voucher",
        title: " Free voucher for certification exam.",
      },
      {
        boldTitle: "Interactive Learning Tools",
        title: " Engaging and immersive learning experience.",
      },
    ],
    whatLearn: [
      {
        title: "How to Create and Manage a Project Backlog Master ",
        desc: "the use of UI Cards and Data Flow Cards to structure and organize all project tasks and features.",
      },
      {
        title: "How to Plan and Adjust Sprints Effectively Learn ",
        desc: "to prioritize tasks, manage scope changes, and align sprint goals with business objectives.",
      },
      {
        title:
          "How to Apply Estimation Techniques for Accurate Planning Explore ",
        desc: "methods like Parametric and Expert Judgment to calculate precise task completion times",
      },
      {
        title: "How to Handle Change Requests During Sprints Discover ",
        desc: "strategies to manage change and new requests while maintaining project quality and timelines",
      },
      {
        title:
          "How to Foster Collaboration Through Agile Communication Develop ",
        desc: "skills to enhance team alignment, resolve conflicts, and integrate user feedback for continuous improvement",
      },
    ],
  },
];
