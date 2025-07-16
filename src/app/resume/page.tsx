export default function Resume() {
  return (
    <>
      <section className="bg-[#282828] rounded-2xl m-3 text-gray-200 min-h-screen px-6 py-10 font-sans shadow-lg">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-400">Sourav Kumar Bera</h1>
            <p className="mt-2 text-sm text-gray-400">+91 6201046595 • souravbera620595@gmail.com • East Singhbhum, India</p>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Summary</h2>
            <p className="text-gray-300">
              Aspiring web developer with expertise in front-end technologies including React. Proven ability to create responsive applications focused on user experience and performance optimization. Strong understanding of modern UI libraries and design principles. Committed to delivering high-quality, user-friendly web solutions.
            </p>
          </div>
          {/* Experience */}
          <div>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Experience</h2>
            <div>
              <p className="text-green-400 font-medium">Front End Development – AEIE Department Website</p>
              <p className="text-sm text-gray-400 italic">Haldia Institute Of Technology | Apr 2025 – May 2025</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300 text-sm">
                <li>Developed responsive UI with 85% mobile optimization.</li>
                <li>Built Event and Student Chapter sections with clean layout and smooth navigation.</li>
                <li>Deployed frontend via Netlify for performance.</li>
              </ul>
            </div>
          </div>
          {/* Projects */}
          <div>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Projects</h2>
            <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
              <li><span className="text-green-400 font-medium">Full-stack E-Media Website:</span> React, Node.js, MongoDB, Tailwind, Google Auth, Cloudinary</li>
              <li><span className="text-green-400 font-medium">Link Shortener App:</span> React, Express.js, MongoDB, Tailwind</li>
              <li><span className="text-green-400 font-medium">Todo List (MERN):</span> React, Express.js, MongoDB, Tailwind</li>
              <li><span className="text-green-400 font-medium">Rock Paper Scissors Game:</span> HTML, CSS, JavaScript, DOM manipulation</li>
              <li><span className="text-green-400 font-medium">Recipe Finder Website:</span> JavaScript, HTML, CSS, Public API</li>
            </ul>
          </div>
          {/* Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Skills</h2>
            <p className="text-gray-300 text-sm">
              Express.js, Node.js, React, JavaScript, Tailwind CSS, Bootstrap, REST APIs, Git, GSAP, JWT, MongoDB, MySQL, Mongoose, Multer, C Programming
            </p>
          </div>
          {/* Education */}
          <div>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-2">Education</h2>
            <ul className="text-sm text-gray-300 space-y-1">
              <li><span className="text-green-400 font-medium">B.Tech – CSE:</span> Haldia Institute of Technology (2028 Expected) – GPA: 8.95</li>
              <li><span className="text-green-400 font-medium">I.Sc – PCM:</span> +2 High School Khandamouda – 92.20%</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}