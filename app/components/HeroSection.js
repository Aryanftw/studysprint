'use client'
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      style={{ backgroundImage: "url('/bg-image.svg')" }}
      className={`
        ${inter.className}
        relative text-white
        w-full
        bg-cover
        bg-center
        bg-no-repeat
        flex flex-col items-center justify-center
        px-4 sm:px-6 md:px-8 text-center py-36 md:py-40
        overflow-hidden
      `}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-12 left-12 w-32 h-32 rounded-full bg-white/5 blur-xl"></div>
        <div className="absolute bottom-12 right-12 w-48 h-48 rounded-full bg-white/5 blur-xl"></div>
      </div>

      {/* Content Container */}
      <div 
        className="relative z-10 max-w-4xl mx-auto transition-all duration-1000"
        style={{ 
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        {/* Heading */}
        <div 
          className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight space-y-2 mb-8 transition-opacity duration-1000 delay-300"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <p className="tracking-tight">Crush Your Goals,</p> 
          <p className="tracking-tight">One Sprint at a Time.</p>
        </div>

        {/* Description */}
        <div 
          className="space-y-4 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto mb-12 transition-opacity duration-1000 delay-500"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <p>
            Stay focused, beat procrastination, and study with purpose together.
          </p>
          <p>
            Join live sprints, track progress, and turn study time into power sessions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-opacity duration-1000 delay-700"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <button className="cursor-pointer group
            px-8 py-4 w-64 sm:w-auto rounded-full bg-gradient-to-r from-[#E5CBD6] to-[#BAD1F7] 
            text-[#101010] font-medium text-lg
            hover:shadow-lg transition-all duration-300 flex items-center justify-center">
            Join Now
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 ease-in-out" 
                 style={{ transform: 'translateX(0)' }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          
          <a href="#learn-more" className="text-gray-300 hover:text-white underline-offset-4 hover:underline transition-all px-4 py-2">
            Learn more
          </a>
        </div>
        
        
        
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 delay-1000"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-center justify-center relative">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}