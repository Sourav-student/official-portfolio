import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-content">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">S</span>
            <span>Sourav<span className="brand-dot">.</span></span>
          </Link>
          <p className="footer-note">Made with care, curiosity, and a lot of chai.</p>
        </div>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/works">Works</Link>
          <Link href="/resume">Resume</Link>
          <a href="mailto:souravbera620595@gmail.com">Contact</a>
        </div>
        <div className="footer-socials">
          <a
            href="https://github.com/Sourav-student"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          ><Github size={18} aria-hidden="true" /></a>
          <a
            href="https://www.linkedin.com/in/sourav-kumar-bera-93254b325"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          ><Linkedin size={18} aria-hidden="true" /></a>
          <a href="mailto:souravbera620595@gmail.com" aria-label="Email">
            <Mail size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <span>© {new Date().getFullYear()} Sourav Kumar Bera</span>
        <Link href="/#home">Back to top <ArrowUpRight size={14} aria-hidden="true" /></Link>
      </div>
    </footer>
  );
}
