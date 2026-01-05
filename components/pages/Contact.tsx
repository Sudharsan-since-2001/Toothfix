import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="pt-24 lg:pt-32 pb-20 lg:pb-24 px-4 md:px-12 lg:px-16 min-h-screen bg-white">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                <div className="flex-1">
                    <h1 className="text-4xl sm:text-5xl font-black text-dark mb-6 tracking-tighter uppercase leading-[0.9]">GET IN TOUCH</h1>
                    <p className="text-gray-500 text-base md:text-lg mb-10 md:mb-12 font-light max-w-xl">
                        Have questions about our services or want to say hello? We're here to help you on your journey to a perfect smile.
                    </p>

                    <div className="space-y-6 md:space-y-8">
                        <div className="flex gap-4 md:gap-6 items-start">
                            <div className="bg-[#F0F4F4] p-3 md:p-4 rounded-xl md:rounded-2xl text-primary shrink-0"><MapPin size={24} /></div>
                            <div>
                                <h3 className="font-bold text-dark text-base md:text-lg mb-0.5 md:mb-1">Clinic Address</h3>
                                <p className="text-gray-500 text-sm md:text-base font-light">Jk Nagar, Rajaji Road, Banjara Hills<br />Hyderabad, Telangana-500034</p>
                            </div>
                        </div>

                        <div className="flex gap-4 md:gap-6 items-start">
                            <div className="bg-[#F0F4F4] p-3 md:p-4 rounded-xl md:rounded-2xl text-primary shrink-0"><Phone size={24} /></div>
                            <div>
                                <h3 className="font-bold text-dark text-base md:text-lg mb-0.5 md:mb-1">Call Us</h3>
                                <p className="text-gray-500 text-sm md:text-base font-light">+91 9798100101</p>
                            </div>
                        </div>

                        <div className="flex gap-4 md:gap-6 items-start">
                            <div className="bg-[#F0F4F4] p-3 md:p-4 rounded-xl md:rounded-2xl text-primary shrink-0"><Mail size={24} /></div>
                            <div>
                                <h3 className="font-bold text-dark text-base md:text-lg mb-0.5 md:mb-1">Email Us</h3>
                                <p className="text-gray-500 text-sm md:text-base font-light">hello@toothfix.com<br />appointments@toothfix.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-[#F5F7F7] p-8 md:p-14 rounded-[32px] md:rounded-[40px] shadow-sm border border-gray-100">
                    <form className="space-y-5 md:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                            <div className="space-y-1.5 md:space-y-2">
                                <label className="text-[10px] md:text-xs font-bold text-dark uppercase tracking-widest ml-1">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-white px-5 md:px-6 py-3.5 md:py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all text-sm md:text-base" />
                            </div>
                            <div className="space-y-1.5 md:space-y-2">
                                <label className="text-[10px] md:text-xs font-bold text-dark uppercase tracking-widest ml-1">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-white px-5 md:px-6 py-3.5 md:py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all text-sm md:text-base" />
                            </div>
                        </div>
                        <div className="space-y-1.5 md:space-y-2">
                            <label className="text-[10px] md:text-xs font-bold text-dark uppercase tracking-widest ml-1">Subject</label>
                            <input type="text" placeholder="General Inquiry" className="w-full bg-white px-5 md:px-6 py-3.5 md:py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all text-sm md:text-base" />
                        </div>
                        <div className="space-y-1.5 md:space-y-2">
                            <label className="text-[10px] md:text-xs font-bold text-dark uppercase tracking-widest ml-1">Message</label>
                            <textarea placeholder="How can we help you?" rows={4} className="w-full bg-white px-5 md:px-6 py-3.5 md:py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all resize-none text-sm md:text-base"></textarea>
                        </div>
                        <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 md:py-5 rounded-[20px] md:rounded-3xl font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20 active:scale-95">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
