"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";
import { motion } from "motion/react";
import MyPhoto from "../../public/images/myPhoto.jpg";
import projects from "@/datasets/projects";

const featuredProjects = projects.filter((project) => project.featured);

const headingVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
  },
};

const headingLineVariants = {
  hidden: { opacity: 0, y: 42, filter: "blur(7px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const focusAreas = [
  { label: "Frontend", detail: "React · Next.js · TypeScript", icon: Code2 },
  { label: "Backend", detail: "Node.js · Spring Boot · REST", icon: Terminal },
  { label: "AI & data", detail: "Machine learning · Gemini API", icon: BrainCircuit },
];

export default function Home() {
  return (
    <main>
      <section className="hero-section page-shell" id="home">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="status-dot" /> OPEN TO OPPORTUNITIES
          </motion.p>
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="hero-heading-line" variants={headingLineVariants}>
              Building useful
            </motion.span>
            <motion.span className="hero-heading-line" variants={headingLineVariants}>
              things for the <span className="gradient-text">web.</span>
            </motion.span>
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I&apos;m Sourav Kumar Bera — a computer science student and
            full-stack developer who enjoys turning thoughtful ideas into
            polished, dependable products.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/works" className="button button-primary">
              Explore my work <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <a
              href="/images/Sourav%20Kumar%20Bera%20(3).pdf"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              View résumé
            </a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <a
              href="https://github.com/Sourav-student"
              target="_blank"
              rel="noreferrer"
              aria-label="Sourav on GitHub"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/sourav-kumar-bera-93254b325"
              target="_blank"
              rel="noreferrer"
              aria-label="Sourav on LinkedIn"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a href="mailto:souravbera620595@gmail.com" aria-label="Email Sourav">
              <Mail size={18} aria-hidden="true" />
            </a>
            <span className="social-caption">Let&apos;s make something meaningful.</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <motion.div
            className="portrait-orbit orbit-one"
            animate={{ rotate: 360 }}
            transition={{ duration: 42, ease: "linear", repeat: Infinity }}
          />
          <motion.div
            className="portrait-orbit orbit-two"
            animate={{ rotate: -360 }}
            transition={{ duration: 58, ease: "linear", repeat: Infinity }}
          />
          <div className="portrait-frame">
            <Image
              src={MyPhoto}
              alt="Sourav Kumar Bera"
              fill
              priority
              sizes="(max-width: 700px) 72vw, 380px"
              className="portrait-image"
            />
          </div>
          <motion.div
            className="floating-note"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={16} aria-hidden="true" />
            <span>Curious by nature</span>
          </motion.div>
          <div className="portrait-caption">
            <span className="caption-line" />
            <span>Haldia, India · CSE &apos;28</span>
          </div>
        </motion.div>

        <a href="#about" className="scroll-cue">
          <ArrowDown size={15} aria-hidden="true" /> Scroll to explore
        </a>
      </section>

      <section className="section-block page-shell" id="about">
        <div className="section-heading">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Curiosity, craft, and a little bit of code.</h2>
        </div>
        <div className="intro-grid">
          <motion.div
            className="intro-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <p>
              I&apos;m pursuing a B.Tech in Computer Science at Haldia Institute
              of Technology. I like working across the stack — from shaping
              thoughtful interfaces to building the APIs and data models behind
              them.
            </p>
            <p>
              I&apos;ve worked with product teams at Eastri and Amaanitvam
              Foundation, and I&apos;m always looking for the next interesting
              problem to solve.
            </p>
            <Link href="/about" className="text-link">
              More about me <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>
          <div className="focus-list">
            {focusAreas.map(({ label, detail, icon: Icon }, index) => (
              <motion.div
                className="focus-item"
                key={label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <span className="focus-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span>
                  <strong>{label}</strong>
                  <small>{detail}</small>
                </span>
                <ArrowDownRight className="focus-arrow" size={17} aria-hidden="true" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block projects-section" id="projects">
        <div className="page-shell">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">SELECTED PROJECTS</p>
              <h2>Ideas made into real things.</h2>
            </div>
            <Link href="/works" className="text-link">
              All projects <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="featured-grid">
            {featuredProjects.map((project, index) => {
              const ProjectIcon = [BrainCircuit, Code2, Sparkles][index];
              return (
                <motion.article
                  className={`project-card project-card-${index + 1}`}
                  key={project.slug}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  whileHover={{ y: -8, scale: 1.015 }}
                >
                  <Link
                    href={`/project-info/${project.slug}`}
                    className="project-card-link"
                    aria-label={`View ${project.name} project details`}
                  >
                    <div className="project-art">
                      <div className="art-grid" />
                      <span className="art-index">0{index + 1}</span>
                      <ProjectIcon className="art-icon" size={42} strokeWidth={1.4} aria-hidden="true" />
                      <motion.span
                        className="art-orb"
                        animate={{ scale: [0.9, 1.12, 0.9], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <span className="art-label">{project.category}</span>
                    </div>
                    <div className="project-card-copy">
                      <div className="project-title-row">
                        <h3>{project.name}</h3>
                        <span className="project-arrow">
                          <ArrowUpRight size={18} aria-hidden="true" />
                        </span>
                      </div>
                      <p>{project.summary}</p>
                      <div className="tag-list">
                        {project.stack.map((technology) => (
                          <span className="tag" key={technology}>{technology}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact-banner page-shell" id="contact">
        <div>
          <p className="eyebrow">HAVE A GOOD ONE IN MIND?</p>
          <h2>Let&apos;s build something that matters.</h2>
        </div>
        <a href="mailto:souravbera620595@gmail.com" className="button button-primary">
          Say hello <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
