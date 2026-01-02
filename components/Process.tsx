import React from 'react';
import { ChevronRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section className="bg-[#F0F4F4] pt-24 pb-32">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center relative">
            <span className="font-serif text-8xl text-white drop-shadow-sm opacity-60 font-bold mb-[-30px] z-0">01</span>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-dark mb-4">Schedule</h3>
              <p className="text-gray-500 text-sm max-w-[200px] mx-auto">
                Easy booking for your convenience.
              </p>
            </div>
            {/* Arrow for Desktop */}
            <div className="hidden md:block absolute top-1/2 right-[-20%] text-gray-300">
              <ChevronRight size={24} />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center relative">
            <span className="font-serif text-8xl text-white drop-shadow-sm opacity-60 font-bold mb-[-30px] z-0">02</span>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-dark mb-4">Assessment</h3>
              <p className="text-gray-500 text-sm max-w-[200px] mx-auto">
                Comprehensive oral health evaluation.
              </p>
            </div>
            {/* Arrow for Desktop */}
            <div className="hidden md:block absolute top-1/2 right-[-20%] text-gray-300">
              <ChevronRight size={24} />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center relative">
            <span className="font-serif text-8xl text-white drop-shadow-sm opacity-60 font-bold mb-[-30px] z-0">03</span>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-dark mb-4">Treatment</h3>
              <p className="text-gray-500 text-sm max-w-[200px] mx-auto">
                Tailored dental care solutions.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-20 text-center">
          <button className="bg-primary hover:bg-primary/90 text-white px-10 py-3 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-primary/20">
            Book now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;