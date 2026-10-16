
const experiences = [
  {
    period: "Present",
    type: "Learning Journey",
    title: "Full-Stack Web Development",
    organization: "Programming Hero",
    description:
      "Learning frontend and backend development, building practical projects, and improving programming and problem-solving skills.",
    skills: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    period: "Completed",
    type: "Training",
    title: "Digital Marketing & Graphics",
    organization: "E-learning and Earning Limited",
    description:
      "Developed foundational skills in digital marketing, graphic design, and professional communication.",
    skills: ["Digital Marketing", "Graphics", "Communication"],
  },
  {
    period: "Completed",
    type: "Training",
    title: "Basic Computer & MS Office",
    organization: "Social Services Training",
    description:
      "Gained foundational computer skills and familiarity with common office applications.",
    skills: ["Computer Basics", "MS Office"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 px-6 py-24 text-white sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Journey
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Experience & Learning
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            My learning journey, training, and ongoing development as
            an aspiring full-stack web developer.
          </p>
        </div>

        <div className="relative space-y-8 border-l border-cyan-400/30 pl-6 sm:pl-10">
          {experiences.map((item) => (
            <article
              key={item.title}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-cyan-400/40 sm:p-8"
            >
              <span className="absolute -left-[31px] top-8 h-4 w-4 rounded-full border-4 border-slate-900 bg-cyan-400 sm:-left-[47px]" />

              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">
                  {item.type}
                </span>

                <span className="text-sm text-slate-500">
                  {item.period}
                </span>
              </div>

              <h3 className="text-xl font-semibold sm:text-2xl">
                {item.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-cyan-400">
                {item.organization}
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                {item.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
