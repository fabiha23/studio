import React from "react";
import { FiExternalLink, FiGithub, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "OneMoreServe",
      image: "/onemoreserve.png",
      techStack: ["React", "Express.js", "MongoDB", "TailwindCSS"],
      description:
        "A role-based full-stack web app that connects restaurants with charities to reduce surplus food wastage.",
      liveLink: "https://onemoreserve.netlify.app/",
      githubLink: "https://github.com/fabiha23/One-More-Serve-Client",
      challenges: [
        "Implementing a rich text editor for articles",
        "Managing real-time updates in discussions",
        "Ensuring secure user authentication and authorization",
      ],
      improvements: [
        "Add private messaging between users",
        "Implement advanced search and filtering",
        "Enable article scheduling and draft saving",
      ],
    },
    {
      id: 2,
      name: "Aurora",
      image: "/aurora.png",
      techStack: ["Next.js", "Shadcn", "MongoDB", "TailwindCSS"],
      description:
        "A full-stack e-commerce application designed for selling and managing makeup products.",
      liveLink: "https://aurora-makeup.vercel.app/",
      githubLink: "https://github.com/fabiha23/Aurora",
      challenges: [
        "Implementing image uploads for recipes",
        "Managing recipe categories and tags effectively",
        "Optimizing search and filter performance",
      ],
      improvements: [
        "Allow users to rate and review recipes",
        "Add meal planning and shopping list features",
        "Enable social media sharing for recipes",
      ],
    },
    {
      id: 3,
      name: "ShareWave",
      image: "/sharewave.png",
      techStack: ["React", "Express.js", "MongoDB", "TailwindCSS"],
      description:
        "A full-stack web appA full-stack web app for sharing knowledge through articles and discussions.",
liveLink: "https://adorable-axolotl-f0632a.netlify.app",
    githubLink: "https://github.com/fabiha23/Share-Wave-Client",
      challenges: [
        "Designing a responsive and user-friendly dashboard layout",
        "Integrating interactive charts and graphs",
        "Managing state for multiple dashboard widgets",
      ],
      improvements: [
        "Add customizable dashboard layouts",
        "Integrate data export options (CSV, PDF)",
        "Enable real-time data syncing with APIs",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-72px)] py-16 px-6 text-[#cec0a7] relative"
    >
      <div>
        <div className="mb-10">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">
            Projects
          </h2>
          <div className="sm:w-1/4 w-1/2 h-1 bg-gradient-to-r from-[#cec0a7] to-transparent"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a]/70 rounded-xl border border-[#3f3f3f] hover:border-[#cec0a7]/50 transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-medium mb-2">{project.name}</h3>

                {/* Tech Stack */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#3f3f3f] text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="opacity-90 mb-4">{project.description}</p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#3f3f3f] hover:bg-[#3f3f3f]/50 transition-colors duration-300"
                  >
                    <FiExternalLink />
                    View
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#3f3f3f] hover:bg-[#3f3f3f]/50 transition-colors duration-300"
                  >
                    <FiGithub />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
