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
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-bold">
                    Fullstack Engineer at Future Media Marketing (May 2025 -
                    Present)
                  </h4>
                  <br></br>
                  <p>
                    As a Fullstack Software Engineer, I led the development of a
                    complete content creator management platform using Laravel
                    and React. On the backend, I built scalable APIs, automated
                    financial workflows, and implemented secure role-based
                    access. On the frontend, I crafted dynamic, responsive
                    interfaces for both admins and creators, delivering smooth
                    user experiences. The platform also features public-facing
                    pages visited by thousands of followers, making performance
                    and reliability critical. This project combined clean
                    architecture, real-time analytics, and user-focused design
                    to solve real business needs efficiently.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">
                    AI Model Evaluator & Code Review Specialist at AI Training
                    Platforms(Oct 2024 - Apr 2025)
                  </h4>
                  <br></br>
                  <p>
                    Evaluated and ranked LLM-generated code solutions for
                    accuracy, efficiency, and best practices, providing
                    technical feedback to improve AI performance in software
                    development.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">
                    Programming Instructor at iSchool (Jun 2024 - Oct 2024)
                  </h4>
                  <br></br>
                  <p>
                    Delivered engaging Scratch and Python lessons through
                    hands-on projects, personalized mentorship, and structured
                    assessments to support student progress and tackle
                    programming challenges.
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
