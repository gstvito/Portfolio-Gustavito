'use client';

import { useState, useEffect } from 'react';

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    description: string;
    fullDescription?: string;
    image: string;
    images?: string[];
    category: string;
    tech: string[];
    features: string[];
    github: string;
    demo: string;
    status: string;
    role?: string;
  };
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Use project images if available, otherwise use main image
  const projectImages = project.images || [project.image];

  useEffect(() => {
    setIsVisible(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderImage = (imageSrc: string, alt: string) => {
    if (imageSrc.startsWith('/')) {
      return (
        <img 
          src={imageSrc} 
          alt={alt}
          className="w-full h-full object-cover"
        />
      );
    } else {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600/20 to-pink-600/20">
          <div className="text-8xl">{imageSrc}</div>
        </div>
      );
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className={`bg-slate-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/20 transition-all duration-500 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20 p-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{project.title}</h1>
            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status === 'completed' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              }`}>
                {project.status === 'completed' ? 'Completed' : 'In Progress'}
              </span>
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                {project.category}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {/* Image Carousel */}
          <div className="relative h-full mb-8 rounded-xl overflow-hidden bg-slate-800">
            {renderImage(projectImages[currentImageIndex], project.title)}
            
            {projectImages.length > 1 && (
              <>
                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20">
                  {currentImageIndex + 1} / {projectImages.length}
                </div>
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                        index === currentImageIndex 
                          ? 'bg-purple-400 border-purple-400 scale-110 shadow-lg shadow-purple-400/50' 
                          : 'bg-white/20 border-white/40 hover:bg-white/40 hover:border-white/60 hover:scale-105'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">About This Project</h2>
                <p className="text-gray-300 leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-slate-800 text-purple-300 px-4 py-2 rounded-lg border border-purple-500/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg border border-purple-500/10">
                      <span className="text-purple-400 text-sm mt-1">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                <div className="space-y-3">
                  {project.role && (
                    <div>
                      <span className="text-gray-400 text-sm">Role</span>
                      <p className="text-white">{project.role}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-gray-400 text-sm">Category</span>
                    <p className="text-white capitalize">{project.category}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Status</span>
                    <p className="text-white capitalize">{project.status}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {project.demo === 'not deployed' ? (
                  <div className="w-full bg-gray-600 text-gray-400 py-3 px-6 rounded-lg text-center font-medium cursor-not-allowed flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                    </svg>
                    Not Deployed
                  </div>
                ) : (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg text-center font-medium hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-purple-500/30 text-purple-400 py-3 px-6 rounded-lg text-center font-medium hover:bg-purple-500/10 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
