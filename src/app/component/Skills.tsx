
const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and user-friendly interfaces.",
    skills: [
      { name: "HTML5", level: "Comfortable" },
      { name: "CSS3", level: "Comfortable" },
      { name: "JavaScript", level: "Learning" },
      { name: "TypeScript", level: "Learning" },
      { name: "React", level: "Learning" },
      { name: "Next.js", level: "Learning" },
      { name: "Tailwind CSS", level: "Learning" },
    ],
  },
  {
    title: "Backend Development",
    description: "Learning server-side development and APIs.",
    skills: [
      { name: "Node.js", level: "Learning" },
      { name: "Express.js", level: "Learning" },
      { name: "MongoDB", level: "Learning" },
      { name: "REST APIs", level: "Learning" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Tools used in development and collaboration.",
    skills: [
      { name: "Git", level: "Learning" },
      { name: "GitHub", level: "Learning" },
      { name: "VS Code", level: "Using" },
      { name: "Responsive Design", level: "Learning" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-6 py-24 text-white sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Expertise
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            My current technical skills and the technologies I am learning
            to become a full-stack web developer.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.06] sm:p-8"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-lg font-bold text-cyan-400">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-semibold">
                  {group.title}
                </h3>
              </div>

              <p className="mb-7 text-sm leading-6 text-slate-400">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-xl border border-white/10 bg-slate-900 px-3 py-2 transition hover:border-cyan-400/50"
                  >
                    <p className="text-sm font-medium text-slate-200">
                      {skill.name}
                    </p>

                    <p className="mt-1 text-xs text-cyan-400">
                      {skill.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] p-6 sm:p-8">
          <h3 className="text-lg font-semibold">
            Always Learning, Always Building
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
            I am continuously improving my programming skills through
            hands-on projects, practice, and learning new technologies.
            My goal is to build useful, accessible, and reliable web
            applications.
          </p>
        </div>
      </div>
    </section>
  );
}
