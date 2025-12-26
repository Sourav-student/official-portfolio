'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from "motion/react";
import axios from 'axios';
import SkeletonCard from '@/components/Skeleton/SkillsSkeleton';
import skills from '@/datasets/skills';

type SkillType = {
  _id: string,
  skill_name: string,
  skill_img: string,
  skill_info: string
}

export default function About() {
  const [mySkills, setMySkills] = useState<SkillType[]>([]);
  const [myskills] = useState(skills);
  const [loading, setLoading] = useState(false);

  const getAllSkills = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/skill/all`);
      // console.log(res.data.skills);
      setMySkills(res.data.skills);
    } catch (error) {
      console.error("Error : not loading...");
    }finally{
       setLoading(false);
    }
  }

  useEffect(() => {
    getAllSkills();
  }, [])

  return (
    <>
      {/* about me */}
      <section className="flex flex-col px-4 py-8">
        <div className="w-full max-w-4xl mx-auto p-6 sm:p-10 bg-[#1a1a1a]/60 border border-[#00ff88] rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl">

          <h1 className="w-fit mb-6 text-3xl font-[arial] text-white relative inline-block after:absolute after:bottom-0 after:left-0 after:w-[60%] after:h-[3px] after:bg-[#00ff88]">
            About Me
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
            I am <span className="text-[#00ff88] font-semibold">Sourav Kumar Bera</span>, a CSE student at Haldia Institute of Technology, passionate about building full-stack web applications that are clean, fast, and user-friendly.
          </p>

          <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 space-y-2">
            <li>
              Proficient in <span className="font-medium">React.js, Next.js, Tailwind CSS, Node.js, and MongoDB</span>.
            </li>
            <li>
              Built projects like a <span className="text-yellow-300 font-medium">Full-Stack TodoList</span> app and an <span className="text-yellow-300 font-medium">E-Media Club Website</span> for managing student activities.
            </li>
            <li>
              Focused on responsive design, efficient backend logic, and real-world usability.
            </li>
            <li>
              Always learning, contributing to open source, and solving challenges on coding platforms.
            </li>
            <li>
              Open to freelance, internships, and collaborative opportunities.
            </li>
          </ul>

        </div>
      </section>

      {/* skills */}
      <section className="flex flex-col px-4 py-8">

        <h1 className="w-fit mb-3 m-1 text-2xl font-[arial] inline-block relative after:absolute after:bottom-0 after:left-0 after:w-[60%] after:h-[3px] after:bg-[#00ff88]">Skills & Technologies</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {
            mySkills.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.90 }}
                key={skill._id}
                className="flex flex-col items-center p-4 bg-[#474d4264] backdrop-blur-lg rounded-lg shadow-md border  border-green-400 hover:shadow-[#5eea37]">
                <Image src={skill.skill_img} alt={`${skill.skill_name} icon`}
                  width={120} height={120}
                  className="mb-2" />
                <h3 className="text-lg font-semibold text-white">{skill.skill_name}</h3>
                {skill.skill_info && (
                  <p className="text-sm text-blue-400 mt-1 cursor-pointer">
                    {skill.skill_info}
                  </p>
                )}
              </motion.div>
            ))
          }

          {
            mySkills.length == 0 && myskills.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.90 }}
                key={index}
                className="flex flex-col items-center p-4 bg-[#474d4264] backdrop-blur-lg rounded-lg shadow-md border  border-green-400 hover:shadow-[#5eea37]">
                <Image src={skill.icon} alt={`${skill.SkillName} icon`}
                  width={120} height={120}
                  className="mb-2" />
                <h3 className="text-lg font-semibold text-white">{skill.SkillName}</h3>
                {skill.referenceName && (
                  <p className="text-sm text-blue-400 mt-1 cursor-pointer">
                    {skill.referenceName}
                  </p>
                )}
              </motion.div>
            ))
          }
        </div>
        {
          loading && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 w-full">
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        }
      </section>

      {/* Education */}
      <section className="flex flex-col px-4 py-8">

        <h1 className="w-fit mb-3 m-1 text-2xl font-[arial] inline-block relative after:absolute after:bottom-0 after:left-0 after:w-[60%] after:h-[3px] after:bg-[#00ff88]">Education</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.90 }}
            className="flex flex-wrap justify-center items-center p-2 bg-[#474d4264] backdrop-blur-lg rounded-lg shadow-md border border-green-400 hover:scale-102 transition-transform duration-300 hover:shadow-[#5eea37]">
            <Image src="/images/hit.png" alt="Haldia Institute of Technology"
              width={350} height={350} className="mb-2 rounded-lg shadow-lg border border-yellow-200" />
            <div>
              <h3 className="text-sm font-semibold text-white">Haldia Institute of Technology (2024-2028)</h3>
              <p className="text-xs text-gray-400 mt-1">B.Tech in Computer Science & Engineering</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.90 }}
            className="flex flex-wrap justify-center items-center p-2 bg-[#474d4264] backdrop-blur-lg rounded-lg shadow-md border border-green-400 hover:scale-102 transition-transform duration-300 hover:shadow-[#5eea37]">
            <Image src="/images/school.png" alt="+2 High School Khandamouda"
              width={350} height={350} className="mb-2 rounded-lg shadow-lg border border-yellow-200" />
            <div>
              <h3 className="text-sm font-semibold text-white">+2 High School Khandamouda(2017-2024)</h3>
              <p className="text-xs text-gray-400 mt-1">ISc in PCM(92.20%)</p>
              <p className="text-xs text-gray-400 mt-1">Class 10th(89.20%)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates  */}
      <section className="flex flex-col px-4 py-8">

        <h1 className="w-fit mb-3 m-1 text-2xl font-[arial] inline-block relative after:absolute after:bottom-0 after:left-0 after:w-[60%] after:h-[3px] after:bg-[#00ff88]">Certificates</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.90 }}
            className="flex flex-wrap sm:gap-5 justify-center items-center p-4 bg-[#474d4264] backdrop-blur-lg rounded-lg shadow-md border border-green-400 hover:scale-102 transition-transform duration-300 hover:shadow-[#5eea37]">
            <Image src="/images/Aadish.png" alt="Web development learning experience"
              width={350} height={350} className="mb-2 rounded-lg shadow-lg border border-yellow-200" />
            <div>
              <h3 className="text-sm font-semibold text-white">Aadi Foundation (Jan 2025 - Fab 2025)</h3>
              <p className="text-xs text-gray-400 mt-1">Web Development</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.90 }}
            className="flex flex-wrap sm:gap-5 justify-center items-center p-4 bg-[#474d4264] backdrop-blur-lg rounded-lg shadow-md border border-green-400 hover:scale-102 transition-transform duration-300 hover:shadow-[#5eea37]">
            <Image src="/images/NullClass.png" alt="Web development training"
              width={350} height={350} className="mb-2 rounded-lg shadow-lg border border-yellow-200" />
            <div>
              <h3 className="text-sm font-semibold text-white">NullClass (May 2025-June 2025)</h3>
              <p className="text-xs text-gray-400 mt-1">Web Development</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.90 }}
            className="flex flex-wrap sm:gap-5 justify-center items-center p-4 bg-[#474d4264] backdrop-blur-lg rounded-lg shadow-md border border-green-400 hover:scale-102 transition-transform duration-300 hover:shadow-[#5eea37]">
            <Image src="/images/udemy.png" alt="Communication skills"
              width={350} height={350} className="mb-2 rounded-lg shadow-lg border border-yellow-200" />
            <div>
              <h3 className="text-sm font-semibold text-white">Udemy (March 2025-May 2025)</h3>
              <p className="text-xs text-gray-400 mt-1">Communication Skill</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
};