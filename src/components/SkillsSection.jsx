import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiKubernetes,
  SiDocker,
  SiGooglecloud,
  SiPython,
  SiFastapi,
  SiPandas,
  SiFigma,
  SiFramer,
  SiThreedotjs,
  SiNestjs,
} from "react-icons/si";

const skillCategories = [
  // --- Frontend ---
  {
    title: "Backend Development",
    description:
      "Complete web solutions with backend APIs and database integration",
    icon: <FaNodeJs className="text-green-600 text-4xl" />,
    includes: [
      "RESTful API Development",
      "Database Design & Integration",
      "Authentication Systems",
      "Real-time Features",
      "Cloud Deployment",
      "Performance Monitoring",
    ],
    technologies: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express", icon: <span className="text-gray-700">Ex</span> },
      { name: "Nestjs", icon: <SiNestjs className="text-red-500" /> },
      { name: "Python", icon: <SiPython className="text-emerald-700" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    ],
    delivery: "2-5 weeks",
  },

  // --- Full Stack ---
  {
    title: "Frontend Development",
    description:
      "Modern, responsive web applications built with React, Next.js, and TypeScript",
    color: "text-blue-500",
    icon: <FaReact className="text-blue-500 text-4xl" />,
    includes: [
      "React & Next.js Applications",
      "TypeScript Implementation",
      "Responsive Design",
      "Performance Optimization",
      "SEO Best Practices",
      "Interactive UI/UX",
    ],
    technologies: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
    ],
    delivery: "1-4 weeks",
  },

  // --- Cloud & DevOps ---
  {
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure, deployment automation, and scalable solutions",
    icon: <FaAws className="text-orange-500 text-4xl" />,
    includes: [
      "AWS/GCP Cloud Setup",
      "CI/CD Pipeline Implementation",
      "Infrastructure as Code",
      "Auto-scaling Solutions",
      "Monitoring & Logging",
      "Security Best Practices",
    ],
    technologies: [
      { name: "AWS", icon: <FaAws className="text-orange-500" /> },
      { name: "GCP", icon: <SiGooglecloud className="text-blue-500" /> },
      { name: "Docker", icon: <SiDocker className="text-sky-600" /> },
      // { name: "Kubernetes", icon: <SiKubernetes className="text-indigo-600" /> },
    ],
    delivery: "1-3 weeks",
  },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, key) => (
            <div
              key={key}
              className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                {cat.icon}
                <h3 className="text-xl font-semibold">{cat.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{cat.description}</p>

              <ul className="space-y-2 mb-6">
                {cat.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-green-500">✔</span> {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 mb-6">
                {cat.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full text-sm"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Delivery: {cat.delivery}
                </span>
                <button className="bg-primary text-primary-foreground px-4 py-1.5 rounded-md text-sm font-medium hover:opacity-90">
                  Get Quote
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
