
import React, { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import { PROJECTS, OTHER_WORKS, PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth * 0.8
        : scrollLeft + clientWidth * 0.8;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500/30">
      <Navbar />

      <main>
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 scroll-mt-20 reveal">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4 flex-1">
                <h2 className="text-3xl font-bold text-slate-100 whitespace-nowrap">
                  <span className="text-sky-500 font-mono">01.</span> Built Projects
                </h2>
                <div className="h-px bg-slate-800 w-full" />
              </div>

              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => scroll('left')}
                  className="p-2 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all hover:scale-110 active:scale-95"
                  aria-label="Scroll left"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-2 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all hover:scale-110 active:scale-95"
                  aria-label="Scroll right"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {PROJECTS.map((project) => (
                <div key={project.id} className="min-w-[300px] md:min-w-[400px] h-[420px] snap-start">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 bg-slate-900/30 scroll-mt-20 reveal">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100 whitespace-nowrap">
                <span className="text-sky-500 font-mono">02.</span> Professional Journey
              </h2>
              <div className="h-px bg-slate-800 w-full" />
            </div>
            <Timeline />
          </div>
        </section>

        {/* Other Work Section */}
        <section id="other-work" className="py-20 px-4 scroll-mt-20 reveal">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100 whitespace-nowrap">
                <span className="text-sky-500 font-mono">03.</span> Beyond Code
              </h2>
              <div className="h-px bg-slate-800 w-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OTHER_WORKS.map((work) => (
                <div key={work.id} className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-xl hover:border-sky-500/30 hover:-translate-y-1 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-2 py-1 rounded">
                      {work.category}
                    </span>
                    <a href={work.link} className="text-slate-400 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2">{work.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{work.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 scroll-mt-20 reveal">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100 whitespace-nowrap">
                <span className="text-sky-500 font-mono">04.</span> Technical Skills
              </h2>
              <div className="h-px bg-slate-800 w-full" />
            </div>
            <Skills />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 bg-slate-900/30 scroll-mt-20 reveal">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-100 whitespace-nowrap">
                <span className="text-sky-500 font-mono">05.</span> Education
              </h2>
              <div className="h-px bg-slate-800 w-full" />
            </div>
            <Education />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 text-center max-w-2xl mx-auto scroll-mt-20 reveal">
          <div className="mb-12">
            <h2 className="text-sm font-mono text-sky-400 mb-4 tracking-widest">06. What's Next?</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 tracking-tight">Get In Touch</h3>
            <p className="text-slate-400 leading-relaxed max-w-lg mx-auto">
              I'm currently looking for new opportunities as an SDE. Whether you have a question or just want to say hi, my inbox is always open!
            </p>
          </div>
          <button
            onClick={handleCopyEmail}
            className="inline-block px-10 py-5 border border-sky-500 text-sky-500 rounded font-mono font-semibold hover:bg-sky-500/10 transition-all text-lg hover:-translate-y-1 active:scale-95"
          >
            {copied ? 'Copied!' : 'Say Hello'}
          </button>
        </section>
      </main>

      <Footer />

      {/* Toast Notification */}
      {copied && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
          <div className="flex items-center gap-3 px-5 py-3 bg-slate-800 border border-sky-500/50 rounded-lg shadow-lg shadow-sky-500/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span className="text-slate-100 font-medium">Email ID copied to clipboard</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
