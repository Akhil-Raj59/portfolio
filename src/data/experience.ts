export interface ExperienceType {
  company: string;
  companyUrl: string;
  role: string;
  duration: string;
  description: string[];
  highlight: string;
  color: string;
}

export const experienceData: ExperienceType[] = [
  {
    company: "SaaviGenAI",
    companyUrl: "https://saavigen.ai",
    role: "Full Stack Developer Intern",
    duration: "Nov 2024 – Present",
    description: [
      "Architected and deployed enterprise website from scratch with admin CMS",
      "Implemented secure JWT authentication and Cloudinary media management",
      "Configured production environment using Nginx and Hostinger",
      "Collaborated directly with founder on scalable technical solutions",
    ],
    highlight: "Live Product • Production Deployment",
    color: "99, 102, 241", // indigo
  },
  {
    company: "CSRBOX (IBM Collaboration)",
    companyUrl: "https://csrbox.org",
    role: "Web Developer Intern",
    duration: "June 2024 – Aug 2024",
    description: [
      "Worked on enterprise-level web development projects",
      "Followed structured development workflows and best practices",
      "Collaborated within cross-functional teams",
    ],
    highlight: "Enterprise Collaboration",
    color: "56, 189, 248", // cyan
  },
];