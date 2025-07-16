'use client';
import { useState } from "react";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md"
import { FaTimes } from "react-icons/fa"

export default function Header() {

  const [manubar, setManubar] = useState(false);
  const handleManu = () => {
    setManubar(pre => !pre);
  }

  const linkstyle = "py-1 relative after:absolute after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:right-0 after:bg-[#a75f35] after:transition-all after:duration-300 after:ease-in-out";

  return (
    <header className="flex justify-center mt-2 sticky top-2 z-50">
      <nav
        className="w-[95vw] md:w-[80vw] bg-[#1f1e1e7a] backdrop-blur-lg p-2 px-5 flex justify-between items-center border-[1.5px] rounded-lg sm:rounded-2xl border-[#fff564] font-semibold relative">
        <Link href='/'><h1 className="text-2xl font-[Arial] py-1">Sourav.coders</h1></Link>

        {/* //hamburger */}
        {!manubar ?
          <MdOutlineMenu
            onClick={handleManu}
            className="text-4xl max-[600px]:block cursor-pointer bg-[#303030] rounded-sm border p-1 min-[600px]:hidden" /> :
          <FaTimes
            onClick={handleManu}
            className="text-4xl max-[600px]:block cursor-pointer bg-[#303030] rounded-sm border p-1 min-[600px]:hidden" />
        }

        {/* all the links */}
        {manubar ?
          <ul className={`${manubar ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"} flex flex-col gap-5 text-lg min-[600px]:hidden absolute right-0 top-14 bg-[#000000e1] p-6 rounded-lg transition-all duration-300 ease-in-out`}
          >
            <li className={linkstyle}>
              <Link href='/'>Home</Link>
            </li>
            <li className={linkstyle}>
              <Link href='/about'>About</Link>
            </li>
            <li className={linkstyle}>
              <Link href='/projects'>Projects</Link>
            </li>
            <li className={linkstyle}>
              <Link href='/resume'>Resume</Link>
            </li>
          </ul> :
          null
        }
        <ul className="flex gap-5 text-lg max-[600px]:hidden">
          <li className={linkstyle}>
            <Link href='/'>Home</Link>
          </li>
          <li className={linkstyle}>
            <Link href='/about'>About</Link>
          </li>
          <li className={linkstyle}>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className={linkstyle}>
            <Link href='/resume'>Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}