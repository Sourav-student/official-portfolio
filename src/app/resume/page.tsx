"use client";

import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import SkillsShowcase from "@/components/SkillsShowcase";

const resumeUrl = "/images/Sourav%20Kumar%20Bera%20(3).pdf";

const roles = [
  {
    title: "Full Stack Developer Intern",
    company: "Amaanitvam Foundation · Remote",
    period: "Jul 2026 — Present",
    details: [
      "Develop and maintain the Learning Resources module using React.js, Node.js, Express.js, and MongoDB.",
      "Build REST APIs for resource upload, update, deletion, search, filtering, and pagination.",
      "Design MongoDB schemas for resource metadata, categories, subjects, domains, and access information.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Eastri · Mumbai, Maharashtra",
    period: "Aug 2025 — Nov 2025",
    details: [
      "Built 10+ reusable UI components, improving consistency and reducing duplicate implementation effort.",
      "Improved Lighthouse performance from 75 to 92 through asset optimization and component-level improvements.",
      "Collaborated in an existing codebase using Git-based development workflows.",
    ],
  },
];

const projectHighlights = [
  {
    name: "Interview Preparation Tracker",
    details: "Next.js, Tailwind CSS, MongoDB, Express.js, Gemini API",
  },
  {
    name: "Link Shortener",
    details: "Spring Boot, React.js, Tailwind CSS, PostgreSQL",
  },
  {
    name: "Placement Prediction System",
    details: "Python, scikit-learn, Pandas, NumPy, FastAPI · ~79% accuracy",
  },
];

export default function Resume() {
  return (
    <main className="page-shell subpage">
      <motion.header
        className="resume-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div>
          <p className="eyebrow">THE SHORT VERSION</p>
          <h1>Sourav Kumar Bera</h1>
          <p className="resume-subtitle">Full-stack developer · Computer Science student</p>
          <p className="resume-contact">
            Haldia, West Bengal <span>·</span> +91 6201046595 <span>·</span>{" "}
            souravbera620595@gmail.com
          </p>
        </div>
        <a href={resumeUrl} target="_blank" rel="noreferrer" className="button button-primary">
          Download resume <ArrowDownToLine size={17} aria-hidden="true" />
        </a>
      </motion.header>

      <motion.section
        className="resume-summary"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <p>
          Computer Science and Engineering student with experience building
          responsive interfaces, reusable components, and REST APIs. Interested
          in full-stack product development, machine learning, and creating
          software that solves practical problems.
        </p>
      </motion.section>

      <motion.section
        className="resume-section"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <div className="resume-section-heading">
          <p className="eyebrow">CAREER</p>
          <h2>Experience</h2>
        </div>
        <div className="resume-list">
          {roles.map((role) => (
            <article className="resume-item" key={role.company}>
              <div className="resume-item-heading">
                <div>
                  <h3>{role.title}</h3>
                  <p>{role.company}</p>
                </div>
                <span>{role.period}</span>
              </div>
              <ul>
                {role.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="resume-section"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <div className="resume-section-heading">
          <p className="eyebrow">THINGS I&apos;VE BUILT</p>
          <h2>Selected projects</h2>
        </div>
        <div className="resume-projects">
          {projectHighlights.map((project) => (
            <article className="resume-project" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.details}</p>
              <Link href={`/project-info/${project.name.toLowerCase().replaceAll(" ", "-")}`} className="text-link">
                Project details <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="resume-bottom-grid"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <article className="resume-section">
          <div className="resume-section-heading">
            <p className="eyebrow">FOUNDATION</p>
            <h2>Education</h2>
          </div>
          <h3>B.Tech, Computer Science & Engineering</h3>
          <p>Haldia Institute of Technology · Expected July 2028</p>
          <p>CGPA: 9.25 / 10</p>
        </article>
        <article className="resume-section">
          <div className="resume-section-heading">
            <p className="eyebrow">TECHNICAL TOOLKIT</p>
            <h2>Skills</h2>
          </div>
          <p>Full-stack development, data engineering, machine learning, and core computer science.</p>
        </article>
      </motion.section>

      <motion.section
        className="resume-section resume-skills-section"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55 }}
      >
        <div className="resume-section-heading">
          <p className="eyebrow">TECHNICAL TOOLKIT</p>
          <h2>Skills & technologies</h2>
        </div>
        <SkillsShowcase />
      </motion.section>

      <motion.section
        className="resume-cta"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <p className="eyebrow">LET&apos;S CONNECT</p>
          <h2>Have an opportunity in mind?</h2>
        </div>
        <a href="mailto:souravbera620595@gmail.com" className="button button-secondary">
          <Mail size={16} aria-hidden="true" /> Email Sourav
        </a>
      </motion.section>
    </main>
  );
}
