"use client"
import { motion } from "motion/react";
import { useState, useEffect } from "react";
// import ProjectInfoCard from "@/components/ProjectInfo/ProjectInfoCard";
import projects from "@/datasets/projects";
import axios from "axios";
import Link from "next/link";

type ProjectType = {
  _id: string,
  about_project: string,
  project_img: string
  project_name: string
  skills_use: string
  website_url: string
}

export default function Projects() {

  const [myProject, setMyProject] = useState<ProjectType[]>([]);
  // const [myprojects] = useState(projects);
  const [loading, setLoading] = useState<Boolean>(true);

  const getAllProjects = async () => {
    try {
      // setLoading(true);
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/project/all`);
      // console.log(res.data.projects);
      setMyProject(res.data.projects);
    } catch (error) {
      console.error("Error : not loading...");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllProjects();
  }, []);

  if (!myProject) {
    return (
      <div className="min-h-[50vh] w-full flex items-center justify-center bg-[#121212]">
        <div className="bg-[#1e1e1e] p-8 rounded-2xl border border-white/10 text-center shadow-lg">
          <h2 className="text-xl font-semibold text-orange-400 mb-2">
            Projects Not Found
          </h2>
          <p className="text-gray-400">
            The requested projects does not exist or was removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* projects */}
      <section className="flex flex-col p-4">
        <h1 className="w-fit font-medium pb-1 m-1 text-2xl font-[arial] inline-block">My Works</h1>
        {
          loading ?
            <div className="min-h-[50vh] w-full flex flex-col items-center justify-center">
              < div className="w-10 h-10 rounded-full border-4 border-cyan-400/30 border-t-cyan-400 animate-spin mb-4" />
              <p className="text-cyan-300 text-lg tracking-wide">
                Loading project…
              </p>
            </div>
            : 
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
              {myProject.map((project) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                    delay: 0.1
                  }}
                  whileTap={{ scale: 0.96 }}
                  whileHover={{
                    scale: 1.06,
                    y: -6,
                    boxShadow: "0px 10px 40px rgba(56, 189, 248, 0.45)",
                    transition: { type: "spring", stiffness: 250, damping: 15 }
                  }}
                  className="relative overflow-hidden bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/90 backdrop-blur-md p-3 flex flex-col items-center rounded-2xl border border-cyan-400/30 shadow-[0_8px_30px_rgba(15,23,42,0.6)]"
                  key={project._id}
                >
                  {/* Glow layer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />

                  <img
                    src={project.project_img}
                    alt={project.project_name}
                    className="relative z-10 rounded-xl w-full object-cover"
                  />

                  <span className="relative z-10 mt-2 text-lg font-semibold text-slate-100 text-center">
                    {project.project_name.length > 30
                      ? project.project_name.slice(0, 30) + "..."
                      : project.project_name}
                  </span>

                  <Link
                    href={`/project-info/${project.project_name}?id=${project._id}`}
                    className="relative z-10 text-sm text-cyan-400 hover:text-cyan-300 transition"
                  >
                    read more →
                  </Link>

                  <Link
                    href={project.website_url}
                    className="relative z-10 mt-3 px-5 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-medium hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-md hover:shadow-cyan-400/40"
                  >
                    Live Link
                  </Link>
                </motion.div>
              ))
              }
            </motion.div>}
      </section >
    </>
  )
}