import React from 'react';
import { FiExternalLink, FiGithub, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router';

const Projects = () => {
  const projects = [
  {
    id: 1,
    name: "ShareWave",
    image: "/sharewave.png",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    description: "A full-stack web app for sharing knowledge through articles and discussions.",
    liveLink: "https://adorable-axolotl-f0632a.netlify.app",
    githubLink: "https://github.com/fabiha23/Share-Wave-Client",
    challenges: [
      "Implementing a rich text editor for articles",
      "Managing real-time updates in discussions",
      "Ensuring secure user authentication and authorization"
    ],
    improvements: [
      "Add private messaging between users",
      "Implement advanced search and filtering",
      "Enable article scheduling and draft saving"
    ]
  },
  {
    id: 2,
    name: "Grandma's Cookbook",
    image: "/cookbook.png",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    description: "A full-stack web app for sharing and managing recipes with user-friendly features.",
    liveLink: "https://leafy-moonbeam-498d03.netlify.app/",
    githubLink: "https://github.com/fabiha23/Grandma-s-Cookbook-Client?tab=readme-ov-file",
    challenges: [
      "Implementing image uploads for recipes",
      "Managing recipe categories and tags effectively",
      "Optimizing search and filter performance"
    ],
    improvements: [
      "Allow users to rate and review recipes",
      "Add meal planning and shopping list features",
      "Enable social media sharing for recipes"
    ]
  },
  {
    id: 3,
    name: "Horizon Hire",
    image: "/horizon.png",
    techStack: ["React", "JavaScript", "React Router"],
    description: "A frontend web app for browsing and exploring job listings with easy navigation.",
    liveLink: "https://illustrious-conkies-d83528.netlify.app/",
    githubLink: "https://github.com/fabiha23/Horizon-Hire",
    challenges: [
      "Designing a responsive and user-friendly dashboard layout",
      "Integrating interactive charts and graphs",
      "Managing state for multiple dashboard widgets"
    ],
    improvements: [
      "Add customizable dashboard layouts",
      "Integrate data export options (CSV, PDF)",
      "Enable real-time data syncing with APIs"
    ]
  }
];


  return (
    <section id="projects" className="min-h-[calc(100vh-72px)] py-16 px-6 text-[#cec0a7] relative">
      <div>
        <div className="mb-10">
          <h2 className="text-5xl font-bold tracking-tight mb-2">Projects</h2>
          <div className="w-1/2 h-1 bg-gradient-to-r from-[#cec0a7] to-transparent"></div>
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
                
                {/* Tech Stack Tags */}

                <p className="opacity-90 mb-6">{project.description}</p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Link to={`/project/${project.id}`}>
                  <button
                    className="flex items-center gap-1 text-sm px-4 py-2 rounded-full bg-[#cec0a7] text-black hover:bg-[#e0e0d8] transition-colors duration-300 cursor-pointer"
                  >
                    Details
                    <FiChevronRight size={16} />
                  </button>
                  </Link>
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
