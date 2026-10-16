


const aboutItems = [
  {
    number: "01",
    title: "Curious Learner",
    description: "Always exploring new technologies.",
  },
  {
    number: "02",
    title: "Problem Solver",
    description: "Learning by building practical projects.",
  },
  {
    number: "03",
    title: "Team Player",
    description: "Valuing communication and collaboration.",
  },
  {
    number: "04",
    title: "Growth Mindset",
    description: "Improving one step at a time.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-slate-900/40 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-cyan-400 uppercase">
            Get to Know Me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            About <span className="text-cyan-400">Me</span>
          </h2>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-3xl text-cyan-400">
              ✦
            </div>

            <h3 className="mb-4 text-2xl font-semibold">
              My Journey in Web Development
            </h3>

            <p className="leading-8 text-slate-400">
              I am Sanjida Akter Sima, an aspiring full-stack web developer from
              Bangladesh. I am learning to build modern, responsive websites and
              web applications using current technologies.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              I believe in continuous learning, solving problems, and improving
              my skills through practical projects. My goal is to grow into a
              skilled developer and create useful digital experiences.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutItems.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
              >
                <span className="text-sm font-bold text-cyan-400">
                  {item.number}
                </span>

                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
