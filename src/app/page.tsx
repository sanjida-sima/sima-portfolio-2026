
import Image from "next/image";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Experience from "./component/Experience";
import Contact from "./component/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-20"
      >
        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          {/* Introduction */}
          <div>
            <p className="mb-5 font-medium tracking-widest text-cyan-400 uppercase">
              Hello, welcome to my portfolio
            </p>

            <h1 className="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              Hi, I am
              <span className="mt-2 block text-cyan-400">
                Sanjida Akter Sima
              </span>
            </h1>

            <h2 className="mt-6 text-xl font-medium text-slate-300 sm:text-2xl">
              Aspiring Full-Stack Web Developer
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              I am learning to build modern, responsive web applications
              and turning ideas into meaningful digital experiences.
              Explore my projects and follow my journey in web development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Projects →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="rounded-full border border-white/10 px-4 py-2">
                React
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Next.js
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                TypeScript
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                MongoDB
              </span>
            </div>
          </div>

          {/* Simple Profile Image */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-white/10 sm:h-80 sm:w-80">
              <Image
                src="/image/profile.jpg"
                alt="Sanjida Akter Sima"
                fill
                priority
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover object-center"
              />
            </div>

            <p className="mt-4 text-sm tracking-widest text-slate-400 uppercase">
              Developer in Progress
            </p>
          </div>
        </div>
      </section>

      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Sanjida Akter Sima. All rights reserved.
      </footer>
    </main>
  );
}
