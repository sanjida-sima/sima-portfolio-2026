import Image from "next/image";
const projects = [
  {
    number: "01",
    title: "HTML & CSS Project",
    description:
      "A website built with HTML and CSS to practice page structure, styling, and responsive layouts.",
    image: "/projects/projects-1.png",
    technologies: ["HTML5", "CSS3"],
    github: "https://github.com/sanjida-sima/B14-A01-DEVCONFO-1",
    demo: "https://sanjida-sima.github.io/B14-A01-DEVCONFO-1/",
  },
  {
    number: "02",
    title: "React Project",
    description:
      "A React application built to practice reusable components, interactive interfaces, and modern frontend development.",
    image: "/projects/projects-2.png",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/sanjida-sima/B14-A05-Devstack",
    demo: "https://astounding-croissant-a8714a.netlify.app/",
  },
  {
    number: "03",
    title: "Next.js Project",
    description:
      "A web application built with Next.js and TypeScript while learning modern full-stack web development.",
    image: "/projects/projects-3.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sanjida-sima/my-assignment-a6-",
    demo: "https://my-assignment-a6.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 px-6 py-24 text-white sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Work
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            Here are some projects I have worked on while learning web
            development and improving my technical skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={800}
                  height={500}
                  className="h-52 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="mb-3 text-sm font-semibold tracking-widest text-cyan-400">
                  PROJECT {project.number}
                </p>

                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-slate-500">
                      Live link coming soon
                    </span>
                  )}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                      GitHub ↗
                    </a>
                  ) : (
                    <span className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-slate-500">
                      GitHub coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
