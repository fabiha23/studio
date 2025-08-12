import React from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiFigma } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { GiSpiderWeb } from "react-icons/gi";

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" size={20} /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" size={20} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" size={20} /> },
        { name: "GSAP", icon: <GiSpiderWeb className="text-[#88CE02]" size={20} /> },
        { name: "Framer Motion", icon: <TbBrandFramerMotion className="text-[#0055FF]" size={20} /> },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" size={20} /> },
        { name: "Express.js", icon: <SiExpress className="text-[#6a6767]" size={20} /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={20} /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" size={20} /> },
      ],
    },
    {
      name: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={20} /> },
        { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" size={20} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-[calc(100vh-72px)] px-6 py-20 text-[#cec0a7] relative">
      <div>
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">Skills</h2>
          <div className="sm:w-1/4 w-1/2 h-1 bg-gradient-to-r from-[#cec0a7] to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category) => (
            <div key={category.name} className="group">
              <h3 className="text-xl font-medium mb-8 tracking-wider border-b border-[#3f3f3f] pb-2 group-hover:border-[#cec0a7] transition-colors duration-500">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center gap-3 px-1 py-2 hover:translate-x-1 transition-transform duration-300"
                  >
                    <div className="text-lg">{skill.icon}</div>
                    <span className="text-sm font-light tracking-wide opacity-90">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;