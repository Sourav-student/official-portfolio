"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/resume", label: "Resume" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <motion.nav
        className="nav-shell"
        aria-label="Main navigation"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <motion.div whileHover={{ scale: 1.035 }} whileTap={{ scale: 0.97 }}>
          <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">S</span>
          <span>Sourav<span className="brand-dot">.</span></span>
          </Link>
        </motion.div>

        <div className="desktop-nav">
          {links.map(({ href, label }) => (
            <Link
              href={href}
              key={href}
              className={`nav-link${pathname === href ? " nav-link-active" : ""}`}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>

        <a href="mailto:souravbera620595@gmail.com" className="nav-contact">
          Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {links.map(({ href, label }) => (
              <Link
                href={href}
                key={href}
                className={`nav-link${pathname === href ? " nav-link-active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a href="mailto:souravbera620595@gmail.com" onClick={() => setMenuOpen(false)}>
              Get in touch <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
