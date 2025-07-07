'use client';

import { useState, useEffect, useRef } from 'react';
import ProjectDetail from './ProjectDetail';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const projects = [
    {
      id: 1,
      title: 'SecondCycle',
      description: 'e-commerce second-hand goods platform website with product catalog and offer features',
      fullDescription: 'A comprehensive e-commerce platform built from scratch with modern web technologies. Features include user authentication, product catalog with search and filtering, shopping cart functionality, order management, and responsive design that works seamlessly across all devices.',
      image: '/SecondCycle.png',
      images: ['/SecondCycle.png', '/SecondCycle-etalase.png', '/SecondCycle-pesanan.png', '/SecondCycle-detail.png'],
      category: 'frontend',
      tech: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
      features: ['Product Catalog', 'Shopping Cart', 'Responsive Design', 'Search & Filter', 'Order Management', 'Payment Integration', 'Admin Dashboard'],
      github: 'https://github.com/HaekalAlif/PBL-E-Commerce',
      demo: 'not deployed',
      status: 'completed',
      role: 'Frontend Developer'
    },
    {
      id: 2,
      title: 'Resonance Residence',
      description: 'Real estate website showcasing Resonance Residence property listings.',
      fullDescription: 'A real estate website designed to showcase Resonance Residence properties with elegant design and smooth user experience. Features property listings, detailed property pages, and responsive design optimized for both desktop and mobile viewing.',
      image: '/resonanceresidence.png',
      images: ['/resonanceresidence.png', '/resonanceresidence-about.png','/resonanceresidence-property.png'],
      category: 'frontend',
      tech: ['Next.js', 'Tailwind CSS'],
      features: ['Landing Page', 'Property Listings', 'Responsive Layout', 'Company Profile', 'Contact Forms', 'Location Maps'],
      github: 'https://github.com/ReinDaze/Resonance-Residence',
      demo: 'https://resonancesamban.com',
      status: 'completed',
      role: 'Frontend Developer'
    },
    {
      id: 3,
      title: 'LittleFairyFlorist',
      description: 'Bouquet flower shop website with catalog display and whatsapp contact integration for orders',
      fullDescription: 'An elegant and beautiful website for a flower shop featuring a stunning product catalog, service information, and contact details. The design emphasizes visual appeal with beautiful imagery and smooth animations to create an enchanting user experience.',
      image: '/littlefairyflorist.png',
      images: ['/littlefairyflorist.png',],
      category: 'frontend',
      tech: ['Vue.js', 'Tailwind CSS', 'Laravel'],
      features: ['Flower Catalog', 'Contact Information', 'Gallery', 'Admin Dashboard'],
      github: 'https://github.com/ReinDaze/LittleFairyFlorist',
      demo: 'not deployed',
      status: 'completed',
      role: 'Frontend Developer'
    },
    {
      id: 4,
      title: 'StudySync',
      description: 'Full-stack website to determine learning style type with questionnaire',
      fullDescription: 'Full-stack website to determine learning style type with questionnaire.',
      image: '/StudySync.png',
      images: ['/StudySync.png', '/StudySync-tes.png', '/StudySync-hasil.png', '/StudySync-riwayat.png'],
      category: 'fullstack',
      tech: ['Laravel', 'MySQL', 'Vue.js', 'Tailwind CSS'],
      features: ['User-friendly UI', 'Questionnaire', 'History Test', 'Admin Dashboard' ],
      github: 'https://github.com/ReinDaze/StudySyncs',
      demo: 'not deployed',
      status: 'completed',
      role: 'Full Stack Developer'
    },
    {
      id: 5,
      title: 'Vocation of The Champions',
      description: 'Website for national level vocational competitions, which aims to provide information related to competitions',
      fullDescription: 'Website for national level vocational competitions, which aims to provide information related to competitions',
      image: '/VOC.png',
      images: ['/VOC.png','/VOC-kategori.png', '/VOC-timeline.png'],
      category: 'frontend',
      tech: ['HTML', 'Tailwind CSS', 'PHP'],
      features: ['Competitions Listing', 'Competitions Timeline', 'Responsive Design', 'News & Updates'],
      github: 'https://github.com/ReinDaze/Vocation-of-The-Champions',
      demo: 'https://vocationofthechampions.com/',
      status: 'completed',
      role: 'Frontend Developer'
    },
    {
      id: 6,
      title: 'BEM Sekolah Vokasi UNS 2024',
      description: 'Official website for BEM Sekolah Vokasi UNS 2024 showcasing organizational information and work programs of the organization',
      fullDescription: 'Official website for BEM Sekolah Vokasi UNS 2024 showcasing organizational information and work programs of the organization',
      image: '/BEMSV.png',
      images: ['/BEMSV.png', '/BEMSV-organization.png', '/BEMSV-division.png'],
      category: 'frontend',
      tech: ['HTML', 'CSS', 'Javascript'],
      features: ['Landing Page', 'Organizational Structure Listing', 'Responsive Design', 'News Section', 'Contact Information'],
      github: 'https://github.com/ReinDaze/BEM-SV-Website',
      demo: 'https://bemsvuns.com',
      status: 'completed',
      role: 'Frontend Developer'
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
    <div 
      className={`group transition-all duration-1000 delay-${index * 100} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all duration-300">
        {/* Project Image/Icon */}
        <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center overflow-hidden">
          {project.image.startsWith('/') ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
              {project.image}
            </div>
          )}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === 'completed' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
            }`}>
              {project.status === 'completed' ? 'Completed' : 'In Progress'}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span 
                key={tech} 
                className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs border border-purple-500/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              {project.features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="text-purple-400 text-xs">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setSelectedProject(project)}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg text-center font-medium hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Details
            </button>
            {project.demo === 'not deployed' ? (
              <div className="flex-1 border border-gray-600 text-gray-400 py-2 px-4 rounded-lg text-center font-medium cursor-not-allowed flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                </svg>
                Not Deployed
              </div>
            ) : (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-purple-500/30 text-purple-400 py-2 px-4 rounded-lg text-center font-medium hover:bg-purple-500/10 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
          
          {/* Secondary Action Buttons */}
          <div className="flex gap-3 mt-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-600 text-gray-400 py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-600/10 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white scale-105'
                  : 'bg-slate-800/50 text-gray-300 hover:text-white hover:bg-slate-700/50 border border-purple-500/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800/50 border border-purple-500/30 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-500/10 hover:scale-105 transition-all duration-200"
          >
            View More Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
