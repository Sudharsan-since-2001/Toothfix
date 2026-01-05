import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute left-0 bottom-0 w-full h-[80%] bg-[#F0F4F4] rounded-t-[80px] -z-10"></div>

      <div className="w-full px-4 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Images Area */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="relative rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070"
                alt="Modern dental clinic"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 lg:pl-10 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-dark leading-tight mb-6 lg:mb-8">
              At ToothFix, we are dedicated to providing <span className="italic text-primary/80">top-quality</span> dental care with a personal touch.
            </h2>

            <div className="space-y-4 lg:space-y-6 text-gray-500 font-light text-base md:text-lg">
              <p>
                Our experienced team of professionals is committed to your oral health, offering a wide range of services to meet your unique needs.
              </p>
              <p className="hidden sm:block">
                We take pride in creating a warm and welcoming environment where you can feel at ease during every visit. Your smile is our priority, and we're here to ensure it's a healthy, beautiful one.
              </p>
            </div>

            <a href="/why-choose-us" className="mt-8 lg:mt-10 inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 lg:py-4 rounded-2xl font-medium transition-all shadow-lg shadow-primary/30 active:scale-95">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;