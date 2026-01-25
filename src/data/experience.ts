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
    company: "KREATIVE WERBUNG",
    companyUrl: "https://kreativewerbung.com/",
    role: "Web Developer Intern",
    duration: "Jan 2026 – Present", // Update with your actual start date
    description: [
      "Architecting and maintaining full-stack web applications using Next.js, React, and Express.",
      "Optimizing database schemas and server-side logic with Prisma ORM and PostgreSQL.",
      "Streamlining CI/CD pipelines and development workflows to improve deployment frequency.",
      "Managing production infrastructure using Docker, Portainer, and monitoring health with Prometheus and Grafana.",
    ],
    highlight: "Full-Stack Dev + DevOps",
    color: "239, 68, 68", // A vibrant red to match the "Kreative" branding
  },
  {
    company: "SaaviGenAI",
    companyUrl: "https://saavigen.ai",
    role: "Full Stack Developer Intern",
    duration: "Nov 2024 – Jan 2026",
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