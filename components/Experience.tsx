export default function Experience() {
  const experiences = [
    {
      period: "2025 — PRESENT",
      title: "Full Stack Developer",
      company: "Webra",
      description:
        "Building web applications with Next.js and Supabase. Recent projects include a restaurant ordering system with Stripe integration, a biometric loyalty program using fingerprint auth, and a POS system with GPS tracking.",
      technologies: ["Next.js", "Typescript", "Supabase", "Vercel", "Stripe", "Resend", "Cloudflare"],
      link: undefined,
    },
    {
      period: "FEB 2026 — APR 2026",
      title: "Artificial Intelligence Engineer",
      company: "Stamn",
      description:
        "Built 4 autonomous AI agents that run 24/7 for Twitter automation, brand monitoring, and trend analysis. Created custom TypeScript skills that chain web scraping, LLM reasoning, and automated posting.",
      technologies: ["TypeScript", "OpenClaw", "Firecrawl", "OpenRouter", "Linux"],
      link: "https://stamn.com",
    },
    {
      period: "2024 — 2025",
      title: "Machine Learning Engineering Intern",
      company: "Urdaten",
      description:
        "Replaced OpenAI's API with self-hosted open-source models, cutting costs by 90%. Rebuilt the document extraction pipeline using vision-language models instead of OCR, reducing manual fixes by 80%. Built a document verification system using web scraping and LLM comparison.",
      technologies: ["Python", "Azure AI Foundry", "OCR", "LLMs", "Computer Vision", "Linux"],
      link: "https://urdaten.com",
    },
  ];

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-nord-0/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-nord-6 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-nord-1/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(216,222,233,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-nord-3 sm:col-span-2">
                  {exp.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-nord-6">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-nord-6 hover:text-nord-8 focus-visible:text-nord-8 group/link text-base"
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${exp.title} at ${exp.company}`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {exp.title} ·{" "}
                          <span className="inline-block">
                            {exp.company}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{exp.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-nord-8/10 px-3 py-1 text-xs font-medium leading-5 text-nord-8">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-nord-6 group"
            aria-label="View Full Résumé"
            href="/arturo-macias-cv.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-nord-8 motion-reduce:transition-none">
                View Full{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-nord-8 motion-reduce:transition-none">
                  Résumé
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
