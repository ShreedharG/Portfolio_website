
import React from 'react';
import { EXPERIENCES } from '../constants';

const Timeline: React.FC = () => {
  return (
    <div className="space-y-12">
      {EXPERIENCES.map((exp, index) => (
        <div key={exp.id} className="relative pl-8 md:pl-0">
          {/* Vertical Line for Mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 md:hidden" />
          
          <div className="flex flex-col md:flex-row md:gap-12 group">
            <div className="md:w-1/4 text-slate-500 font-mono text-sm mb-2 md:mb-0">
              {exp.period}
            </div>
            <div className="md:w-3/4 pb-8 relative">
              {/* Dot for Mobile */}
              <div className="absolute -left-[32px] md:-left-[50px] top-1.5 w-3 h-3 rounded-full bg-slate-700 border-2 border-slate-900 group-hover:bg-sky-500 transition-colors" />
              
              <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-sky-400 transition-colors">
                {exp.role} <span className="text-sky-500/80">@ {exp.company}</span>
              </h3>
              <p className="text-slate-500 text-sm mb-4">{exp.location}</p>
              <ul className="space-y-2">
                {exp.description.map((bullet, i) => (
                  <li key={i} className="text-slate-400 text-sm flex gap-3">
                    <span className="text-sky-500 mt-1">▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
