"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

type ProjectType = {
  _id: string,
  about_project: string,
  project_img: string,
  project_name: string,
  skills_use: string,
  website_url: string
};

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [project, setProject] = useState<ProjectType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const getProject = async () => {
      try {
        // setLoading(true);
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/${id}`
        );
        setProject(res.data.project);
        console.log(res.data.project);
      } catch (error) {
        console.error("Error loading project", error);
      } finally {
        setLoading(false);
      }
    };

    getProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[50vh] w-full flex flex-col items-center justify-center bg-[#121212]">
        <div className="w-10 h-10 rounded-full border-4 border-cyan-400/30 border-t-cyan-400 animate-spin mb-4" />
        <p className="text-cyan-300 text-lg tracking-wide">
          Loading project…
        </p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-[50vh] w-full flex items-center justify-center bg-[#121212]">
        <div className="bg-[#1e1e1e] p-8 rounded-2xl border border-white/10 text-center shadow-lg">
          <h2 className="text-xl font-semibold text-orange-400 mb-2">
            Project Not Found
          </h2>
          <p className="text-gray-400">
            The requested project does not exist or was removed.
          </p>
        </div>
      </div>
    );
  }


  return (
    <div className="w-full flex justify-center px-3 sm:px-6 my-10">
      <div
        className="
      w-full sm:w-[85%] lg:w-[75%]
      bg-gradient-to-br from-[#1b1b1b] via-[#232323] to-[#2a2a2a]
      p-6 sm:p-8
      rounded-3xl
      border border-white/5
      shadow-[0_20px_60px_rgba(0,0,0,0.6)]
    "
      >
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-cyan-300 mb-5 tracking-wide">
          {project.project_name}
        </h1>

        {/* Image */}
        <div className="relative w-full mb-8 overflow-hidden rounded-2xl group">
          <img
            src={project.project_img}
            alt={project.project_name}
            className="
          w-full h-[240px] sm:h-[340px] md:h-[440px]
          object-cover
          transition-transform duration-700
          group-hover:scale-[1.04]
        "
          />
          {/* subtle overlay like hero sections */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Tech Stack */}
        <h2 className="text-lg sm:text-xl font-medium text-amber-400 mb-4">
          Tech Stack Used
        </h2>

        <div className="flex flex-wrap gap-3">
          {project.skills_use.split(", ").map((skill, index) => (
            <span
              key={index}
              className="
            px-4 py-1.5
            rounded-full
            text-sm sm:text-base
            bg-white/5
            text-gray-200
            border border-white/10
            hover:border-cyan-400/40
            hover:text-cyan-300
            transition-all duration-300
          "
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={project.website_url}
          target="_blank"
          className="
        inline-flex items-center gap-2
        mt-8 px-7 py-2.5
        rounded-full
        bg-amber-400 text-black
        font-semibold
        hover:bg-amber-300
        transition-all duration-300
        shadow-md hover:shadow-amber-400/30
      "
        >
          Visit Live Project →
        </a>
      </div>
    </div>
  );
}