
const contactLinks = [
  {
    name: "Email",
    detail: "Let's connect through email",
    value: "simasanjida8@gmail.com",
    href: "mailto:simasanjida8@gmail.com",
  },
  {
    name: "GitHub",
    detail: "Explore my code and projects",
    value: "github.com/sanjida-sima",
    href: "https://github.com/sanjida-sima",
  },
  {
    name: "LinkedIn",
    detail: "Connect with me professionally",
    value: "linkedin.com/in/sanjida-akter-sima-47a899359",
    href: "https://www.linkedin.com/in/sanjida-akter-sima-47a899359/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-24 text-white sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Get In Touch
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Let&apos;s Build Something
              <span className="block text-cyan-400">
                Meaningful Together.
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-slate-400">
              I am open to connecting with developers, learning from
              experienced professionals, and exploring opportunities
              to grow in web development.
            </p>

            <a
              href="mailto:simasanjida8@gmail.com"
              className="mt-8 inline-flex items-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Contact Me
              <span className="ml-2" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name === "Email" ? undefined : "_blank"}
                rel={
                  link.name === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/40 hover:bg-white/[0.06] sm:p-6"
              >
                <div>
                  <h3 className="font-semibold text-white">
                    {link.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {link.detail}
                  </p>

                  <p className="mt-2 break-all text-sm text-cyan-400">
                    {link.value}
                  </p>
                </div>

                <span
                  className="text-xl text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
