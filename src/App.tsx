import React, { useState } from 'react';
import { Menu, X, ExternalLink, Mail, Phone, Linkedin, Github, ArrowRight } from 'lucide-react';

// Types
interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

interface ExperienceItem {
  company: string;
  title: string;
  location: string;
  period: string;
  bullets: string[];
}

interface ProjectItem {
  id: number;
  title: string;
  role: string;
  shortDesc: string;
  techStack: string[];
  fullDescription: string;
  keyMetrics: string[];
}

interface PortfolioDataType {
  personal: PersonalInfo;
  about: string;
  skills: Record<string, string[]>;
  experience: ExperienceItem[];
  projects: ProjectItem[];
}

const portfolioData: PortfolioDataType = {
  personal: {
    name: 'Rishabh Tyagi',
    title: 'Backend Engineer & Full-Stack Developer',
    headline: 'Building scalable systems, distributed architectures, and APIs that perform',
    email: 'rishabh.tyagi2311@gmail.com',
    phone: '9650397782',
    linkedin: 'rishabh-tyagi-486379245',
    github: 'rishabhtyagi2311',
  },
  about: `I craft scalable backend systems and distributed architectures. With expertise in Node.js, TypeScript, and cloud infrastructure, I design APIs that developers love and systems that scale effortlessly. I'm equally comfortable diving into full-stack work when the product demands it.`,
  skills: {
    'Backend': ['Node.js', 'TypeScript', 'Express', 'API Design', 'Microservices', 'RabbitMQ'],
    'Frontend': ['React', 'React Native', 'Angular'],
    'Data & Databases': ['Prisma ORM', 'PostgreSQL', 'Data Pipelines'],
    'Cloud & DevOps': ['AWS', 'Docker', 'CI/CD', 'OAuth'],
  },
  experience: [
    {
      company: 'Motherson Technology Services',
      title: 'Associate Software Engineer',
      location: 'Noida',
      period: 'Jul 2024 – Feb 2025',
      bullets: [
        'Built Angular components for IoT systems handling real-time data visualization',
        'Designed data pipelines for monitoring dashboards across manufacturing deployments',
        'Implemented reusable UI modules deployed across multiple customer instances',
      ],
    },
    {
      company: 'Freelance',
      title: 'Full-Stack Developer - Sports Platform',
      location: 'Remote',
      period: 'Mar 2025 – Present',
      bullets: [
        'Architected React Native dual-app with role-based access for multi-user ecosystems',
        'Built live-scoring engine with real-time analytics and tournament management',
        'Integrated secure payments enabling reliable partner payouts at scale',
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: 'AI Animation Video Generator',
      role: 'Backend Engineer',
      shortDesc: 'LLM-powered text-to-video pipeline with distributed Python workers and FFmpeg rendering',
      techStack: ['Node.js', 'TypeScript', 'Python', 'RabbitMQ', 'FFmpeg', 'React'],
      fullDescription: `Automated educational video generation from text prompts.

**Problem**: Manual animation creation was time-consuming and expensive.

**Solution**:
• LLM-powered scene script generation with precise prompt engineering
• Distributed frame rendering across Python workers running Manim
• RabbitMQ job queues for reliable cross-language communication
• React drag-drop editor for post-generation customization
• Intelligent caching reducing redundant computation

**Impact**: 60% faster rendering through parallelization. Enabled non-technical users to create professional animations.`,
      keyMetrics: ['60% reduction in render time', '100+ concurrent rendering jobs', '40% compute savings on selective regeneration'],
    },
    {
      id: 2,
      title: 'DocSync - AI Documentation Tool',
      role: 'Backend Architect',
      shortDesc: 'Event-driven microservice converting code and schemas into searchable API docs automatically',
      techStack: ['Node.js', 'TypeScript', 'RabbitMQ', 'GitHub API', 'React'],
      fullDescription: `Intelligent documentation system that keeps API docs synchronized with code.

**Problem**: API documentation becomes stale. Developers waste time maintaining docs or let them rot.

**Solution**:
• GitHub OAuth integration with webhook monitoring
• Event-driven microservice pipeline for reliable updates
• AI-powered schema-to-doc generation
• Change-detection logic surfacing meaningful diffs
• Collaborative editor with real-time syncing

**Impact**: Eliminated 80% of manual documentation work. Docs stay current with code.`,
      keyMetrics: ['80% reduction in manual effort', 'Sub-second webhook latency', '500+ API endpoints managed'],
    },
    {
      id: 3,
      title: 'Fitness Analytics Platform',
      role: 'Backend Architect',
      shortDesc: 'Multi-source fitness data aggregation with normalization pipeline and AI-powered insights',
      techStack: ['Node.js', 'TypeScript', 'OAuth', 'WebSocket', 'React'],
      fullDescription: `Unified platform aggregating data from multiple fitness APIs.

**Problem**: User fitness data scattered across platforms with no unified view.

**Solution**:
• OAuth integrations with 8+ fitness providers
• Normalization pipeline unifying metrics and timezones
• Intelligent materialization layer cutting API calls by 70%
• AI analytics engine generating personalized insights
• WebSocket dashboards streaming live analysis

**Impact**: Users gained complete fitness visibility. Coaches tracked athletes holistically.`,
      keyMetrics: ['70% API call reduction', '<2s latency over WebSocket', '5+ fitness platforms per user'],
    },
  ],
};

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-linear-to-b from-slate-900 via-slate-900 to-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          RT
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#experience" className="text-slate-300 hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
          <a href="mailto:rishabh.tyagi2311@gmail.com" className="px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-xs font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
            Let's Talk
          </a>
        </nav>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-300">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700/50 p-6 space-y-4">
          <a href="#about" className="block text-slate-300 hover:text-cyan-400">About</a>
          <a href="#skills" className="block text-slate-300 hover:text-cyan-400">Skills</a>
          <a href="#experience" className="block text-slate-300 hover:text-cyan-400">Experience</a>
          <a href="#projects" className="block text-slate-300 hover:text-cyan-400">Projects</a>
          <a href="#contact" className="block text-slate-300 hover:text-cyan-400">Contact</a>
        </div>
      )}
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-linear-to-br from-slate-900 via-slate-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
            {portfolioData.personal.name}
          </h1>
          <p className="text-xl md:text-2xl bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
            {portfolioData.personal.headline}
          </p>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            {portfolioData.about}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <a href="#projects" className="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all inline-flex items-center gap-2 justify-center sm:justify-start">
            View My Work
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all text-center">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">About</h2>
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>
            I specialize in building backend systems that scale. Over the past year, I've worked on real-time analytics platforms, distributed job queues, and complex data pipelines that process millions of events.
          </p>
          <p>
            My philosophy: write code that's maintainable, systems that don't wake you up at 3 AM, and APIs that make developers smile. I obsess over performance, reliability, and clarity.
          </p>
          <p>
            When I'm not coding, I'm exploring distributed systems patterns, contributing to open source, and mentoring junior developers. I believe in the power of clear communication and pragmatic solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-linear-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16">Technical Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(portfolioData.skills).map(([category, skills]) => (
            <div key={category} className="p-6 rounded-lg border border-slate-700/50 bg-linear-to-br from-slate-800 to-slate-800/50 hover:border-cyan-500/50 transition-all">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16">Experience</h2>
        
        <div className="space-y-8">
          {portfolioData.experience.map((job, idx) => (
            <div key={idx} className="group relative p-6 rounded-lg border border-slate-700/50 bg-linear-to-br from-slate-800/50 to-slate-800/30 hover:border-cyan-500/30 hover:bg-slate-800/60 transition-all">
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-cyan-500/5 group-hover:to-cyan-500/0 rounded-lg transition-all pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                    <p className="text-cyan-400 font-semibold text-sm">{job.company}</p>
                  </div>
                  <p className="text-sm text-slate-400 mt-2 sm:mt-0">{job.period}</p>
                </div>
                <p className="text-sm text-slate-400 mb-4">{job.location}</p>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="text-slate-300 text-sm flex gap-3">
                      <span className="text-cyan-400 shrink-0 mt-1">→</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: ProjectItem;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative p-6 rounded-lg border border-slate-700/50 bg-linear-to-br from-slate-800 to-slate-800/50 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all cursor-pointer"
    >
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/5 rounded-lg transition-all pointer-events-none"></div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
        <p className="text-sm font-semibold text-cyan-400 mb-3">{project.role}</p>
        <p className="text-slate-300 text-sm mb-5 leading-relaxed">{project.shortDesc}</p>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600/50">
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600/50">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
        
        <button className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:gap-3 transition-all">
          Read Case Study
          <ExternalLink size={14} />
        </button>
      </div>
    </div>
  );
};

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-700/50 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-linear-to-b from-slate-800 to-slate-800/50 border-b border-slate-700/50 p-6 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <p className="text-cyan-400 text-sm mt-1 font-semibold">{project.role}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          <div>
            <h3 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wide">Overview</h3>
            <p className="text-slate-300 whitespace-pre-wrap text-sm leading-relaxed">{project.fullDescription}</p>
          </div>

          <div>
            <h3 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wide">Key Metrics</h3>
            <ul className="space-y-2">
              {project.keyMetrics.map((metric, i) => (
                <li key={i} className="text-slate-300 text-sm flex gap-3">
                  <span className="text-cyan-400 shrink-0">✓</span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wide">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectsProps {
  onProjectClick: (project: ProjectItem) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  return (
    <section id="projects" className="py-20 px-6 bg-linear-to-b from-slate-900 to-slate-800 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (): void => {
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
        <p className="text-slate-400 mb-12">Have a project in mind? Let's build something amazing.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              Send Message
            </button>
            {submitted && (
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/50 rounded-lg text-cyan-400 text-sm">
                ✓ Message received! I'll get back to you within 24 hours.
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-cyan-400 font-semibold mb-6 text-sm uppercase tracking-wide">Contact</h3>
              <div className="space-y-4">
                <a
                  href="mailto:rishabh.tyagi2311@gmail.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <Mail size={20} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>rishabh.tyagi2311@gmail.com</span>
                </a>
                <a
                  href="tel:+919650397782"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <Phone size={20} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>+91 9650397782</span>
                </a>
                <a
                  href="https://linkedin.com/in/rishabh-tyagi-486379245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <Linkedin size={20} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/rishabhtyagi2311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <Github size={20} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <p className="text-slate-300 text-sm leading-relaxed">
                I'm always interested in discussing new opportunities, interesting problems, and collaborations. Let's connect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 bg-slate-950 border-t border-slate-800 text-slate-400 text-sm text-center">
      <div className="max-w-6xl mx-auto">
        <p>© 2025 Rishabh Tyagi. Crafted with attention to detail.</p>
      </div>
    </footer>
  );
};


const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects onProjectClick={setSelectedProject} />
      <Contact />
      <Footer />
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default App;