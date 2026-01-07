
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {EDUCATION.map((edu, idx) => (
        <div 
          key={edu.id} 
          className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl hover:border-sky-500/30 transition-all hover:-translate-y-2 group"
          style={{ transitionDelay: `${idx * 100}ms` }}
        >
          <div className="flex flex-col h-full">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-400 mb-2">
              {edu.period}
            </span>
            <h3 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-sky-400 transition-colors">
              {edu.degree}
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              {edu.institution}
            </p>
            <div className="mt-auto pt-4 border-t border-slate-700/50">
              <span className="text-xs font-mono text-slate-500">
                Performance: <span className="text-sky-400 font-bold">{edu.grade}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
