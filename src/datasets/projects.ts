export type PortfolioProject = {
  slug: string;
  name: string;
  summary: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  category: string;
  featured?: boolean;
};

const projects: PortfolioProject[] = [
  {
    slug: "interview-preparation-tracker",
    name: "Interview Preparation Tracker",
    summary:
      "A full-stack interview-prep platform for tracking progress, practising AI-assisted mock interviews, and getting personalized feedback.",
    stack: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js", "Gemini API"],
    category: "Full stack · AI",
    liveUrl: "https://interview-preparation-beta.vercel.app/"
  },
  {
    slug: "link-shortener",
    name: "Link Shortener",
    summary:
      "A URL-shortening service with collision-safe links, persistent storage, redirect handling, click tracking, and analytics.",
    stack: ["Spring Boot", "React.js", "Tailwind CSS", "PostgreSQL"],
    category: "Full stack · Java",
    liveUrl: "https://beshort-tan.vercel.app/"
  },
  {
    slug: "placement-prediction-system",
    name: "Placement Prediction System",
    summary:
      "A machine-learning project that compares classification models and serves real-time placement predictions through an API.",
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "FastAPI"],
    category: "Machine learning",
  },
  {
    slug: "hiteducation",
    name: "HIT Education",
    summary:
      "A website dedicated to providing information about college events and exam-related questions, helping students find the information they need more quickly and efficiently.",
    stack: ["REACT.JS", "TailwindCSS", "Expree.js", "MongoDB"],
    category: "MERN Stack",
    liveUrl: "https://hiteducation.online/"
  },
  {
    slug: "aeie-department-website",
    name: "AEIE Department Website",
    summary:
      "A responsive department website with event and student-chapter sections, built for the AEIE department at Haldia Institute of Technology.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/images/projectsImages/aeie_dept.png",
    imageAlt: "AEIE department website",
    liveUrl: "https://hit-aeie.netlify.app/",
    category: "Web development",
    featured: true,
  },
  {
    slug: "hitian-inside",
    name: "Hitian Inside",
    summary:
      "A full-stack campus community website built to bring student-focused resources and updates together.",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    image: "/images/projectsImages/hitianInside.png",
    imageAlt: "Hitian Inside website",
    liveUrl: "https://hitianinsideofficial-psi.vercel.app/",
    category: "Full stack",
    featured: true,
  },
  {
    slug: "todo-list",
    name: "Todo List",
    summary:
      "A full-stack task manager for creating and organizing todos with a persistent database.",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    image: "/images/projectsImages/todoList.png",
    imageAlt: "Todo list application",
    liveUrl: "https://todo-list-murex-six.vercel.app/",
    category: "Full stack",
    featured: true,
  },
  {
    slug: "rock-paper-scissors",
    name: "Rock Paper Scissors",
    summary:
      "A lightweight browser game built around interactive JavaScript logic and a responsive interface.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/images/projectsImages/RPSGame.png",
    imageAlt: "Rock Paper Scissors game",
    liveUrl: "https://sourav-rock-paper-scissors.vercel.app/",
    category: "Web development",
  },
  {
    slug: "musicscape",
    name: "Musicscape",
    summary: "A music discovery experience with a clean, responsive interface.",
    stack: ["React.js", "Tailwind CSS"],
    image: "/images/projectsImages/music.png",
    imageAlt: "Musicscape music website",
    liveUrl: "https://musicscape.vercel.app/",
    category: "Web development",
  },
  {
    slug: "forecast-hub",
    name: "Forecast Hub",
    summary: "A simple weather experience designed to make forecasts easy to explore.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/images/projectsImages/weather.png",
    imageAlt: "Forecast Hub weather website",
    liveUrl: "https://forecasthub.vercel.app/",
    category: "Web development",
  },
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    summary: "A browser-based QR code generator with a straightforward, focused workflow.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/images/projectsImages/QRCODE.png",
    imageAlt: "QR code generator",
    liveUrl: "https://qrcodegenerator-inky.vercel.app/",
    category: "Web development",
  },
  {
    slug: "tic-tac-toe",
    name: "Tic Tac Toe",
    summary: "A classic two-player game brought to life with interactive JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/images/projectsImages/tic-tac-toe.png",
    imageAlt: "Tic Tac Toe game",
    liveUrl: "https://sourav-tic-tac-toe.vercel.app/",
    category: "Web development",
  },
  {
    slug: "recipe-finder",
    name: "Recipe Finder",
    summary: "A recipe discovery website that helps turn a search into an idea for your next meal.",
    stack: ["HTML", "CSS", "JavaScript", "Public API"],
    image: "/images/projectsImages/getRecipe.png",
    imageAlt: "Recipe Finder website",
    liveUrl: "https://foods-recipe-alpha.vercel.app/",
    category: "Web development",
  },
];

export default projects;
