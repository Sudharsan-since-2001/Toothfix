import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute left-0 bottom-0 w-full h-[80%] bg-[#F0F4F4] rounded-t-[80px] -z-10"></div>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Images Area */}
          <div className="flex-1 w-full relative h-[400px] md:h-[600px]">
            {/* Image 1 (Back) */}
            <div className="absolute top-0 left-0 w-[65%] h-[70%] rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[20px] rounded-br-[20px] overflow-hidden shadow-lg z-10">
               <img 
                 src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                 alt="Patient smiling"
                 className="w-full h-full object-cover" 
               />
            </div>
            
            {/* Image 2 (Front) */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[60%] border-8 border-white rounded-[40px] overflow-hidden shadow-2xl z-20">
               <img 
                 src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                 alt="Dentist consultation"
                 className="w-full h-full object-cover" 
               />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 lg:pl-10">
            <h2 className="font-serif text-4xl md:text-5xl text-dark leading-tight mb-8">
              At ToothFix, we are dedicated to providing <span className="italic text-primary/80">top-quality</span> dental care with a personal touch.
            </h2>
            
            <div className="space-y-6 text-gray-500 font-light text-lg">
              <p>
                Our experienced team of professionals is committed to your oral health, offering a wide range of services to meet your unique needs.
              </p>
              <p>
                We take pride in creating a warm and welcoming environment where you can feel at ease during every visit. Your smile is our priority, and we're here to ensure it's a healthy, beautiful one. Trust us for comprehensive dental solutions and a compassionate approach to dentistry.
              </p>
            </div>

            <button className="mt-10 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-medium transition-all shadow-lg shadow-primary/30">
              Learn more
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;