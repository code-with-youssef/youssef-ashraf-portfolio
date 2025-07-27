import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8 bg-gradient-to-r 
                from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
        >
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
          >
            <h3 className="font-bold mb-3">
              Content creators' management dashboard (Live in Production)
            </h3>
            <p className="text-gray-400">
              A full-featured dashboard system built for content creators and
              agencies to manage and monitor AdSense earnings. The platform
              supports automatic revenue syncing from AdSense accounts every 30
              minutes, as well as manual uploads via Excel sheets. It includes
              role-based access for Admins, Agencies, and Creators, with
              real-time balance updates, detailed reporting, and a user-friendly
              interface to simplify operations and improve transparency across
              all roles.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Laravel",
                "RESTful APIs",
                "MySQL",
                "SOLID Principles",
                "cPanel Deployment",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                  text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/code-with-youssef/Future_Dashboard"
                target="blank"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-2"
              >
                View Project → GitHub
              </a>
            </div>
          </div>
          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
          >
            <h3 className="font-bold mb-3">
              Linkat — Link Page Builder for Creators (Live in Production)
            </h3>
            <p className="text-gray-400">
              Personal Link Page System for Content Creators, integrated with
              Future Dashboard. Enables creators to manage public-facing
              profiles with social media links, app promotions, and bio
              customization. Supports secure token-based access from the main
              dashboard, offering edit and view-only modes through a responsive,
              user-friendly interface.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Laravel",
                "React 19",
                "RESTful APIs",
                "MySQL",
                "SOLID Principles",
                "Modular Architecture",
                "Token-based Access Flow",
                "Component-Based UI",
                "cPanel Deployment",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                  text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/code-with-youssef/Linkaat"
                target="blank"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-2"
              >
                View Project → GitHub
              </a>
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://liinkaat.com/youssefashraf"
                target="blank"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-2"
              >
                View My Linkat Page → Live
              </a>
            </div>
          </div>
          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
          >
            <h3 className="font-bold mb-3">E-commerce project (JO-STORE)</h3>
            <p className="text-gray-400">
              A full-featured e-commerce platform with a custom admin control
              panel for managing products, categories, orders, and users.
              Integrated secure online payment, shopping cart, user profiles
              with profile pictures, and product reviews with star ratings.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Laravel",
                "Laravel Blade",
                "RESTful APIs",
                "MySQL",
                "SOLID Principles",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                  text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/code-with-youssef/laravel-ecommerce-store"
                target="blank"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-2"
              >
                View Project → GitHub
              </a>
            </div>
          </div>
          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
          >
            <h3 className="font-bold mb-3">LMS Platform</h3>
            <p className="text-gray-400">
              Role-based educational platform built with Laravel, designed to
              streamline academic workflows for admins, teachers, and students.
              Features secure authentication, automated grading, assignment
              management, and learning material distribution through intuitive,
              role-specific dashboards.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Laravel",
                "Laravel Blade",
                "RESTful APIs",
                "MySQL",
                "SOLID Principles",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full 
                  text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/code-with-youssef/LMS-Platform"
                target="blank"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-2"
              >
                View Project → GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
