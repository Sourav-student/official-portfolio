"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [manubar, setManubar] = useState(false);
  const [topZero, setTopZero] = useState(false);
  const toggleMenu = () => setManubar((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setTopZero(window.scrollY <= 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const linkStyle =
    "relative text-white hover:text-yellow-300 transition-colors duration-300 after:absolute after:bottom-[-2px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300";

  return (
    <header className="flex justify-center mt-2 sticky top-2 z-50">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`transition-all duration-500 ease-in-out 
        px-6 py-3 flex justify-between items-center rounded-xl backdrop-blur-md
        ${topZero
            ? "w-full bg-transparent border-none shadow-none"
            : "w-[95vw] md:w-[80vw] bg-[#1f1e1e7a] border border-yellow-300 shadow-[0_8px_24px_rgba(234,179,8,0.25)] hover:shadow-[0_0_30px_4px_rgba(255,255,0,0.5)]"
          }`}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <Link href="/">
            <h1 className="text-2xl font-bold text-yellow-200 font-mono tracking-wide">
              Sourav<span className="text-white">.coders</span>
            </h1>
          </Link>
        </motion.div>

        {/* Mobile menu icon */}
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="min-[600px]:hidden z-50"
        >
          {manubar ? (
            <FaTimes
              onClick={toggleMenu}
              className="text-3xl cursor-pointer text-yellow-200 hover:text-white transition"
            />
          ) : (
            <MdOutlineMenu
              onClick={toggleMenu}
              className="text-3xl cursor-pointer text-yellow-200 hover:text-white transition"
            />
          )}
        </motion.div>

        {/* Desktop nav links */}
        <ul className="gap-8 hidden min-[600px]:flex text-lg font-medium">
          <li className={linkStyle}>
            <Link href="/">Home</Link>
          </li>
          <li className={linkStyle}>
            <Link href="/about">About</Link>
          </li>
          <li className={linkStyle}>
            <Link href="/works">Works</Link>
          </li>
          <li className={linkStyle}>
            <Link href="/resume">Resume</Link>
          </li>
        </ul>

        {/* Mobile nav menu with animation */}
        <AnimatePresence>
          {manubar && (
            <motion.ul
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full absolute top-16 right-0 bg-[#1f1e1ebe] border backdrop-blur-md rounded-lg p-6 flex flex-col justify-center items-center gap-5 text-lg text-white min-[600px]:hidden shadow-lg z-40"
            >
              <li className={linkStyle}>
                <Link href="/" onClick={() => setManubar(false)}>Home</Link>
              </li>
              <li className={linkStyle}>
                <Link href="/about" onClick={() => setManubar(false)}>About</Link>
              </li>
              <li className={linkStyle}>
                <Link href="/works" onClick={() => setManubar(false)}>Works</Link>
              </li>
              <li className={linkStyle}>
                <Link href="/resume" onClick={() => setManubar(false)}>Resume</Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
