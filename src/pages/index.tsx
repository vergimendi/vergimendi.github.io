import Link from "next/link";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

export default function Home(){
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full bg-[121212] bg-opacity-50 shadow-md z-50 p-4">
        <nav className="flex justify-between items-center">
          <div className="space-x-8 font-semibold">
            <Link href="" className="text-xl hover:text-blue-500">home</Link>
            <Link href="#projects" className="text-xl hover:text-blue-500">projects</Link>
            <Link href="#contact" className="text-xl hover:text-blue-500">contact me</Link>
          </div>
        </nav>
      </header>
  
      <main className="pt-24">
        {/* About Me */}
        <section id="about" className="bg-yellow py-24">
          <div className="container mx-auto text-left">
            <h3 className="text-gray-900 dark:text-white mt-5 text-4xl font-semibold tracking-tight">Hello I&apos;m Vergil</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">I am a 23-year-old Computer Engineering graduate based in Memphis, TN.</p>
                <div className="flex items-center gap-6 container mx-auto text-left py-6">
                  {/* Resume */}
                  <a href="/MendizabelV_Resume.pdf" target="_blank" rel="noopener nonreferrer" 
                  className="flex items-center gap-2 border border-gray-500 text-gray-500 text-sm font-medium px-3 py-1 rounded-md hover:bg-gray-500 hover:text-white transition duration-300">
                    <FileText className="w-4 h-4" /> Resume
                  </a>
                  {/* Github */}
                  <a href="https://github.com/vergimendi" target="_blank" rel="noopener nonreferrer">
                    <Github className="text-gray-500 hover:text-white w-6 h-6 transition duration=300"/>
                  </a>
                  {/* Linkedin */}
                  <a href="https://www.linkedin.com/in/vergil-mendizabel-18bb78285" target="_blank" rel="noopener nonreferrer">
                    <Linkedin className="text-gray-500 hover:text-white w-6 h-6 transition duration=300"/>
                  </a>
                  {/* E-Mail */}
                  <a href="mailto:vergiltm@outlook.com" target="_blank" rel="noopener nonreferrer">
                    <Mail className="text-gray-500 hover:text-white w-6 h-6 transition duration=300"/>
                  </a>
            </div>
          </div>
        </section> 
        {/* Projects */}
          <section id="projects" className="bg-[121212] dark:bg-black py-6">
          <div className="container mx-auto text-left">
            <h2 className="text-gray-900 dark:text-white mt-5 text-4xl font-semibold tracking-tight">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {/* Project 1 */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md overflow-hidden">
                {/* Image */}
                <img src="/path-to-your-image.png" alt="Project Screenshot" className="w-full h-40 object-cover rounded-md"/>
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Project 1</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Project Description
                  </p>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Stuff",].map((tech) => (
                      <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-xs text-gray-900 dark:text-gray-100 font-medium px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Button */}
                  <div className="mt-4">
                    <a href="#" className="inline-flex items-center gap-1 text-white bg-blue-500 hover:bg-blue-700 font-medium py-1 px-2 text-xs rounded-md transition duration-300">
                      <Github className="w-4 h-4"/> Source
                    </a>
                  </div>
                </div>
              </div>
              {/* Project 2 */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md overflow-hidden">
                {/* Image */}
                <img src="/path-to-your-image.png" alt="Project Screenshot" className="w-full h-40 object-cover rounded-md"/>
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Project 1</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Project Description
                  </p>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["stuff",].map((tech) => (
                      <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-xs text-gray-900 dark:text-gray-100 font-medium px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Button */}
                  <div className="mt-4">
                    <a href="#" className="inline-flex items-center gap-1 text-white bg-blue-500 hover:bg-blue-700 font-medium py-1 px-2 text-xs rounded-md transition duration-300">
                      <Github className="w-4 h-4"/> Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a href="/projects" className="text-white bg-blue-500 hover:bg-blue-700 font-medium py-2 px-4 rounded-md transition duration-300">view more</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}