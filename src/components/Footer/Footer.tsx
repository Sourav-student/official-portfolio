import Link from "next/link";
import { FaSquareGithub, FaLinkedinIn, FaMessage } from "react-icons/fa6";

export default function Footer() {

  return (
    <footer className="bg-[#2525254f] backdrop-blur-2xl text-white border-t border-green-400 py-12 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Branding + Description */}
        <div>
          <h2 className="text-2xl font-bold text-green-400">Sourav.coders</h2>
          <p className="text-sm mt-3 text-gray-400">
            &copy; 2025 All rights reserved.
          </p>
          <p className="text-sm mt-2 text-gray-400 leading-relaxed">
            Crafted with <span className="text-red-500">♥</span> and countless cups of chai by Sourav Kumar Bera —
            just a curious mind turning ideas into code, one project at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div className="hidden lg:block">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-green-400 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-green-400 transition-colors">About</Link></li>
            <li><Link href="/projects" className="hover:text-green-400 transition-colors">Projects</Link></li>
            <li><Link href="/Resume" className="hover:text-green-400 transition-colors">Resume</Link></li>
          </ul>
        </div>

        {/* Connect with Me */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li>
              <Link
                href="https://github.com/sourav-student"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-all flex items-center"
              >
                <FaSquareGithub className="mr-2 text-xl" />
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/sourav-kumar-bera-93254b325"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-all flex items-center"
              >
                <FaLinkedinIn className="mr-2 text-xl" />
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="mailto:souravbera620595@gmail.com"
                className="hover:text-green-400 transition-all flex items-center"
              >
                <FaMessage className="mr-2 text-xl" />
                Email
              </Link>
            </li>
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="text-center mt-10 text-sm text-gray-500 fixed bottom-1 w-full bg-[#fff] flex justify-center items-center left-0">
          Made with 💚 in India — Let&apos;s build the web together.
        </div>
      </div>
    </footer >

  );
}