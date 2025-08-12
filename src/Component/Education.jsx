import React from "react";
import { FiCpu, FiCode, FiBook, FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";

const Education = () => {
  return (
    <section id="education" className="min-h-[calc(100vh-72px)] px-6 text-[#cec0a7]">
      <div className="py-10">
        <div className="mb-10">
          <h2 className="text-5xl font-bold tracking-tight mb-2">Education</h2>
          <div className="w-1/2 h-1 bg-gradient-to-r from-[#cec0a7] to-transparent"></div>
        </div>

        <div className="relative pl-12 border-l border-[#3f3f3f]">
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-">BSc. in Electrical & Electronics Engineering</h3>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-1">
                <p className="text-lg opacity-90">East Delta University</p>
                <span className="hidden sm:block opacity-70">•</span>
                <p className="text-lg opacity-80">2019-2023</p>
              </div>
            </div>

            {/* Research Publication */}
           <div className="flex items-start gap-4 p-4 rounded-lg bg-[#1a1a1a]/50 border border-[#3f3f3f] hover:border-[#cec0a7]/50 transition-colors duration-300 group">
  <div className="p-2 rounded-lg bg-[#cec0a7]/10 group-hover:bg-[#cec0a7]/20 transition-colors duration-300">
    <FiBook className="text-[#cec0a7]" size={20} />
  </div>
  <div>
    <h4 className="text-lg font-medium mb-1">Published Research</h4>
    <p className="opacity-90">
      "<span className="text-[#cec0a7] font-medium">A Cost-Effective Optimal Charge Scheduling Strategy for Electric Vehicles</span>" in MIET, 2024
    </p>
    <div className="mt-2">
      <a
        href="https://link.springer.com/chapter/10.1007/978-981-96-2721-9_46"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center gap-1 text-[#cec0a7] group/link"
      >
        <span className="relative z-10 flex items-center gap-1">
          Read Paper <FiArrowUpRight></FiArrowUpRight>
        </span>
        <span className="absolute bottom-0 left-0 w-0 h-px bg-[#cec0a7] transition-all duration-300 group-hover/link:w-full"></span>
      </a>
    </div>
  </div>
</div>

            {/* Technical Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1a1a1a]/30 hover:bg-[#1a1a1a]/50 transition-colors duration-200">
                <FiCode size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Technical Projects</h4>
                  <ul className="text-sm opacity-90 mt-1 space-y-1">
                    <li>• Electrical Transformer</li>
                    <li>• PCB Design</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1a1a1a]/30 hover:bg-[#1a1a1a]/50 transition-colors duration-200">
                <FiCpu size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Core Competencies</h4>
                  <p className="text-sm opacity-90 mt-1">
                    Electrical Circuit • Power Systems • Signal System • Electrical Machines
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1a1a1a]/30 hover:bg-[#1a1a1a]/50 transition-colors duration-200">
                <FiCode size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Technical Skills</h4>
                  <p className="text-sm opacity-90 mt-1">
                    MATLAB • PCB Design • AutoCAD • IBM ILOG CPLEX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1a1a1a]/30 hover:bg-[#1a1a1a]/50 transition-colors duration-200">
                <FiBook size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Thesis/Research</h4>
                  <p className="text-sm opacity-90 mt-1">
                    Cost-Effective Optimal Charge Scheduling Strategy for Electric Vehicles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
