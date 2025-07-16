'use client';
import { useState } from 'react';
import skills  from '@/datasets/skills';
import Image from 'next/image';

export default function About() {
  const [mySkills] = useState(skills);

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
              <div key={index} className="flex flex-col items-center p-4 bg-[#474d4264] backdrop-blur-lg rounded-lg shadow-md border  border-green-400 hover:scale-105 transition-transform duration-300 hover:shadow-[#5eea37]">
                <Image src={skill.icon} alt={`${skill.SkillName} icon`}
                  width={120} height={120}
                  className="mb-2" />
                <h3 className="text-lg font-semibold text-white">{skill.SkillName}</h3>
                {skill.reference && (
                  <a href={skill.reference} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 mt-1">
                    {skill.referenceName}
                  </a>
                )}
              </div>
            ))
          }
        </div>
      </section>

      {/* Education */}
      <section className="flex flex-col px-4 py-8">

        <h1 className="w-fit mb-3 m-1 text-2xl font-[arial] inline-block relative after:absolute after:bottom-0 after:left-0 after:w-[60%] after:h-[3px] after:bg-[#00ff88]">Education</h1>

        <div className="grid grid-cols-2 gap-5 sm:gap-10 mt-4">
          <div className="flex flex-wrap sm:gap-5 justify-center items-center p-4 bg-[#474d4264] backdrop-blur-lg rounded-lg shadow-md border border-green-400 hover:scale-102 transition-transform duration-300 hover:shadow-[#5eea37]">
            <Image src="/images/hit.png" alt="Haldia Institute of Technology"
              width={220} height={220} className="mb-2" />
            <div>
              <h3 className="text-sm font-semibold text-white">Haldia Institute of Technology (2024-2028)</h3>
              <p className="text-xs text-gray-400 mt-1">B.Tech in Computer Science & Engineering</p>
            </div>
          </div>
          <div className="flex flex-wrap sm:gap-5 justify-center items-center p-4 bg-[#474d4264] backdrop-blur-lg rounded-lg shadow-md border border-green-400 hover:scale-102 transition-transform duration-300 hover:shadow-[#5eea37]">
            <Image src="/images/school.png" alt="+2 High School Khandamouda"
              width={220} height={220} className="mb-2" />
            <div>
              <h3 className="text-sm font-semibold text-white">+2 High School Khandamouda(2017-2024)</h3>
              <p className="text-xs text-gray-400 mt-1">ISc in PCM(92.20%)</p>
              <p className="text-xs text-gray-400 mt-1">Class 10th(89.20%)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates  */}
      <section className="flex flex-col px-4 py-8">

        <h1 className="w-fit mb-3 m-1 text-2xl font-[arial] inline-block relative after:absolute after:bottom-0 after:left-0 after:w-[60%] after:h-[3px] after:bg-[#00ff88]">Certificates</h1>

        <div className="grid grid-cols-2 gap-5 sm:gap-10 mt-4">
          <div className="flex flex-wrap sm:gap-5 justify-center items-center p-4 bg-[#474d4264] backdrop-blur-lg rounded-lg shadow-md border border-green-400 hover:scale-102 transition-transform duration-300 hover:shadow-[#5eea37]">
            <Image src="/images/Aadish.png" alt="Web development learning experience"
              width={220} height={220} className="mb-2" />
            <div>
              <h3 className="text-sm font-semibold text-white">Aadi Foundation (Jan 2025 - Fab 2025)</h3>
              <p className="text-xs text-gray-400 mt-1">Web Development</p>
            </div>
          </div>
          <div className="flex flex-wrap sm:gap-5 justify-center items-center p-4 bg-[#474d4264] backdrop-blur-lg rounded-lg shadow-md border border-green-400 hover:scale-102 transition-transform duration-300 hover:shadow-[#5eea37]">
            <Image src="/images/NullClass.png" alt="Web development training"
              width={220} height={220} className="mb-2" />
            <div>
              <h3 className="text-sm font-semibold text-white">NullClass (May 2025-June 2025)</h3>
              <p className="text-xs text-gray-400 mt-1">Web Development</p>
            </div>
          </div>
          <div className="flex flex-wrap sm:gap-5 justify-center items-center p-4 bg-[#474d4264] backdrop-blur-lg rounded-lg shadow-md border border-green-400 hover:scale-102 transition-transform duration-300 hover:shadow-[#5eea37]">
            <Image src="/images/udemy.png" alt="Communication skills"
              width={220} height={220} className="mb-2" />
            <div>
              <h3 className="text-sm font-semibold text-white">Udemy (March 2025-May 2025)</h3>
              <p className="text-xs text-gray-400 mt-1">Communication Skill</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};