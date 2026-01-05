import React from 'react';

// Custom SVG Dental Icons for a more specialized look
const ToothIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 3C5 3 3 5 3 9C3 13 5 13 8 13C8 13 9 13 9 14.5C9 16 7 17.5 7 19C7 20.5 8.5 21.5 10 21C11.5 20.5 12 18 12 18C12 18 12.5 20.5 14 21C15.5 21.5 17 20.5 17 19C17 17.5 15 16 15 14.5C15 13 16 13 16 13C19 13 21 13 21 9C21 5 19 3 17 3H7Z" />
  </svg>
);

const BracesIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 3C5 3 3 5 3 9C3 13 5 13 8 13C8 13 9 13 9 14.5C9 16 7 17.5 7 19C7 20.5 8.5 21.5 10 21C11.5 20.5 12 18 12 18C12 18 12.5 20.5 14 21C15.5 21.5 17 20.5 17 19C17 17.5 15 16 15 14.5C15 13 16 13 16 13C19 13 21 13 21 9C21 5 19 3 17 3H7Z" />
    <path d="M3 9H21" />
    <path d="M6 7V11M10 7V11M14 7V11M18 7V11" />
  </svg>
);

const PediatricIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 3C5 3 3 5 3 9C3 13 5 13 8 13C8 13 9 13 9 14.5C9 16 7 17.5 7 19C7 20.5 8.5 21.5 10 21C11.5 20.5 12 18 12 18C12 18 12.5 20.5 14 21C15.5 21.5 17 20.5 17 19C17 17.5 15 16 15 14.5C15 13 16 13 16 13C19 13 21 13 21 9C21 5 19 3 17 3H7Z" />
    <circle cx="9" cy="8" r="0.5" fill="currentColor" />
    <circle cx="15" cy="8" r="0.5" fill="currentColor" />
    <path d="M10 10.5C10 10.5 11 11.5 12 11.5C13 11.5 14 10.5 14 10.5" />
  </svg>
);

const ImplantIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 3C5 3 3 5 3 9C3 12 5 13 8 13C11 13 11.5 12.5 11.5 12.5V3H7Z" />
    <path d="M17 3C19 3 21 5 21 9C21 12 19 13 16 13C13 13 12.5 12.5 12.5 12.5V3H17Z" />
    <path d="M12 13V21M10 15H14M10 18H14" />
  </svg>
);

const CosmeticIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 3C5 3 3 5 3 9C3 13 5 13 8 13C8 13 9 13 9 14.5C9 16 7 17.5 7 19C7 20.5 8.5 21.5 10 21C11.5 20.5 12 18 12 18C12 18 12.5 20.5 14 21C15.5 21.5 17 20.5 17 19C17 17.5 15 16 15 14.5C15 13 16 13 16 13C19 13 21 13 21 9C21 5 19 3 17 3H7Z" />
    <path d="M19 4L20 6M22 5L20 6M20 8L20 6" strokeWidth="1" />
    <path d="M4 14L5 16M7 15L5 16M5 18L5 16" strokeWidth="1" />
  </svg>
);

const RootCanalIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 3C5 3 3 5 3 9C3 13 5 13 8 13V18C8 19.5 9.5 21 11 20L12 18L13 20C14.5 21 16 19.5 16 18V13C19 13 21 13 21 9C21 5 19 3 17 3H7Z" />
    <path d="M11 6V16M13 6V16" opacity="0.3" />
  </svg>
);

const GumIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 12C4 10 6 8 12 8C18 8 20 10 20 12V16H4V12Z" fill="currentColor" fillOpacity="0.1" />
    <path d="M7 3C5 3 3 5 3 9V13M17 3C19 3 21 5 21 9V13" />
    <path d="M3 13C3 13 6 12 12 12C18 12 21 13 21 13V18H3V13Z" />
  </svg>
);

const ExtractionIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 3C5 3 3 5 3 9C3 13 5 13 8 13C8 13 9 13 9 14.5C9 16 7 17.5 7 19C7 20.5 8.5 21.5 10 21C11.5 20.5 12 18 12 18" strokeDasharray="2 2" />
    <path d="M21 9C21 5 19 3 17 3H12" strokeDasharray="2 2" />
    <path d="M15 15L21 21M21 15L15 21" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const WhiteningIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 3C5 3 3 5 3 9C3 13 5 13 8 13C8 13 9 13 9 14.5C9 16 7 17.5 7 19C7 20.5 8.5 21.5 10 21C11.5 20.5 12 18 12 18C12 18 12.5 20.5 14 21C15.5 21.5 17 20.5 17 19C17 17.5 15 16 15 14.5C15 13 16 13 16 13C19 13 21 13 21 9C21 5 19 3 17 3H7Z" fill="currentColor" fillOpacity="0.05" />
    <circle cx="12" cy="9" r="4" strokeDasharray="2 2" />
    <path d="M12 2V4M12 14V16M19 9H17M7 9H5" />
  </svg>
);

const Services: React.FC = () => {
  const services = [
    {
      title: 'GENERAL DENTISTRY',
      icon: <ToothIcon className="w-10 h-10" />,
    },
    {
      title: 'ORTHODONTICS (BRACES)',
      icon: <BracesIcon className="w-10 h-10" />,
    },
    {
      title: 'PEDIATRIC DENTISTRY (KIDS)',
      icon: <PediatricIcon className="w-10 h-10" />,
    },
    {
      title: 'DENTAL IMPLANTS',
      icon: <ImplantIcon className="w-10 h-10" />,
    },
    {
      title: 'COSMETIC DENTISTRY',
      icon: <CosmeticIcon className="w-10 h-10" />,
    },
    {
      title: 'ROOT CANAL TREATMENT',
      icon: <RootCanalIcon className="w-10 h-10" />,
    },
    {
      title: 'GUM TREATMENT',
      icon: <GumIcon className="w-10 h-10" />,
    },
    {
      title: 'TOOTH EXTRACTION',
      icon: <ExtractionIcon className="w-10 h-10" />,
    },
    {
      title: 'TEETH WHITENING',
      icon: <WhiteningIcon className="w-10 h-10" />,
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-[#F5F7F7]">
      <div className="w-full px-4 md:px-12 lg:px-16">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tighter uppercase">OUR SERVICES</h2>
          <div className="w-16 lg:w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-500 font-bold tracking-[0.2em] lg:tracking-[0.4em] text-[10px] md:text-sm uppercase max-w-xs mx-auto md:max-w-none">PREMIUM DENTAL SOLUTIONS FOR YOUR PERFECT SMILE</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 lg:p-12 rounded-[32px] lg:rounded-[40px] shadow-[0_10px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 border border-gray-50 overflow-hidden"
            >
              {/* Decorative Background Icon */}
              <div className="absolute -right-8 -bottom-8 text-primary/5 group-hover:text-primary/10 transition-colors duration-500 transform rotate-12 scale-150">
                {service.icon}
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#F0F4F4] group-hover:bg-primary rounded-[24px] lg:rounded-[32px] flex items-center justify-center mb-6 lg:mb-10 text-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 shadow-sm">
                  {service.icon}
                </div>

                <h3 className="text-lg lg:text-xl font-black text-gray-900 tracking-tight leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <div className="w-0 group-hover:w-16 h-1.5 bg-primary/20 transition-all duration-500 mt-4 lg:mt-6 rounded-full"></div>
              </div>

              {/* Subtle Corner Badge */}
              <div className="absolute top-6 right-6 lg:top-8 lg:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img src="/Toothfix Logo.png" alt="logo" className="w-5 h-5 lg:w-6 lg:h-6 object-contain grayscale opacity-30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
