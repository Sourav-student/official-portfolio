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
      <section
        className="bg-[#474d4264] backdrop-blur-md w-[95vw] md:w-[80vw] m-3 p-3 flex justify-center rounded-2xl shadow-lg transition-all duration-300 border border-green-400 max-md:justify-between max-[620px]:flex-col-reverse max-[620px]:items-center hover:shadow-md hover:shadow-green-300"
        id="intro">
        <div
          className="w-auto min-[620px]:w-[300px] md:w-[500px] flex flex-col justify-center gap-4"
          id="aboutme">
          <h1 className="max-[350px]:text-2xl text-3xl md:text-4xl font-mono text-yellow-300">Sourav Kumar Bera</h1>
          <p className="text-2xl text-orange-300 font-[roman]">
            <Typing />
          </p>
          <p className="p-1 w-[300px] font-[itelic]">Weaving together Front-end magic and Backend wizardry to create captivating web experiences.</p>
          <div
            className="flex gap-4" id="btns">
            <a href="/MyResume.pdf" target="_blank"
              className="bg-amber-400 text-stone-900 px-4 py-1 rounded-md text-lg font-normal border hover:bg-amber-600 hover:text-white hover:border-white transition-all duration-200 cursor-pointer shadow-xs">
              Resume
            </a>

            <a href="https://www.linkedin.com/in/sourav-kumar-bera-93254b325" target="_blank"
              className="bg-amber-400 text-stone-900 p-2 text-xl rounded-md font-normal border hover:bg-amber-600 hover:text-white hover:border-white transition-all duration-200 cursor-pointer shadow-xs"
            ><BsLinkedin />
            </a>

            <a href="https://github.com/Sourav-student" target="_blank"
              className="bg-amber-400 text-stone-900 p-2 text-xl rounded-md font-normal border hover:bg-amber-600 hover:text-white hover:border-white transition-all duration-200 cursor-pointer shadow-xs"
            ><BsGithub />
            </a>
          </div>
          <Link href="/about"
            className="w-fit bg-amber-400 text-stone-900 p-2 text-sm rounded-md font-normal border hover:bg-amber-600 hover:text-white hover:border-white transition-all duration-200 cursor-pointer shadow-xs">Read more</Link>
        </div>

        <div
          className="w-[310px] h-[310px] min-[500px]:w-[360px] min-[560px]:h-[355px] my-3 rounded-full flex justify-center items-center bg-gradiate-effect-1 shadow-lg"
          id="myphoto">
          <Image
            src={MyPhoto}
            alt="sourav kumar bera photo"
            className="w-[300px] h-[300px] min-[500px]:w-[350px] min-[500px]:h-[350px] rounded-full hover:scale-102 transition-transform shadow-lg"
          />
        </div>
      </section>

      {/* experience section */}
      <section className="w-full sm:w-[90%] my-4 mx-16" id="experience">
        <h1 className="m-1 text-2xl font-[arial] inline-block relative after:absolute after:bottom-0 after:left-0 after:w-[60%] after:h-[3px] after:bg-[#00ff88]">Experience</h1>
        <div className="px-4 py-6 grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-4">
          <ProjectInfoCard projectName="AEIE-Department-Website" image="/images/projectsImages/aeie_dept.png" title="Making a website for AEIE department of Haldia Institute of Technology" link="https://hit-aeie.netlify.app/" key={1} />
        </div>
      </section>

      {/* feature projects */}
      <section
        className="w-full sm:w-[90%] my-4 mx-16"
        id="projects">
        <h1 className="m-1 text-2xl font-[arial] inline-block relative after:absolute after:bottom-0 after:left-0 after:w-[60%] after:h-[3px] after:bg-[#00ff88]">Feature Projects</h1>
        <div className="px-4 py-6 grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-4">
          <ProjectInfoCard projectName="Hitian-inside-website" image="/images/projectsImages/hitianInside.png" title="Hitian inside - It is a full stack project made using react" link="https://hitianinsideofficial-psi.vercel.app/" key={1} />
          <ProjectInfoCard projectName="TodoList-website" image="/images/projectsImages/todoList.png" title="TodoList - It is a full stack project made using react, tailwind " link="https://todo-list-murex-six.vercel.app/" key={2} />
          <ProjectInfoCard projectName="Rock-Paper-Scissors-game" image="/images/projectsImages/RPSGame.png" title="Rock paper scissors - It is a javaScript logic project" link="https://sourav-rock-paper-scissors.vercel.app/" key={3} />
        </div>

        <div className="w-full flex justify-center">
          <Link href='/projects' className="mt-2 px-4 py-1 text-black rounded-lg transition-all ease-in-out bg-amber-300 hover:bg-amber-600 border hover:text-white cursor-pointer hover:border-white">See more</Link></div>
      </section>

      {/* hire me section */}
      <section id="hire" className="w-full px-4 py-8">
        <div className="max-w-4xl mx-auto bg-[#474d4264] backdrop-blur-md rounded-2xl shadow-lg transition-all duration-300 border border-green-400 p-6 sm:p-10 hover:shadow-md hover:shadow-green-300">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-4 text-white">Want to hire me?</h1>
          <p className="text-base sm:text-lg text-center mb-8 text-gray-200">
            I’m available for freelance work. If you have a project in mind, feel free to reach out!
          </p>
          <HiremeForm />
        </div>
      </section>
    </div>
  );
}