import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#F0F4F4] pt-32 pb-12 overflow-hidden">
      <div className="w-full px-4 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

          {/* Text Content */}
          <div className="flex-1 lg:max-w-[50%] pt-4 lg:pt-8 text-center lg:text-left">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.1] text-dark mb-6">
              Your Bright <br />
              <span className="italic text-primary/80">Smile Awaits</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg mb-10 font-light mx-auto lg:mx-0">
              Experience top-tier dental care with a gentle touch. We are dedicated to bringing out your best smile with modern technology and compassion.
            </p>

            <Link to="/book" className="group flex w-full sm:w-fit mx-auto lg:mx-0 items-center justify-center gap-3 bg-white text-dark pl-6 pr-2 py-2 rounded-full border border-gray-200 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 shadow-xl shadow-primary/10 relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <span className="font-bold text-sm relative z-10">Book An Appointment</span>
              <span className="bg-primary text-white p-2 rounded-full relative z-10 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>

          {/* Hero Image & Overlay */}
          <div className="flex-1 w-full relative mt-8 lg:mt-0">
            {/* Decorative Background Blob */}
            <div className="absolute top-0 right-0 w-[120%] h-full bg-gradient-to-l from-white/40 to-transparent rounded-l-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="relative rounded-tl-[80px] lg:rounded-tl-[120px] rounded-br-[40px] rounded-bl-[40px] rounded-tr-[40px] overflow-hidden shadow-2xl shadow-primary/10 w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                alt="Modern Dental Care"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;