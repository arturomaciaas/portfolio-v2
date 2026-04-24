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
          I'm an Artificial Intelligence Engineer with expertise in building accessible, 
          intelligent systems. I take pride in crafting thoughtful, inclusive products and 
          have a sharp eye for the little details that elevate user experience. I do my best 
          work at the intersection of design and engineering, where great UX meets clean, 
          scalable code.
        </p>
        <p className="mb-4 leading-relaxed">
          Currently, I'm focused on developing cutting-edge AI solutions, working with 
          machine learning models, natural language processing, and computer vision. I lead 
          engineering efforts across components, tooling, and patterns, partnering closely 
          with cross-functional teams to ensure AI capabilities are built into the foundation 
          of our products.
        </p>
        <p className="mb-4 leading-relaxed">
          Previously, I've worked across a wide range of environments — from product studios 
          to startups and large tech companies. Outside of my day-to-day work, I also enjoy 
          exploring new AI research, building side projects, and contributing to open-source 
          initiatives.
        </p>
        <p className="leading-relaxed">
          In my spare time, you can usually find me experimenting with new AI models, reading 
          research papers, or working on personal projects that push the boundaries of what's 
          possible with artificial intelligence.
        </p>
      </div>
    </section>
  );
}
