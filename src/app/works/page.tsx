"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import { motion } from "motion/react";
import projects from "@/datasets/projects";

export default function Works() {
  return (
    <main className="page-shell subpage">
      <motion.header
        className="subpage-heading"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow">A FEW THINGS I&apos;VE MADE</p>
        <h1>Selected <span className="gradient-text">work.</span></h1>
        <p>
          From full-stack products and machine-learning experiments to small
          web projects, each one started with a question worth exploring.
        </p>
      </motion.header>

      <div className="works-count">
        <span><FolderOpen size={16} aria-hidden="true" /> PROJECT ARCHIVE</span>
        <span>{projects.length.toString().padStart(2, "0")} PROJECTS</span>
      </div>

      <div className="works-grid">
        {projects.map((project, index) => (
          <motion.article
            className="work-card"
            key={project.slug}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.45, delay: (index % 4) * 0.07 }}
            whileHover={{ y: -5 }}
          >
            <Link href={`/project-info/${project.slug}`} className="work-card-link">
              <div className="work-image">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? project.name}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                ) : (
                  <div className="work-art">
                    <span className="work-art-index">{(index + 1).toString().padStart(2, "0")}</span>
                    <span className="work-art-mark">{project.name.slice(0, 1)}</span>
                    <span className="work-art-label">{project.category}</span>
                  </div>
                )}
                <span className="work-image-arrow"><ArrowUpRight size={18} aria-hidden="true" /></span>
              </div>
              <div className="work-copy">
                <p className="eyebrow">{project.category}</p>
                <h2>{project.name}</h2>
                <p className="work-summary">{project.summary}</p>
                <div className="tag-list">
                  {project.stack.map((technology) => (
                    <span className="tag" key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
