import projects from "@/datasets/projects";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  return (
    <div className="w-full flex flex-col justify-center items-center my-10">
      {
        projects.filter((item) => item.project_name === slug).map((project, index) => (
          <div className="bg-[#1c1c1c] w-[90%] sm:w-[80%] p-5 rounded-2xl shadow-lg border-2 border-yellow-300 flex items-center  flex-col hover:border-orange-300 transition-all duration-200 hover:shadow-md hover:shadow-[#9aff02]" key={index}>
            <h1 className="text-lg font-[arial] mt-3 p-1">
              TITLE - <span className="text-sm sm:text-xl uppercase text-red-300">{project.title}</span>
            </h1>
            <Image
              src={project.Img1}
              alt={project.title}
              width={800} height={600}
              className="rounded-xl shadow-lg my-5 border transition-transform hover:scale-105 "
            />
            <h2
              className="text-sm sm:text-xl"> PROJECT NAME - <span className="text-yellow-300">{project.project_name.replaceAll('-', ' ')}</span>
            </h2>
            <h2 className="my-2 text-orange-400">TECH STACK USE</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {
                project.tech_stack.map((skills, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-[#474d4264] backdrop-blur-lg rounded-lg shadow-md border  border-green-400 hover:scale-105 transition-transform duration-300 hover:shadow-[#5eea37]">
                    <img src={skills.icon} alt={`${skills.skill_name} icon`} className="w-16 h-16 mb-2" />
                    <h3 className="text-xs sm:text-lg font-semibold text-white">{skills.skill_name}</h3>
                  </div>
                ))
              }
            </div>
            <Link
              href={project.link}
              className="mt-6 px-4 py-2 rounded-lg transition-all ease-in-out text-xs sm:text-lg border cursor-pointer bg-[#ffff00] hover:bg-[#00ff88] text-[#000] hover:border-white"
            >vist once</Link>
          </div>
        ))
      }
    </div>
  )
}