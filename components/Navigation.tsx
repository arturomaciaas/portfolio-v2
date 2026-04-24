interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              className="group flex items-center py-3"
              href={`#${section.id}`}
            >
              <span
                className={`nav-indicator mr-4 h-px transition-all ${
                  activeSection === section.id
                    ? "w-16 bg-teal-400"
                    : "w-8 bg-gray-600 group-hover:w-16 group-hover:bg-gray-400"
                }`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest ${
                  activeSection === section.id
                    ? "text-teal-400"
                    : "text-gray-500 group-hover:text-gray-300"
                }`}
              >
                {section.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
