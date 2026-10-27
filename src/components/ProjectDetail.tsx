"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import type { PortfolioProject } from "@/datasets/projects";

export default function ProjectDetail({ project }: { project: PortfolioProject }) {
  return (
    <motion.main
      className="page-shell subpage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.12 }}
      >
        <Link href="/works" className="text-link back-link">
          <ArrowLeft size={16} aria-hidden="true" /> All projects
        </Link>
      </motion.div>
      <motion.article
        className="project-detail"
        initial={{ opacity: 0, y: 30, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
      >
        <motion.div
          className="project-detail-art"
          initial={{ clipPath: "inset(12% 5% 12% round 14px)", opacity: 0.6 }}
          animate={{ clipPath: "inset(0% 0% 0% round 0px)", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt ?? project.name}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 1100px"
            />
          ) : (
            <div className="detail-placeholder">
              <span className="art-grid" />
              <Sparkles size={46} strokeWidth={1.3} aria-hidden="true" />
              <span>{project.category}</span>
            </div>
          )}
        </motion.div>
        <motion.div
          className="project-detail-copy"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.36 } },
          }}
        >
          <motion.p
            className="eyebrow"
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
          >
            {project.category}
          </motion.p>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            {project.name}
          </motion.h1>
          <motion.p
            className="project-detail-summary"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          >
            {project.summary}
          </motion.p>
          <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            Built with
          </motion.h2>
          <div className="tag-list">
            {project.stack.map((technology, index) => (
              <motion.span
                className="tag"
                key={technology}
                initial={{ opacity: 0, scale: 0.88, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.55 + index * 0.06 }}
              >
                {technology}
              </motion.span>
            ))}
          </div>
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-primary project-live-link"
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.035, x: 3 }}
              whileTap={{ scale: 0.97 }}
            >
              Visit live project <ArrowUpRight size={17} aria-hidden="true" />
            </motion.a>
          )}
        </motion.div>
      </motion.article>
    </motion.main>
  );
}
