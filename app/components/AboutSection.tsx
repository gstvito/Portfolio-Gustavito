'use client';

import { useState, useEffect, useRef } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  const stats = [
    { value: '13+', label: 'Technologies' },
    { value: '6+', label: 'Projects Built' },
    { value: '1+', label: 'Years Learning' },
    { value: '3+', label: 'Frameworks' },
  ];

  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <ellipse cx="12" cy="12" rx="8" ry="3"/>
          <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(120 12 12)"/>
        </svg>
      ),
      title: 'React Ecosystem',
      description: 'Proficient in React, Next.js with modern JavaScript/TypeScript development.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      ),
      title: 'Tailwind CSS',
      description: 'Creating beautiful, responsive designs with utility-first CSS framework.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: 'Fullstack Explorer',
      description: 'Exploring backend technologies including Laravel, Node.js, and databases.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"/>
        </svg>
      ),
      title: 'Project Portfolio',
      description: 'Real-world projects from e-commerce platforms to elegant real estate sites.'
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6">

              <p className="text-gray-300 text-lg leading-relaxed">
                A passionate junior frontend developer with hands-on experience in
                React, Next.js, and modern JavaScript technologies. I focus on
                creating engaging, responsive user interfaces while exploring
                fullstack development to build complete web applications that
                deliver exceptional user experiences through clean code and
                modern design principles.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                My portfolio features StudySync, a comprehensive learning
                platform that helps users identify their optimal learning style
                whether auditory, visual, or kinesthetic. This project
                demonstrates my frontend expertise in creating intuitive user
                interfaces with seamless interactions, while also showcasing my
                growing fullstack capabilities through API integration and
                dynamic content management.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Currently, I am actively expanding my frontend expertise with
                advanced React patterns and Next.js features, while
                enthusiastically exploring fullstack technologies including
                Node.js, database management, and backend development. This
                continuous learning journey helps me bridge the gap between
                frontend innovation and backend functionality, enabling me to
                contribute to complete digital solutions.
              </p>

              {/* Skills Highlight */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                <h4 className="text-xl font-semibold text-white mb-4">
                  What I&apos;m focusing on:
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="text-purple-400">✓</span>
                    Advanced React patterns & hooks
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-400">✓</span>
                    Modern CSS & responsive design
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-400">✓</span>
                    Fullstack development exploration
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-400">✓</span>
                    Frontend performance optimization
                  </li>
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-4 flex justify-center lg:justify-start">
                <a
                  href="/CV Gustavito Fajrul Izzati Deva Putra (2025).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200"
                >
                  Download CV
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Highlights */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200"
                >
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{highlight.icon}</div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">
                        {highlight.title}
                      </h5>
                      <p className="text-gray-400 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
