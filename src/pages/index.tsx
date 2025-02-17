import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="font-sans">
    {/* Header */}
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md z-50 p-4">
      <nav className="flex justify-center gap-8">
        <Link href="#about">
          <a className="text-x1 hover:text:blue-500">About Me</a>
        </Link>
        <Link href="#projects">
          <a className="text-x1 hover:text:blue-500">Projects</a>
        </Link>
        <Link href="#skills">
          <a className="text-x1 hover:text:blue-500">Skills</a>
        </Link>
        <Link href="#contact">
          <a className="text-x1 hover:text:blue-500">Contact Me</a>
        </Link>
        <Link href="#education_and_achievements">
          <a className="text-x1 hover:text:blue-500">Education & Achievements</a>
        </Link>
      </nav>
    </header>

    <main className="pt-24">
      {/* About Me */}
      <section id="about" className="bg-gray-100 py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-lg mt-4">I'm a Computer Engineer based in Memphis, TN.</p>
        </div>
      </section> 
    </main>
  </div>
  );
}
