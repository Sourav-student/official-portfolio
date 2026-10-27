"use client";

import { motion } from "motion/react";
import {
  SiBootstrap,
  SiC,
  SiCloudinary,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLeetcode,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiRender,
  SiScikitlearn,
  SiSocketdotio,
  SiSpringboot,
  SiSqlite,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import {
  FaBrain,
  FaCubesStacked,
  FaDatabase,
  FaJava,
  FaRobot,
  FaUpload,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import skillGroups from "@/datasets/skills";

const icons: Record<string, IconType> = {
  java: FaJava,
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  sql: SiSqlite,
  html: SiHtml5,
  css: SiCss3,
  c: SiC,
  springboot: SiSpringboot,
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  socketio: SiSocketdotio,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  redis: SiRedis,
  mongoose: SiMongoose,
  swagger: SiSwagger,
  jwt: SiJsonwebtokens,
  git: SiGit,
  github: SiGithub,
  docker: SiDocker,
  postman: SiPostman,
  vercel: SiVercel,
  render: SiRender,
  cloudinary: SiCloudinary,
  scikitlearn: SiScikitlearn,
  pandas: SiPandas,
  numpy: SiNumpy,
  generativeai: FaBrain,
  llm: FaRobot,
  leetcode: SiLeetcode,
  oop: FaCubesStacked,
  dbms: FaDatabase,
  multer: FaUpload,
};

const groupVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.075 },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 190, damping: 17 },
  },
};

export default function SkillsShowcase() {
  return (
    <div className="skills-showcase">
      {skillGroups.map((group, groupIndex) => (
        <motion.article
          className="skill-group"
          key={group.name}
          variants={groupVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          transition={{ delay: groupIndex * 0.04 }}
        >
          <div className="skill-group-heading">
            <div>
              <h3>{group.name}</h3>
              <p>{group.note}</p>
            </div>
            <span className="skill-group-count">
              {String(group.skills.length).padStart(2, "0")}
            </span>
          </div>
          <div className="skill-icon-grid">
            {group.skills.map((skill) => {
              const SkillIcon = icons[skill.icon];
              return (
                <motion.div
                  className="skill-tile"
                  key={skill.name}
                  variants={skillVariants}
                  whileHover={{ y: -5, scale: 1.035 }}
                  style={{ "--skill-color": skill.color } as React.CSSProperties}
                  title={skill.name}
                >
                  <span className="skill-icon-wrap">
                    <SkillIcon aria-hidden="true" />
                  </span>
                  <span>{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
