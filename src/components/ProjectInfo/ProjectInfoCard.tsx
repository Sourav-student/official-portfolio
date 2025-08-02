"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

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
      <motion.div
        whileHover={{scale:1.03, boxShadow: "0px 0px 10px #7deb69"}}
        className="bg-[#4343364e] backdrop-blur-xs p-2 flex flex-col items-center rounded-xl shadow-lg border border-[#57954d]" key={key}>
        <Link href={`/project-info/${projectName}`}>
          <Image src={image} alt={title} width={450} height={450} className="rounded-xl" />
          {title.length > 30 ? title.slice(0, 30) + "..." : title} <span className="text-blue-400">read more</span>
        </Link>

        <Link
          href={link}
          className="mt-2 px-4 py-1 text-black rounded-lg transition-all ease-in-out bg-amber-300 hover:bg-amber-600 hover:text-white">Live Link
        </Link>
      </motion.div >
    </>
  )
}