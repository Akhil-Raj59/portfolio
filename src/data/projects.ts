import projectImage1 from "../assets/main-image.png"
export interface ProjectType {
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  live: string;
  github: string;
  image?: string;
  color: string;
}

export const projects: ProjectType[] = [
  {
    title: "Medical Assistant Application",
    category: "AI • Healthcare • MERN",
    description:
      "AI-powered healthcare assistant with chatbot, vision, and voice support.",
    problem:
      "Patients struggle to access quick medical guidance and nearby healthcare services.",
    solution:
      "Built a MERN-based AI assistant with chatbot, hospital finder, mood logging, and secure auth.",
    impact:
      "Improved accessibility to healthcare insights with secure patient data handling.",
    tech: ["React", "Node.js", "MongoDB", "AI APIs", "JWT"],
    live: "https://medcarefrontend.netlify.app/",
    github: "https://github.com/Akhil-Raj59/medcare-backend",
    color: "34, 197, 94", // green
    image: `${projectImage1}`,
  },
  {
    title: "Food Redistribution Platform",
    category: "Social Impact • Full Stack",
    description:
      "Platform to connect food donors with NGOs to reduce food waste.",
    problem:
      "Excess food goes to waste while NGOs face shortages.",
    solution:
      "Built a platform enabling real-time donation listings and NGO requests.",
    impact:
      "Promoted sustainable food distribution and reduced wastage.",
    tech: ["React", "Node.js", "MongoDB", "Maps API"],
    live: "https://akhil-raj59.github.io/Plate_Again_ibmIntern/",
    github: "https://github.com/Akhil-Raj59/Plate_Again_ibmIntern",
    color: "251, 146, 60", // orange
  },
  {
    title: "E-commerce Platform",
    category: "Commerce • Full Stack",
    description:
      "Scalable e-commerce platform with authentication and order management.",
    problem:
      "Need for a secure and scalable online shopping experience.",
    solution:
      "Implemented product listings, cart, orders, and role-based access.",
    impact:
      "Demonstrated scalable backend and secure auth workflows.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    live: "https://your-ecommerce.com",
    github: "",
    color: "139, 92, 246", // purple
  },
  {
    title: "Learning Management System (LMS)",
    category: "EdTech • Web App",
    description:
      "Learning platform for managing courses and students.",
    problem:
      "Manual course management lacks scalability and tracking.",
    solution:
      "Built LMS with course creation, enrollment, and progress tracking.",
    impact:
      "Streamlined course delivery and learner management.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://your-lms.com",
    github: "https://github.com/yourusername/learning-management",
    color: "59, 130, 246", // blue
  },
];