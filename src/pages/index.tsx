import Link from "next/link";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

export default function Home(){
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full bg-[121212] bg-opacity-50 shadow-md z-50 p-4">
        <nav className="flex justify-between items-center">
          <div className="space-x-8 font-semibold">
            <Link href="" className="text-xl hover:text:blue-500">home</Link>
            <Link href="#projects" className="text-xl hover:text:blue-500">projects</Link>
            <Link href="#contact" className="text-xl hover:text:blue-500">contact me</Link>
          </div>
        </nav>
      </header>
  
      <main className="pt-24">
        {/* About Me */}
        <section id="about" className="bg-[121212] dark:bg-black py-24">
          <div className="container mx-auto text-left">
            <h3 className="text-gray-900 dark:text-white mt-5 text-4xl font-semibold tracking-tight">Hello I'm Vergil</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">I am a Computer Engineering graduate based in Memphis, TN.</p>
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
          <div className="text-gray-900 dark:text-white mt-5 text-4xl font-semibold tracking-tight">
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>
        </section>
      </main>
    </div>
  );
}