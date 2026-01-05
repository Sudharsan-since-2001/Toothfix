import React from 'react';
import { Shield, Clock, Heart, Star } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
    const reasons = [
        {
            icon: <Shield className="w-8 h-8 text-primary" />,
            title: "Quality Care",
            desc: "We use the latest technology and techniques to ensure you receive the highest standard of dental care."
        },
        {
            icon: <Clock className="w-8 h-8 text-primary" />,
            title: "Patient Convenience",
            desc: "Flexible scheduling and emergency appointments to fit your busy lifestyle without compromise."
        },
        {
            icon: <Heart className="w-8 h-8 text-primary" />,
            title: "Gentle Approach",
            desc: "Our team is dedicated to providing a comfortable and anxiety-free experience for every patient."
        },
        {
            icon: <Star className="w-8 h-8 text-primary" />,
            title: "Expert Team",
            desc: "Highly qualified dental professionals with years of experience across all specialized treatments."
        }
    ];

    return (
        <div className="pt-24 lg:pt-32 pb-20 lg:pb-24 px-4 md:px-12 lg:px-16 min-h-screen bg-[#F5F7F7]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 lg:mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-dark mb-6 lg:mb-8 tracking-tighter uppercase leading-[0.9]">
                        WHY CHOOSE <br />
                        <span className="text-primary italic">TOOTHFIX</span> ?
                    </h1>
                    <p className="text-gray-600 text-base lg:text-lg mb-10 lg:mb-12 max-w-2xl mx-auto font-light">
                        At ToothFix, we believe a healthy smile is a beautiful smile. Our clinic is built on the foundation of trust, expertise, and personalized care.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                    {reasons.map((reason, i) => (
                        <div key={i} className="bg-white p-6 lg:p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="mb-4">{reason.icon}</div>
                            <h3 className="text-lg font-bold text-dark mb-2">{reason.title}</h3>
                            <p className="text-gray-500 text-sm font-light leading-relaxed">{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
