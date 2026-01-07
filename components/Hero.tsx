
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 scroll-mt-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <p className="font-mono text-sky-400 mb-4 animate-fade-in-up [animation-fill-mode:both]">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 mb-6 tracking-tight animate-fade-in-up [animation-fill-mode:both] animation-delay-200">
          {PERSONAL_INFO.name}.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 leading-tight animate-fade-in-up [animation-fill-mode:both] animation-delay-400">
          Building Digital Solutions.
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed animate-fade-in-up [animation-fill-mode:both] animation-delay-600">
          {PERSONAL_INFO.about}
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-fill-mode:both] animation-delay-800">
          <a
            href="#projects"
            className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-semibold transition-all shadow-lg shadow-sky-500/20 hover:-translate-y-1 active:scale-95"
          >
            Check out my work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-slate-700 hover:bg-slate-800 text-slate-300 rounded-lg font-semibold transition-all hover:-translate-y-1 active:scale-95"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;