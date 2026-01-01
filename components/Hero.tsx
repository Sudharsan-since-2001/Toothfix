import React from 'react';
import { ArrowRight, ArrowUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#F0F4F4] pt-32 pb-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex-1 lg:max-w-[50%] pt-8">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.1] text-dark mb-6">
              Your Bright <br />
              <span className="italic text-primary/80">Smile Awaits</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg mb-10 font-light">
              Experience top-tier dental care with a gentle touch. We are dedicated to bringing out your best smile with modern technology and compassion.
            </p>
            
            <button className="group flex items-center gap-3 bg-white text-dark pl-6 pr-2 py-2 rounded-full border border-gray-200 hover:shadow-lg transition-all duration-300">
              <span className="font-medium text-sm">Book An Appointment</span>
              <span className="bg-transparent group-hover:translate-x-1 transition-transform p-2 rounded-full">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>

          {/* Hero Image & Overlay */}
          <div className="flex-1 w-full relative">
             {/* Decorative Background Blob */}
            <div className="absolute top-0 right-0 w-[120%] h-full bg-gradient-to-l from-white/40 to-transparent rounded-l-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="relative rounded-tl-[120px] rounded-br-[40px] rounded-bl-[40px] rounded-tr-[40px] overflow-hidden shadow-2xl shadow-primary/10 w-full h-[500px] md:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2100&auto=format&fit=crop" 
                alt="Smiling Dental Professional" 
                className="w-full h-full object-cover object-top"
              />
              
              {/* Floating scroll indicator */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                 <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm">
                    <span className="text-xs">↓</span>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-primary/80 text-white flex items-center justify-center backdrop-blur-sm shadow-lg">
                    <ArrowUp size={16} />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Info Bar */}
      <div className="max-w-[1400px] mx-auto px-6 mt-16 md:-mt-12 relative z-20">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-2 md:p-4 shadow-xl shadow-gray-200/50 flex flex-col md:flex-row items-center justify-between gap-4 border border-white">
          
          <div className="px-6 md:px-10 py-4 border-r border-gray-100 w-full md:w-auto text-center md:text-left">
             <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1 block">OUR CASES</span>
             <div className="h-1 w-10 bg-primary/30 rounded-full mx-auto md:mx-0"></div>
          </div>

          <div className="bg-[#E2E8E8] rounded-2xl p-4 md:px-8 md:py-6 flex flex-col items-center justify-center min-w-[180px]">
             <span className="text-2xl md:text-3xl font-bold text-dark">+300</span>
             <span className="text-xs text-gray-500 font-medium">patients treated</span>
          </div>

          <div className="flex-1 flex justify-around md:justify-end gap-8 px-6 md:px-10 w-full">
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-sm font-medium text-dark">About Us</span>
              <ArrowRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="w-px h-6 bg-gray-200"></div>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-dark transition-colors">Team</a>
            <div className="w-px h-6 bg-gray-200 hidden md:block"></div>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-dark transition-colors hidden md:block">Why choose us</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;