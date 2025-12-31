"use client"
import { motion } from "motion/react";
import Image from "next/image";
import MyPhoto from "../../public/images/myPhoto.jpg";
import Typing from "@/components/Typing/Typing";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import ProjectInfoCard from "@/components/ProjectInfo/ProjectInfoCard";
import Link from "next/link";
import HiremeForm from "@/components/HiremeForm/HiremeForm";

export default function Home() {

  return (
    <div className="w-full flex flex-col items-center">
      {/* hero section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ boxShadow: "0 0 15px rgba(125, 235, 105, 0.6)" }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.5 }}
        className="bg-[#474d4264] backdrop-blur-md w-[95vw] md:w-[80vw] m-3 p-6 flex justify-between rounded-2xl shadow-md border border-green-400 max-md:items-center max-md:flex-col-reverse gap-10"
        id="intro"
      >
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
          <h1 className="text-4xl xl:text-5xl font-extrabold text-yellow-300 tracking-wide font-mono">
            Sourav Kumar Bera
          </h1>

          <p className="text-2xl text-orange-300 font-semibold">
            <Typing />
          </p>

          <p className="text-base sm:text-lg text-white italic max-w-[400px]">
            Weaving together Front-end magic and Backend wizardry to create captivating web experiences.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="/MyResume.pdf"
              target="_blank"
              className="border px-4 py-2 rounded-xl flex items-center justify-center transition-all hover:bg-[#fff032] hover:text-black text-[18px]"
            >
              Resume
            </a>

            <a
              href="https://www.linkedin.com/in/sourav-kumar-bera-93254b325"
              target="_blank"
              className="border px-4 py-2 rounded-xl flex items-center justify-center transition-all hover:bg-[#fff032] hover:text-black text-[18px]"
            >
              <BsLinkedin />
            </a>

            <a
              href="https://github.com/Sourav-student"
              target="_blank"
              className="border px-4 py-2 rounded-xl flex items-center justify-center transition-all hover:bg-[#fff032] hover:text-black text-[18px]"
            >
              <BsGithub />
            </a>
          </div>

          <Link
            href="/about"
            className="w-fit border px-4 py-2 rounded-xl flex items-center justify-center transition-all hover:bg-[#fff032] hover:text-black text-[18px]"
          >
            Read more
          </Link>
        </div>

        {/* Right Photo */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.4 }}
          className="w-[310px] h-[310px] sm:w-[360px] sm:h-[360px] rounded-full flex justify-center items-center border"
        >
          <Image
            src={MyPhoto}
            alt="sourav kumar bera photo"
            className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full object-cover hover:scale-105 transition-transform"
          />
        </motion.div>
      </motion.section>

      {/* experience section */}
      <motion.section
        transition={{ duration: 0.6 }}
        className="w-full sm:w-[90%] my-4 mx-16" id="experience">
        <h1 className="m-1 text-2xl font-[arial] inline-block">Experience</h1>
        <div
          className="px-4 py-6 grid grid-cols-1 min-[450px]:grid-cols-2 xl:grid-cols-3 gap-4">
          <ProjectInfoCard projectName="AEIE-Department-Website" image="/images/projectsImages/aeie_dept.png" title="Making a website for AEIE department of Haldia Institute of Technology" link="https://hit-aeie.netlify.app/" key={1} />
        </div>
      </motion.section>

      {/* feature projects */}
      <motion.section
        transition={{ duration: 0.6 }}
        className="w-full sm:w-[90%] my-4 mx-16"
        id="projects">
        <h1 className="m-1 text-2xl font-[arial] inline-block">Feature Projects</h1>
        <div
          className="px-4 py-6 grid grid-cols-1 min-[450px]:grid-cols-2 xl:grid-cols-3 gap-4">
          <ProjectInfoCard projectName="Hitian-inside-website" image="/images/projectsImages/hitianInside.png" title="Hitian inside - It is a full stack project made using react" link="https://hitianinsideofficial-psi.vercel.app/" />
          <ProjectInfoCard projectName="TodoList-website" image="/images/projectsImages/todoList.png" title="TodoList - It is a full stack project made using react, tailwind " link="https://todo-list-murex-six.vercel.app/" />
          <ProjectInfoCard projectName="Rock-Paper-Scissors-game" image="/images/projectsImages/RPSGame.png" title="Rock paper scissors - It is a javaScript logic project" link="https://sourav-rock-paper-scissors.vercel.app/" />
        </div>

        <div className="w-full flex justify-center">
          <Link href='/projects' className="mt-2 px-4 py-1 text-black rounded-lg transition-all ease-in-out bg-amber-300 hover:bg-amber-600 border hover:text-white cursor-pointer hover:border-white">See more</Link></div>
      </motion.section>

      {/* hire me section */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        id="hire" className="w-full px-4 py-8">
        <motion.div
          whileHover={{ boxShadow: "0 0 10px #7deb69" }}
          className="max-w-4xl mx-auto bg-[#393b372f] backdrop-blur-md rounded-2xl shadow-lg transition-all duration-300 border border-green-400 p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-4 text-white">Want to hire me?</h1>
          <p className="text-base sm:text-lg text-center mb-8 text-gray-200">
            I’m available for freelance work. If you have a project in mind, feel free to reach out!
          </p>
          <HiremeForm />
        </motion.div>
      </motion.section>
    </div>
  );
}