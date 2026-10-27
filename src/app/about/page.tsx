"use client";

import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap, Trophy } from "lucide-react";
import { motion } from "motion/react";
import SkillsShowcase from "@/components/SkillsShowcase";

const experience = [
  {
    role: "Full Stack Developer Intern",
    organization: "Amaanitvam Foundation",
    period: "Jul 2026 — Present",
    location: "Remote",
    highlights: [
      "Building and maintaining the Learning Resources module with React, Node.js, Express, and MongoDB.",
      "Developing REST APIs for resource management, search, filtering, and pagination.",
      "Designing MongoDB schemas for resource metadata, categories, and access information.",
    ],
  },
  {
    role: "Web Development Intern",
    organization: "Eastri",
    period: "Aug 2025 — Nov 2025",
    location: "Mumbai, Maharashtra",
    highlights: [
      "Developed 10+ reusable UI components to improve interface consistency and reduce duplicate work.",
      "Improved Lighthouse performance from 75 to 92 through asset and component optimizations.",
      "Collaborated in an existing codebase using Git-based workflows and reusable component patterns.",
    ],
  },
];

const achievements = [
  "Solved 600+ data structures and algorithms problems on LeetCode.",
  "Qualified through Round 3 of Flipkart GRiD 8.0.",
  "Earned 93% in the NPTEL Programming in Java certification.",
  "Nominated for Smart India Hackathon 2025 and 2026.",
];

export default function About() {
  return (
    <main className="page-shell subpage">
      <motion.header
        className="subpage-heading"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow">THE PERSON BEHIND THE PIXELS</p>
        <h1>A builder who loves <span className="gradient-text">the details.</span></h1>
        <p>
          I&apos;m Sourav, a Computer Science and Engineering student at Haldia
          Institute of Technology. I enjoy learning how things work, then
          putting that knowledge to use in products people can actually use.
        </p>
      </motion.header>

      <section className="about-stats" aria-label="At a glance">
        <div><strong>9.25</strong><span>CGPA / 10</span></div>
        <div><strong>10+</strong><span>Reusable UI components</span></div>
        <div><strong>600+</strong><span>LeetCode problems</span></div>
        <div><strong>2028</strong><span>Expected graduation</span></div>
      </section>

      <section className="subsection">
        <div className="subsection-title">
          <span className="section-icon"><BriefcaseBusiness size={19} aria-hidden="true" /></span>
          <div>
            <p className="eyebrow">WHERE I&apos;VE BEEN</p>
            <h2>Experience</h2>
          </div>
        </div>
        <div className="timeline">
          {experience.map((job, index) => (
            <motion.article
              className="timeline-card"
              key={job.organization}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="timeline-card-heading">
                <div>
                  <h3>{job.role}</h3>
                  <p className="timeline-organization">{job.organization}</p>
                </div>
                <span className="timeline-period">{job.period}</span>
              </div>
              <p className="timeline-location">{job.location}</p>
              <ul>
                {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="subsection">
        <div className="subsection-title">
          <span className="section-icon"><Code2 size={19} aria-hidden="true" /></span>
          <div>
            <p className="eyebrow">TOOLS OF THE TRADE</p>
            <h2>Skills & technologies</h2>
          </div>
        </div>
        <SkillsShowcase />
      </section>

      <section className="subsection education-achievements">
        <article className="education-card">
          <div className="subsection-title">
            <span className="section-icon"><GraduationCap size={19} aria-hidden="true" /></span>
            <div>
              <p className="eyebrow">ALWAYS LEARNING</p>
              <h2>Education</h2>
            </div>
          </div>
          <h3>B.Tech — Computer Science & Engineering</h3>
          <p>Haldia Institute of Technology · Haldia, West Bengal</p>
          <span className="education-meta">Expected July 2028 <span>·</span> CGPA 9.25 / 10</span>
        </article>
        <article className="education-card">
          <div className="subsection-title">
            <span className="section-icon"><Trophy size={19} aria-hidden="true" /></span>
            <div>
              <p className="eyebrow">MILESTONES</p>
              <h2>Achievements</h2>
            </div>
          </div>
          <ul className="achievement-list">
            {achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
          </ul>
        </article>
      </section>

      <section className="contact-banner">
        <div>
          <p className="eyebrow">READY FOR WHAT&apos;S NEXT</p>
          <h2>Let&apos;s make good things happen.</h2>
        </div>
        <Link href="/works" className="button button-primary">
          See my work <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
