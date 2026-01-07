
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-slate-800 bg-slate-900/50">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="flex gap-6">
          <a href={PERSONAL_INFO.github} target="_blank" className="text-slate-400 hover:text-sky-400 transition-colors">Github</a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-slate-400 hover:text-sky-400 transition-colors">LinkedIn</a>
          <a href={PERSONAL_INFO.leetcode} target="_blank" className="text-slate-400 hover:text-sky-400 transition-colors">LeetCode</a>
        </div>
        <p className="text-slate-500 text-sm font-mono">
          Built with React & Tailwind CSS
        </p>
        <p className="text-slate-600 text-[10px] uppercase tracking-widest">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
