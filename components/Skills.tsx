
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {SKILLS.map((skillGroup) => (
        <div key={skillGroup.category} className="space-y-4">
          <h3 className="text-slate-100 font-bold text-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            {skillGroup.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono rounded hover:border-sky-500/50 hover:text-sky-400 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
