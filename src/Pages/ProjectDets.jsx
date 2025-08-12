import React from 'react';
import { FiExternalLink, FiGithub, FiArrowLeft } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router';

const ProjectDets = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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


  // Find the project with matching ID
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-[#cec0a7] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mx-auto px-4 py-2 rounded-lg border border-[#3f3f3f] hover:bg-[#3f3f3f]/50"
          >
            <FiArrowLeft /> Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#cec0a7] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-8 group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 cursor-pointer transition-transform duration-300" />
          <span className="hover:underline">Back to Projects</span>
        </button>

        {/* Project Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden border border-[#3f3f3f]">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.name}</h1>
            
            {/* Tech Stack */}
            <div className="mb-6">
              <h2 className="text-xl font-medium mb-3">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#3f3f3f] text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#3f3f3f] hover:bg-[#3f3f3f]/50 transition-colors duration-300"
              >
                <FiExternalLink />
                Live Project
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#3f3f3f] hover:bg-[#3f3f3f]/50 transition-colors duration-300"
              >
                <FiGithub />
                GitHub Repository
              </a>
            </div>

            {/* Description */}
            <div className="border-t border-[#3f3f3f] pt-6">
              <h2 className="text-xl font-medium mb-3">Project Overview</h2>
              <p className="opacity-90 leading-relaxed">{project.description}</p>
            </div>
          </div>
        </div>

        {/* Challenges Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[#3f3f3f]">Development Challenges</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.challenges.map((challenge, index) => (
              <li 
                key={index}
                className="p-4 rounded-lg bg-[#1a1a1a]/50 border border-[#3f3f3f] hover:border-[#cec0a7]/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="text-[#cec0a7] text-xl">0{index + 1}.</span>
                  <p className="opacity-90">{challenge}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Improvements Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[#3f3f3f]">Future Improvements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.improvements.map((improvement, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-[#1a1a1a]/30 border border-[#3f3f3f] hover:bg-[#1a1a1a]/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#cec0a7]"></div>
                  <h3 className="font-medium">Feature Roadmap</h3>
                </div>
                <p className="text-sm opacity-90">{improvement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots Section (Optional) */}
        <div>
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[#3f3f3f]">Project Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-lg overflow-hidden border border-[#3f3f3f] hover:border-[#cec0a7]/50 transition-colors duration-300">
                <img 
                  src={`${project.image.replace('.png', '')}-screenshot-${item}.jpg`} 
                  alt={`${project.name} screenshot ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDets;