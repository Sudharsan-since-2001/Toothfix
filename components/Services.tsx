import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'General Dentistry',
      description: 'Comprehensive dental care for patients of all ages, including check-ups, cleanings, and preventive care.',
      icon: '🦷'
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with our cosmetic treatments including teeth whitening and veneers.',
      icon: '😁'
    },
    {
      title: 'Emergency Care',
      description: 'Immediate attention for dental emergencies to relieve pain and prevent further complications.',
      icon: '🚑'
    },
    {
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth that look and function like natural teeth.',
      icon: '🦷'
    },
    {
      title: 'Orthodontics',
      description: 'Straighten your teeth and correct your bite with our orthodontic treatments.',
      icon: '🦷'
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Gentle dental care designed specifically for children and young adults.',
      icon: '👶'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
