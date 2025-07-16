"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const words = [
  "Full Stack Web Developer",
  "Backend Developer",
  "Frontend Developer",
  "Tech Enthusiast",
  "Open Source Contributor",
  "Problem Solver",
];

const Typing: React.FC = () => {
  const el = useRef<HTMLSpanElement | null>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings: words,
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
        cursorChar: "|",
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return <span ref={el} style={{ whiteSpace: "pre" }} />;
};

export default Typing;