import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const backendSkills = [
    "PHP",
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "RESTful APIs",
    "MVC",
  ];
  const frontendSkills = ["React", "Bootstrap", "TailwindCSS"];
  const softwarePrinciples = [
    "OOP",
    "SOLID Principles",
    "Design Patterns",
    "Data Structures",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 scroll-mt-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r 
                from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          >
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Results-driven full-stack Software Engineer with proven expertise
              in modern web development practices. Demonstrated success in
              designing scalable platforms, automating complex data processing
              workflows, and building comprehensive administrative systems.
            </p>
            <div className="grid grid-cols-1 md-grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                  text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                  text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Software Principles</h3>
                <div className="flex flex-wrap gap-2">
                  {softwarePrinciples.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                  text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📖 Eduction</h3>
              <ul className="text=gray-300">
                <li>
                  <strong>B.S in Computer Science</strong> - Benha University
                  (2019-2024)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💻 Work Experience</h3>

              <div className="space-y-6 text-gray-300">
                {/* TrueTech */}
                <div>
                  <h4 className="font-bold">
                    Fullstack Developer (Laravel + Next.js) — TrueTech
                  </h4>
                  <span className="text-sm text-gray-400">
                    Sep 2025 – Present · Onsite
                  </span>

                  <p className="mt-3">
                    Engineered full-stack web applications using Laravel and Next.js,
                    delivering scalable and high-performance platforms with optimized user
                    experiences. Applied clean architecture principles and design patterns
                    to build maintainable, modular systems with secure API communication.
                  </p>

                  <ul className="list-disc list-inside mt-3 space-y-1 text-gray-400">
                    <li>
                      Optimized backend workflows using Redis caching, queues, and efficient
                      database design to handle high-traffic operations.
                    </li>
                    <li>
                      Implemented CI/CD pipelines to automate testing and deployment,
                      ensuring production-grade code quality.
                    </li>
                    <li>
                      Collaborated closely with mobile teams (Flutter & native) to deliver
                      unified APIs and consistent cross-platform data flows.
                    </li>
                  </ul>
                </div>

                {/* Future Media */}
                <div>
                  <h4 className="font-bold">
                    Fullstack Engineer — Future Media Marketing
                  </h4>
                  <span className="text-sm text-gray-400">
                    May 2025 – Present
                  </span>

                  <p className="mt-3">
                    Led the development of a complete content creator management platform
                    using Laravel and React. Built scalable APIs, automated financial
                    workflows, and implemented secure role-based access. Delivered dynamic
                    dashboards for admins and creators, alongside high-traffic public pages
                    optimized for performance and reliability.
                  </p>
                </div>

                {/* AI Evaluator */}
                <div>
                  <h4 className="font-bold">
                    AI Model Evaluator & Code Review Specialist — AI Training Platforms
                  </h4>
                  <span className="text-sm text-gray-400">
                    Oct 2024 – Apr 2025
                  </span>

                  <p className="mt-3">
                    Evaluated and ranked LLM-generated code for correctness, performance,
                    and best practices, providing detailed technical feedback to improve AI
                    model outputs.
                  </p>
                </div>

                {/* iSchool */}
                <div>
                  <h4 className="font-bold">
                    Programming Instructor — iSchool
                  </h4>
                  <span className="text-sm text-gray-400">
                    Jun 2024 – Oct 2024
                  </span>

                  <p className="mt-3">
                    Delivered hands-on programming lessons in Scratch and Python, focusing
                    on problem-solving, project-based learning, and personalized mentorship
                    for students.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
