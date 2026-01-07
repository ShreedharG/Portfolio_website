
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  location: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface OtherWork {
  id: string;
  title: string;
  category: 'Blog' | 'Open Source' | 'Competition' | 'Giving Back';
  description: string;
  link?: string;
}
