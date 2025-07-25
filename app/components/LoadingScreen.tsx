'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo/Icon */}
        <div className="w-20 h-20 mx-auto mb-8 relative">
          <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-400 rounded-full flex items-center justify-center text-3xl animate-float">
            👨‍💻
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-400 rounded-full blur-md opacity-50 animate-pulse"></div>
        </div>

        {/* Name */}
        <h1 className="text-4xl font-bold text-white mb-4">
          Gustavito<span className="text-purple-400">.</span>
        </h1>

        {/* Loading Text */}
        <p className="text-gray-300 mb-8">Loading portfolio...</p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-200"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <div className="text-purple-400 text-sm">{loadingProgress}%</div>
        </div>
      </div>
    </div>
  );
}
