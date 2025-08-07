'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  credentialUrl?: string;
  skills: string[];
}

export default function CertificatesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 certificates initially
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

  // Sample certificates data - replace with your actual certificates
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Rest API (Intermediate) Certificate",
      issuer: "Hackerrank",
      date: "2025",
      image: "/restapi_hackerrank.png",
      description: "Intermediate-level certification demonstrating proficiency in designing and implementing RESTful APIs, including HTTP methods, status codes, and API best practices.",
      credentialUrl: "https://www.hackerrank.com/certificates/iframe/21d3285f3bb3",
      skills: ["REST API", "JavaScript"]
    },
    {
      id: 2,
      title: "Javascript (Intermediate) Certificate",
      issuer: "Hackerrank",
      date: "2025",
      image: "/javascript_hackerrank.png",
      description: "Intermediate JavaScript certification covering advanced programming concepts, ES6+ features, asynchronous programming, and algorithm problem solving.",
      credentialUrl: "https://freecodecamp.org/certification/username/javascript",
      skills: ["JavaScript", "Algorithms", "Data Structures"]
    },
    {
      id: 3,
      title: "Belajar Membuat Front-End Web Pemula",
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: "/frontend_dicoding.png",
      description: "Comprehensive beginner course on front-end web development covering HTML structure, CSS styling, JavaScript fundamentals, DOM manipulation, and Browser Object Model (BOM).",
      credentialUrl: "https://drive.google.com/file/d/1z_4YoiIEQHiDv2eIUF_NemPEc4RG4sEe/view",
      skills: ["HTML", "CSS", "Javascript", "BOM", "DOM"]
    },
    {
      id: 4,
      title: "Belajar Dasar Pemrograman Javascript",
      issuer: "Dicoding Indonesia",
      date: "2025",
      image: "/javascript_dicoding.png",
      description: "Fundamental JavaScript programming course covering syntax, data types, functions, control structures, object-oriented programming, and modern JavaScript features.",
      credentialUrl: "https://drive.google.com/file/d/1xMZopogBG9cGuI6edv7zHwNdtXSW99Hw/view",
      skills: ["Javascript"]
    },
    {
      id: 5,
      title: "Front-End Intermediate",
      issuer: "PT Sistem Solutionlabs Indonesia",
      date: "2024",
      image: "/frontend_sistem.png",
      description: "Intermediate front-end development certification focusing on Vue.js framework, component-based architecture, state management, and modern JavaScript development practices.",
      credentialUrl: "https://drive.google.com/file/d/1ehv0pUPg1iZv-IklMDL473EyFl0beq-H/view",
      skills: ["Vue.js"]
    },
    {
      id: 6,
      title: "JavaFundamentals",
      issuer: "Oracle",
      date: "2024",
      image: "/java_oracle.png",
      description: "Oracle-certified Java fundamentals course covering object-oriented programming principles, Java syntax, data structures, exception handling, and core Java libraries.",
      credentialUrl: "https://drive.google.com/file/d/1Y68beIjtXQ-Fs_Wchx-miXmFTB75e1CB/view",
      skills: ["Java"]
    },
    {
      id: 7,
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      date: "2024",
      image: "/webdev_dicodin.png",
      description: "Basic web programming course introducing HTML markup language for content structure and CSS for styling and layout design in web development.",
      credentialUrl: "https://drive.google.com/file/d/15BvtPJvf8NUGzij-rsJZ6XvO6rhSZvus/view",
      skills: ["HTML", "CSS"]
    },
    {
      id: 8,
      title: "CCNav7: Introduction to Networks",
      issuer: "Cisco",
      date: "2024",
      image: "/ccna_cisco.png",
      description: "Cisco CCNA certification covering network fundamentals, network protocols, IP addressing, routing and switching concepts, and network security basics.",
      credentialUrl: "https://drive.google.com/file/d/1z0YR2l3OvsBcbT5fO3jxTxB-93EAfvp8/view",
      skills: ["Networking", "CCNA", "Cisco"]
    },
    {
      id: 9,
      title: "Front-End Developer",
      issuer: "Dibimbing.id",
      date: "2024",
      image: "/frontend_dibimbing.png",
      description: "Comprehensive front-end developer bootcamp covering HTML semantics, CSS frameworks, JavaScript programming, responsive design, and modern web development workflows.",
      credentialUrl: "https://drive.google.com/file/d/19WPYEH3rktnywALMX5k_CZJSE6j71XAX/view",
      skills: ["HTML", "CSS", "Javascript"]
    }
  ];

  const visibleCertificates = certificates.slice(0, visibleCount);
  const hasMoreCertificates = visibleCount < certificates.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, certificates.length));
  };

  const CertificateCard = ({ certificate, index }: { certificate: Certificate, index: number }) => (
    <div 
      className={`group transition-all duration-1000 delay-${index * 100} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
           onClick={() => setSelectedCertificate(certificate)}>
        
        {/* Certificate Image */}
        <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mb-4 overflow-hidden">
          <Image
            src={certificate.image}
            alt={certificate.title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to trophy emoji if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-white/10 backdrop-blur-sm"><div class="text-6xl">🏆</div></div>';
              }
            }}
          />
        </div>

        {/* Certificate Info */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {certificate.title}
          </h3>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-purple-400 font-medium">{certificate.issuer}</span>
            <span className="text-gray-400">{certificate.date}</span>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
            {certificate.description}
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
              <span 
                key={skillIndex}
                className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
              >
                {skill}
              </span>
            ))}
            {certificate.skills.length > 3 && (
              <span className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-xs font-medium border border-gray-500/30">
                +{certificate.skills.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* View Button */}
        <div className="mt-4 pt-4 border-t border-purple-500/20">
          <div className="flex items-center justify-between">
            <span className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
              View Certificate
            </span>
            <svg className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="certificates" ref={sectionRef} className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Certificates</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development through various courses and certifications
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleCertificates.map((certificate, index) => (
            <CertificateCard 
              key={certificate.id} 
              certificate={certificate} 
              index={index} 
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreCertificates && (
          <div className={`text-center transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={handleLoadMore}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
            >
              Load More Certificates
            </button>
          </div>
        )}
      </div>

      {/* Certificate Detail Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
             onClick={() => setSelectedCertificate(null)}>
          <div className="bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/20"
               onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="p-6 border-b border-purple-500/20">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">{selectedCertificate.title}</h3>
                <button 
                  onClick={() => setSelectedCertificate(null)}
                  className="text-gray-400 hover:text-white p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-medium text-lg">{selectedCertificate.issuer}</span>
                  <span className="text-gray-400">{selectedCertificate.date}</span>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {selectedCertificate.description}
                </p>

                <div>
                  <h4 className="text-white font-semibold mb-3">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertificate.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedCertificate.credentialUrl && (
                  <div className="pt-4">
                    <a 
                      href={selectedCertificate.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-200"
                    >
                      View Credential
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
