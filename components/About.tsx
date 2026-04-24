export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-nord-0/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-nord-6 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 leading-relaxed">
          I'm an artificial intelligence engineer with expertise in building accessible,
          intelligent systems. I like coding useful tools and look out for the little details
          that elevate user experience.
        </p>
        <p className="mb-4 leading-relaxed">
          Right now I'm working with AI agent frameworks and machine learning models for 
          digital signal processing. I also lead the team at Webra, where we build fullstack 
          websites and integrate AI where it actually makes sense.
        </p>
        <p className="mb-4 leading-relaxed">
          I've worked at startups like Webra and Stamn, and at fintech companies like Urdaten. 
          On the side, I built an AI vocal remover using deep learning audio processing. I'm planning 
          to add support for more instruments when I get the time.
        </p>
        <p className="leading-relaxed">
          In my free time, you can usually find me studying (no, really) cloud and cybersecurity
          concepts. I also like to constantly modify my Linux configs or just try out different
          distros. When I'm not in front of a computer screen, I'm probably playing tennis or
          the guitar.
        </p>
      </div>
    </section>
  );
}
