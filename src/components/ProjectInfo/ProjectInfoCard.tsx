import Image from "next/image"
import Link from "next/link"

type dataType = {
  projectName: string
  title: string,
  image: string,
  link: string,
  key: number
}

export default function ProjectInfoCard({ projectName, title, image, link, key }: dataType) {
  return (
    <>
      <div
        className="bg-[#4343364e] backdrop-blur-xs p-2 flex flex-col items-center rounded-xl shadow-lg border border-[#386131] transition-all duration-200 hover:scale-102 hover:shadow-md hover:shadow-green-500" key={key}>
        <Link href={`/project-info/${projectName}`}>
          <Image src={image} alt={title} width={450} height={450} className="rounded-xl" />
          {title.length > 30 ? title.slice(0, 30) + "..." : title} <span className="text-blue-400">read more</span>
        </Link>

        <Link
          href={link}
          className="mt-2 px-4 py-1 text-black rounded-lg transition-all ease-in-out bg-amber-300 hover:bg-amber-600 hover:text-white">Live Link
        </Link>
      </div >
    </>
  )
}