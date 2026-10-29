export interface Project {
  slug: string;
  name: string;
  image: string;
  stack: string[];
  description: string;
  live: string;
  repo: string; // client repository only
  challenges: string[];
  future: string[];
}

export const profile = {
  name: "Rhythm",
  designation: "Full Stack Web Developer",
  tagline:
    "I build fast, clean and AI-powered web apps with React, Next.js and TypeScript.",
  photo: "/profile.jpg",
  resume: "/resume.pdf",
  email: "ahmedtajwarrhythm@gmail.com",
  phone: "+8801868026369",
  whatsapp: "8801868026369",
  about: [
    "I am a Computer Science and Engineering student. My programming journey started with curiosity about how websites and intelligent apps actually work and it has grown into a daily habit of building, breaking and fixing things.",
    "I enjoy front-end work where design meets logic and I am steadily growing into back-end development, databases. I love solving problems step by step and turning rough ideas into real products.",
  ],
  hobbies: [
    "Competitive problem solving",
    "Reading tech blogs",
    "Exploring AI tools",
  ],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/tajwar-hub" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmedtajwarrhythm/" },
];

export const skills: Record<string, { name: string; level: number }[]> = {
  Frontend: [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 70 },
    { name: "React / Next.js", level: 75 },
    { name: "Tailwind CSS", level: 85 },
  ],
  Backend: [
    { name: "Node.js", level: 65 },
    { name: "MongoDB", level: 60 },
  ],
  Tools: [{ name: "Git & GitHub", level: 80 }],
};

export const education = [
  {
    title: "B.Sc. in Computer Science and Engineering",
    place: "North South University [Dhaka, Bangladesh]",
    period: "2025-MAY - Present",
    note: "Currently studying core CSE Subjects",
  },
];

export const experience = [
  {
    title: "AI Driven Full Stack Web Engineering Bootcamp",
    place: "Programming Hero",
    period: "2026-JUNE - Present",
    note: "Intensive hands-on training in React, Next.js, TypeScript, databases, authentication and AI-driven development.",
  },
];

export const projects: Project[] = [
  {
    slug: "bazardor",
    name: "BazarDor (বাজার দর)",
    image: "/projects/bazardor.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Better-Auth"],
    description:
      "A price-tracker website where users can check daily market prices of everyday products, with secure sign-in and a clean, responsive interface.",
    live: "https://ph-assignment-7-bazardor-1.vercel.app/",
    repo: "https://github.com/tajwar-hub/ph-assignment-7-bazardor-1",
    challenges: [
      "Integrating authentication with Better-Auth.",
      "Handling API data types safely with TypeScript.",
      "Making price tables readable on small screens.",
    ],
    future: [
      "Price history charts",
      "Price-drop alerts",
      "Bangla / English language toggle",
    ],
  },
  {
    slug: "fitlog",
    name: "FitLog",
    image: "/projects/fitlog.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "A workout planner that lets users build weekly routines, log exercises and keep track of their fitness progress.",
    live: "https://ph-assignment-6-fitlog-alpha.vercel.app/",
    repo: "https://github.com/tajwar-hub/ph-assignment-6-fitlog",
    challenges: [
      "Designing a clean state flow for workout plans.",
      "Structuring reusable components.",
      "Keeping the layout consistent across devices.",
    ],
    future: [
      "Progress analytics",
      "AI workout suggestions",
      "Dark / light theme",
    ],
  },
  {
    slug: "the-devstack",
    name: "THE DEVSTACK",
    image: "/projects/devstack.png",
    stack: ["React", "TypeScript"],
    description:
      "A simple React + TypeScript (ES6) + Tailwind project with moderately (Not Fully) responsive UI design and some little functionalities.",
    live: "https://ph-b14-a5-the-devstack.netlify.app/",
    repo: "https://github.com/tajwar-hub/ph-assignment-5-DevStack",
    challenges: [
      "To Start the react journey",
      "Tried building it step by step",
    ],
    future: ["Currently thinking on this"],
  },
];
