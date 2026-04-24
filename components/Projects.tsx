export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Chatbot",
      description:
        "Built an intelligent conversational agent using transformer models and retrieval-augmented generation. The chatbot can understand context, maintain conversation history, and provide accurate responses based on a custom knowledge base.",
      image: "/projects/chatbot.jpg",
      technologies: ["Python", "LangChain", "OpenAI", "FastAPI", "React"],
      link: "#",
    },
    {
      title: "Computer Vision Pipeline",
      description:
        "Developed a real-time object detection and tracking system for video streams. Implemented custom YOLO models with optimization for edge devices, achieving 60+ FPS on standard hardware.",
      image: "/projects/cv-pipeline.jpg",
      technologies: ["PyTorch", "OpenCV", "ONNX", "Docker", "Redis"],
      link: "#",
    },
    {
      title: "NLP Text Classifier",
      description:
        "Created a multi-label text classification system for content moderation. Fine-tuned BERT models on custom datasets and deployed with automated retraining pipelines.",
      image: "/projects/nlp-classifier.jpg",
      technologies: ["Transformers", "Hugging Face", "MLflow", "Kubernetes"],
      link: "#",
    },
    {
      title: "Recommendation Engine",
      description:
        "Designed and implemented a hybrid recommendation system combining collaborative filtering and content-based approaches. Scaled to handle millions of users with sub-100ms latency.",
      image: "/projects/recommendation.jpg",
      technologies: ["TensorFlow", "Apache Spark", "Cassandra", "Airflow"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-gray-200 hover:text-teal-400 focus-visible:text-teal-400 group/link text-base"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={project.title}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.title}
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
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{project.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="z-10 sm:order-1 sm:col-span-2">
                  <div className="rounded border-2 border-gray-700/40 transition group-hover:border-gray-700/70 sm:order-1 sm:col-span-2 sm:translate-y-1">
                    <div className="aspect-video bg-gray-800/50 rounded flex items-center justify-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
