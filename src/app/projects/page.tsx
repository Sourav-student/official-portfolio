import ProjectInfoCard from "@/components/ProjectInfo/ProjectInfoCard";
import projects from "@/datasets/projects";

export default function Projects() {
  return (
    <>
      {/* projects */}
      <section className="flex flex-col px-4 py-8">

        <h1 className="w-fit mb-3 pb-1 m-1 text-2xl font-[arial] inline-block relative after:absolute after:bottom-0 after:left-0 after:w-[60%] after:h-[3px] after:bg-[#00ff88]">My Projects</h1>

        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {
            projects.map((project, index) => (
              <ProjectInfoCard
                projectName={project.project_name}
                title={project.title}
                image={project.Img1}
                link={project.link}
                key={index}
              />
            ))
          }
        </div>
      </section>
    </>
  )
}