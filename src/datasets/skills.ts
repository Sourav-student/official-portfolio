export type Skill = {
  name: string;
  icon: string;
  color: string;
};

export type SkillGroup = {
  name: string;
  note: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    note: "The building blocks",
    skills: [
      { name: "Java", icon: "java", color: "#f89820" },
      { name: "JavaScript", icon: "javascript", color: "#f7df1e" },
      { name: "TypeScript", icon: "typescript", color: "#3178c6" },
      { name: "Python", icon: "python", color: "#ffd43b" },
      { name: "SQL", icon: "sql", color: "#4b9bd5" },
      { name: "HTML", icon: "html", color: "#e34f26" },
      { name: "CSS", icon: "css", color: "#1572b6" },
      { name: "C", icon: "c", color: "#659ad2" },
    ],
  },
  {
    name: "Frameworks & UI",
    note: "Interfaces to APIs",
    skills: [
      { name: "Spring Boot", icon: "springboot", color: "#6db33f" },
      { name: "React", icon: "react", color: "#61dafb" },
      { name: "Next.js", icon: "nextjs", color: "#f4f4f4" },
      { name: "Node.js", icon: "nodejs", color: "#83cd29" },
      { name: "Express.js", icon: "express", color: "#e9eee9" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#38bdf8" },
      { name: "Bootstrap", icon: "bootstrap", color: "#a786f7" },
      { name: "Socket.io", icon: "socketio", color: "#e9eee9" },
    ],
  },
  {
    name: "Data & APIs",
    note: "Making information useful",
    skills: [
      { name: "PostgreSQL", icon: "postgresql", color: "#6699c8" },
      { name: "MySQL", icon: "mysql", color: "#f29111" },
      { name: "MongoDB", icon: "mongodb", color: "#47a248" },
      { name: "Redis", icon: "redis", color: "#dc382d" },
      { name: "Mongoose", icon: "mongoose", color: "#c44444" },
      { name: "REST APIs", icon: "swagger", color: "#85ea2d" },
      { name: "JWT", icon: "jwt", color: "#d63aff" },
      { name: "Multer", icon: "multer", color: "#f4a261" },
    ],
  },
  {
    name: "Tools & AI",
    note: "A few favorite tools",
    skills: [
      { name: "Git", icon: "git", color: "#f05032" },
      { name: "GitHub", icon: "github", color: "#f4f4f4" },
      { name: "Docker", icon: "docker", color: "#2496ed" },
      { name: "Postman", icon: "postman", color: "#ff6c37" },
      { name: "Vercel", icon: "vercel", color: "#f4f4f4" },
      { name: "Render", icon: "render", color: "#a78bfa" },
      { name: "Cloudinary", icon: "cloudinary", color: "#7695ff" },
      { name: "scikit-learn", icon: "scikitlearn", color: "#f7931e" },
      { name: "Pandas", icon: "pandas", color: "#e70488" },
      { name: "NumPy", icon: "numpy", color: "#4dabcf" },
      { name: "Generative AI", icon: "generativeai", color: "#a78bfa" },
      { name: "LLMs", icon: "llm", color: "#6de3cf" },
    ],
  },
  {
    name: "Computer science",
    note: "Strong fundamentals",
    skills: [
      { name: "Data structures & algorithms", icon: "leetcode", color: "#f0a943" },
      { name: "Object-oriented programming", icon: "oop", color: "#a3c4f3" },
      { name: "DBMS", icon: "dbms", color: "#69a9df" },
    ],
  },
];

export default skillGroups;
