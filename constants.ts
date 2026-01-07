
import { Project, Experience, OtherWork, Education } from './types';

export const PERSONAL_INFO = {
  name: "Shreedhar Goyal",
  title: "Software Development Engineer",
  location: "Delhi, India",
  email: "shreedhar.goyal@gmail.com",
  github: "https://github.com/ShreedharG",
  linkedin: "https://www.linkedin.com/in/shreedhar-goyal-98105b251/",
  leetcode: "https://leetcode.com/u/ShreedharGG/",
  tagline: "Building scalable distributed systems and pixel-perfect user experiences.",
  about: "I am a final-year student at LNMIIT, Jaipur, passionate about backend-heavy full-stack development and system design. With a strong foundation in Data Structures, Algorithms, and core CS subjects, I enjoy building scalable backend systems and creating AI-powered applications that solve real-world problems with clean, elegant code."
};

export const SKILLS = [
  {
    category: "Languages",
    items: ["C/C++", "TypeScript", "JavaScript", "Python", "MySQL"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Redux"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Flask", "MongoDB", "PostgreSQL", "Redis"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "AWS", "Git/GitHub", "Postman", "DBeaver"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "UniApply",
    description: "A full-stack PERN application dashboard for student applications.",
    longDescription: "Developed a great UX that allows users to apply for universities and colleges. Implemented a secure authentication system using JWT and a database using PostgreSQL.  .",
    techStack: ["Node/Express", "Postgre", "JWT-Auth", "Docker"],
    githubUrl: "https://github.com/ShreedharG/HeroViredProject",
    liveUrl: "https://hero-vired-merged.vercel.app/",
    imageUrl: "./images/uniapply.png"
  },
  {
    id: "2",
    title: "BroCode",
    description: "A whiteboard code collaboration platform built with React and Socket.io.",
    longDescription: "Allows multiple users to collaborate on a whiteboard in real-time to work on code snippets. Helps in remote pair programming.",
    techStack: ["Socket.io", "React", "Node + Express"],
    githubUrl: "https://github.com/ShreedharG/BroCode",
    liveUrl: "https://brocode-nqwv.onrender.com/",
    imageUrl: "./images/brocode.png"
  },
  {
    id: "3",
    title: "OTP Extraction",
    description: "OTP Extraction from a text message. Achieved 97.6% accuracy.",
    longDescription: "Built with C++, this algorithm uses string processing and pattern recognition to extract OTP from a text message .",
    techStack: ["C++", "String Processing", "Pattern Recognition"],
    githubUrl: "https://github.com/ShreedharG/OTP_Extraction",
    imageUrl: "./images/otp.png"
  },
  {
    id: "4",
    title: "Ride Sharing System",
    description: "A ride sharing system built with C++ and OOP. Built to include all good design principles.",
    longDescription: "Built with C++, this system implements a ride sharing system using OOP principles. It allows users to book rides and track their rides.",
    techStack: ["C++", "OOP", "System Design"],
    githubUrl: "https://github.com/ShreedharG/Ride_Sharing-System_Design",
    imageUrl: "./images/ride-sharing.png"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Software Engineering Intern",
    company: "mFilterIt",
    period: "June 2024 - August 2024",
    location: "Noida, India",
    description: [
      "Worked on backend-oriented Python development focusing on object-oriented design, modular code structure, and data handling.",
      "Built mini backend projects to understand request flow, control separation, and error handling.",
      "developed an intent classification system to process unstructured input.",
      "Strengthened problem-solving and debugging skills while working with real-world datasets."
    ]
  },
  {
    id: "exp2",
    role: "Lab - Teaching Assistant",
    company: "LNMIIT",
    period: "Jan 2024 - April 2024",
    location: "Jaipur, India",
    description: [
      "Mentored 100+ juniors in Data Structures and Algorithms.",
      "Organized doubt clearing sessions for juniors.",
      "Assisted faculty in smooth lab operations."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu1",
    degree: "B.Tech in Computer Science",
    institution: "The LNM Institute of Information Technology (LNMIIT), Jaipur",
    period: "2021 - 2025",
    grade: "7.1 CGPA"
  },
  {
    id: "edu2",
    degree: "Senior Secondary School Examination (12th)",
    institution: "DPS Gurgaon, Sec-45",
    period: "2021-22",
    grade: "91.5%"
  },
  {
    id: "edu3",
    degree: "Secondary School Examination (10th)",
    institution: "DPS Gurgaon, Sec-45",
    period: "2019-20",
    grade: "92%"
  }
];

export const OTHER_WORKS: OtherWork[] = [
  {
    id: "w1",
    title: "SDE PrepKit",
    category: "Giving Back",
    description: "Developed a comprehensive prepkit for SDE freshers which includes 300+ DSA questions, SQL and JS-FAQs, and mock HR situations.",
    link: "https://github.com/ShreedharG/SDE_Fresher-PrepKit"
  },
  {
    id: "w2",
    title: "Sports Enthusiast",
    category: "Competition",
    description: "Participated in various sports events and won medals."
  }
];
