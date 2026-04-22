export type Skill = { skill: string; percentage: string };
export type SkillCategory = { title: string; icon: string; skills: Skill[] };

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "/assets/images/frontEnd.png",
    skills: [
      { skill: "HTML5", percentage: "90%" },
      { skill: "CSS3", percentage: "80%" },
      { skill: "JavaScript", percentage: "80%" },
      { skill: "TypeScript", percentage: "80%" },
      { skill: "React.js", percentage: "80%" },
      { skill: "Next.js", percentage: "75%" },
      { skill: "Tailwind CSS", percentage: "85%" },
      { skill: "Bootstrap", percentage: "70%" },
      { skill: "Angular.js", percentage: "40%" },
      { skill: "Flutter", percentage: "40%" },
    ],
  },
  {
    title: "Backend",
    icon: "/assets/images/backend.png",
    skills: [
      { skill: "Node.js", percentage: "60%" },
      { skill: "Express.js", percentage: "60%" },
      { skill: "PHP", percentage: "50%" },
      { skill: "Laravel", percentage: "40%" },
      { skill: "Python / Flask", percentage: "50%" },
    ],
  },
  {
    title: "Database",
    icon: "/assets/images/database.png",
    skills: [
      { skill: "PostgreSQL", percentage: "50%" },
      { skill: "MongoDB", percentage: "60%" },
      { skill: "MySQL", percentage: "60%" },
    ],
  },
  {
    title: "Tools",
    icon: "/assets/images/tools.png",
    skills: [
      { skill: "Git & GitHub", percentage: "90%" },
      { skill: "VS Code", percentage: "95%" },
      { skill: "Responsive Design", percentage: "100%" },
      { skill: "AWS", percentage: "30%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "/assets/images/soft-skills.png",
    skills: [
      { skill: "Problem Solving", percentage: "85%" },
      { skill: "Collaboration & Communication", percentage: "100%" },
      { skill: "Attention to Details", percentage: "100%" },
      { skill: "Self Learning", percentage: "100%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "React / React Native Developer — Squip",
    date: "Feb 2023 – Dec 2023",
    responsibilities: [
      "Built the CustomAnswer component for the Squip voting flow, optimizing user input.",
      "Developed websites, dashboards, and mobile apps with React and React Native.",
      "Led 80% of dashboard work and integrated cross-functional team requirements.",
      "Implemented features across React/React Native, fixing UI and design issues.",
      "Integrated backend services and resolved rendering issues for vote results.",
    ],
  },
  {
    title: "MEAN Stack / Front-End Developer — Global Dev Gate, Egypt",
    date: "Jan 2020 – Jan 2021",
    responsibilities: [
      "Converted mock-ups into HTML, JavaScript, AJAX and JSON.",
      "Designed and shipped web pages and sites in a fast-paced environment.",
      "Analyzed requirements and implemented software for production websites.",
    ],
  },
  {
    title: "Professional Administrative Support — Upwork",
    date: "Jan 2015 – Ongoing",
    responsibilities: [
      "Managed multiple projects with teams of up to 4 people.",
      "Delivered 9 data projects with high precision and adapted quickly to new tools.",
    ],
  },
];

export const WORK_SAMPLES = [
  { title: "Squib", url: "https://www.squib.app/", img: "/assets/images/workSample2.png" },
  { title: "Food Landing Page", url: "https://food-landing-page-gules.vercel.app/", img: "/assets/images/workSample1.png" },
  { title: "Todo List App", url: "https://todo-list-app-ecru-six.vercel.app/", img: "/assets/images/workSample3.png" },
  { title: "Adopt Me", url: "https://adopt-me-pearl-ten.vercel.app/", img: "/assets/images/workSample4.png" },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#experience" },
  { label: "Work Samples", href: "#samples" },
  { label: "Contact", href: "#contact" },
];
