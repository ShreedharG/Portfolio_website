
import React from 'react';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Other Work', href: '#other-work' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent font-mono transition-transform hover:scale-110 active:scale-95">
          SG_
        </a>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors nav-link-underline"
            >
              {item.name}
            </a>
          ))}
        </div>
        <a
          href="https://drive.google.com/file/d/1BTcnSqkE4Ey29lKYCWoG4jigk4iTXEmF/view?usp=drivesdk"
          target="blank"
          className="px-4 py-2 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-lg text-sm font-medium transition-all hover:scale-105 active:scale-95"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
