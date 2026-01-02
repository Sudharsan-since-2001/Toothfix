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
        <div className="pt-32 pb-24 px-6 md:px-12 lg:px-16 min-h-screen bg-[#F5F7F7]">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-1">
                    <h1 className="text-5xl font-black text-dark mb-8 tracking-tighter uppercase leading-[0.9]">
                        WHY CHOOSE <br />
                        <span className="text-primary italic">TOOTHFIX</span>?
                    </h1>
                    <p className="text-gray-600 text-lg mb-12 max-w-xl">
                        At ToothFix, we believe a healthy smile is a beautiful smile. Our clinic is built on the foundation of trust, expertise, and personalized care.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {reasons.map((reason, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                <div className="mb-4">{reason.icon}</div>
                                <h3 className="text-lg font-bold text-dark mb-2">{reason.title}</h3>
                                <p className="text-gray-500 text-sm">{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 w-full aspect-square md:aspect-video lg:aspect-square bg-gray-200 rounded-[80px] overflow-hidden shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068"
                        alt="Modern Dental Clinic"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
