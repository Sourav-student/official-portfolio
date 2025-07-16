'use client'
import { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { FaSquareGithub, FaLinkedinIn, FaMessage } from "react-icons/fa6";
import postContactFormSubmit from "./contactFormSubmit";
import { set } from "nprogress";

export default function Footer() {

  const [contactData, setContactData] = useState({
    name: '',
    phone_no: '',
    message: ''
  })
  const [submit, setSubmit] = useState(false)

  const handleSubmit = async () => {
    if (!contactData.name || !contactData.message || !contactData.phone_no) {
      toast.warning("Fill the form first");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(contactData.name)) {
      toast.warning("Name should only contain letters");
      return;
    }

    if (contactData.phone_no.length !== 10) {
      toast.warning("Give the correct numbar");
      return;
    }

    setSubmit(true);

    const res = await postContactFormSubmit(contactData);

    if (res?.data?.success) {
      toast.success(res?.data?.message);
    } else {
      toast.error(res?.data?.message);
    }

    setSubmit(false);

    setContactData({
      name: '',
      phone_no: '',
      message: ''
    })

  }

  return (
    <footer className="bg-black text-white border-t border-green-400 py-12 px-6">
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
        <div className="hidden lg:block">
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

        {/* Mobile Form */}
        <div className="lg:hidden bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-green-300">
          <h3 className="text-xl font-semibold mb-4 text-center text-white">Connect with Me</h3>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={contactData.name}
              onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
              placeholder="Your Name"
              className="w-full p-2 rounded-md border border-green-400 bg-[#0f0f0f] text-white placeholder:text-gray-400 focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone_no"
              value={contactData.phone_no}
              onChange={(e) => setContactData({ ...contactData, phone_no: e.target.value })}
              placeholder="Your Phone number"
              className="w-full p-2 rounded-md border border-green-400 bg-[#0f0f0f] text-white placeholder:text-gray-400 focus:outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              value={contactData.message}
              onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
              className="w-full p-2 rounded-md border border-green-400 bg-[#0f0f0f] text-white placeholder:text-gray-400 h-28 resize-none focus:outline-none"
              required
            ></textarea>
            <button
              type="button"
              className={`px-6 py-3 rounded-lg transition-all ease-in-out text-lg border cursor-pointer ${submit
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#ffff00] hover:bg-[#00ff88] text-[#000] hover:border-white"
                }`}
              disabled={submit}
              onClick={handleSubmit}
            >
              {submit ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center mt-10 text-sm text-gray-500">
        Made with 💚 in India — Let's build the web together.
      </div>
    </footer >

  );
}