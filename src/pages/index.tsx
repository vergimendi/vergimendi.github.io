import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="font-sans">
    {/* Header */}
    <header className="fixed top-0 left-0 z-50 w-full bg-gray shadow-md z-50 p-4">
      <nav className="flex justify-center gap-8">
        <Link href="#about" className="text-xl hover:text:blue-500">About Me</Link>
        <Link href="#projects" className="text-xl hover:text:blue-500">Projects</Link>
        <Link href="#skills" className="text-xl hover:text:blue-500">Skills</Link>
        <Link href="#contact" className="text-xl hover:text:blue-500">Contact Me</Link>
        <Link href="#education_and_achievements" className="text-xl hover:text:blue-500">Education & Achievements</Link>
      </nav>
    </header>

    <main className="pt-24">
      {/* About Me */}
      <section id="about" className="bg-gray-1 py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-lg mt-4">I am a Computer Engineer based in Memphis, TN.</p>
        </div>
      </section> 
      {/* Projects */}
      <section id="projects" className="bg-gray-1 py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Projects</h2>
            <p className="text-lg mt-4">Here are some of my projects.</p>
      </div>
      </section>
      {/* Skills */}
      <section id="skills" className="bg-gray-1 py-24">
      </section>
    </main>
  </div>
  );
}
