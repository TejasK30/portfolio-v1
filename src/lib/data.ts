import React from "react"
import { FaGraduationCap } from "react-icons/fa"

const Edulink = "/edulink.png"
const Webchat = "/webchat.png"
const Portfolio = "/portfolio.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Kolhapur, Maharashtra, India",
    description:
      "Pursuing B.Tech in Computer Science and Engineering (Artificial Intelligence & Machine Learning), expected graduation in 2025.",
    icon: React.createElement(FaGraduationCap),
    date: "2019",
  },
] as const

export const projectsData = [
  {
    title: "Edulink",
    description:
      "Developed a full-stack college management system with Node.js, Next.js, and MongoDB, featuring course, fee, and attendance management. Integrated a Flask-based AI chatbot using ChromaDB for role-specific academic query resolution.",
    tags: [
      "Node.js",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Python",
      "Flask",
      "Docker",
    ],
    imageUrl: Edulink,
  },
  {
    title: "Webchat",
    description:
      "Built a real-time chat app using React, TypeScript, and Node.js with Socket.io for live messaging and MongoDB for storage. Integrated JWT-based authentication, Zod for validation, Zustand for state management, and React Query for data fetching.",
    tags: [
      "React",
      "Vite",
      "TailwindCSS",
      "TypeScript",
      "Socket.io",
      "Node.js",
      "Express",
      "MongoDB",
      "Zod",
      "Zustand",
      "React Query",
    ],
    imageUrl: Webchat,
  },
  {
    title: "Portfolio",
    description:
      "A responsive web developer portfolio built with React, React Router, and EmailJS. It features a Home section, an About page with skills, and a Contact form for direct messaging.",
    tags: ["React", "React Router", "TailwindCSS"],
    imageUrl: Portfolio,
  },
] as const

export const skillsData = [
  "C",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "MySQL",
  "PostgreSQL",
  "Python",
  "Flask",
  "Docker",
  "Framer Motion",
] as const
