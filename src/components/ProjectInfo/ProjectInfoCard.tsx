"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

type dataType = {
  projectName: string
  title: string,
  image: string,
  link: string,
}

export default function ProjectInfoCard({ projectName, title, image, link }: dataType) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.1
        }}
        whileTap={{ scale: 0.97 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 4px 20px rgba(125, 235, 105, 0.5)",
          transition: { type: "spring", stiffness: 200, damping: 12 }
        }}
        className="bg-[#4343364e] backdrop-blur-xs p-2 flex flex-col items-center rounded-xl shadow-lg border border-[#57954d]"
        key={Math.random() * projectName.length}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 14 }}
        >
          <Image src={image} alt={title} width={450} height={450} className="rounded-xl" />
          {title.length > 30 ? title.slice(0, 30) + "..." : title}{" "}
          <span className="text-blue-400">read more</span>
        </motion.div>

        <Link
          href={link}
          className="mt-2 px-4 py-1 text-black rounded-lg transition-all ease-in-out bg-amber-300 hover:bg-amber-600 hover:text-white"
        >
          Live Link
        </Link>
      </motion.div>
    </>
  )
}