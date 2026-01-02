import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="pt-32 pb-24 px-6 md:px-12 lg:px-16 min-h-screen bg-white">
            <div className="flex flex-col lg:flex-row gap-20">
                <div className="flex-1">
                    <h1 className="text-5xl font-black text-dark mb-6 tracking-tighter uppercase">GET IN TOUCH</h1>
                    <p className="text-gray-500 text-lg mb-12">
                        Have questions about our services or want to say hello? We're here to help you on your journey to a perfect smile.
                    </p>

                    <div className="space-y-8">
                        <div className="flex gap-6 items-start">
                            <div className="bg-[#F0F4F4] p-4 rounded-2xl text-primary"><MapPin size={24} /></div>
                            <div>
                                <h3 className="font-bold text-dark text-lg mb-1">Clinic Address</h3>
                                <p className="text-gray-500">Jk Nagar, Rajaji Road, Banjara Hills<br />Hyderabad, Telangana-500034</p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="bg-[#F0F4F4] p-4 rounded-2xl text-primary"><Phone size={24} /></div>
                            <div>
                                <h3 className="font-bold text-dark text-lg mb-1">Call Us</h3>
                                <p className="text-gray-500">+91 9798100101</p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="bg-[#F0F4F4] p-4 rounded-2xl text-primary"><Mail size={24} /></div>
                            <div>
                                <h3 className="font-bold text-dark text-lg mb-1">Email Us</h3>
                                <p className="text-gray-500">hello@toothfix.com<br />appointments@toothfix.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-[#F5F7F7] p-10 md:p-14 rounded-[40px] shadow-sm border border-gray-100">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-dark uppercase tracking-wider">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-white px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-dark uppercase tracking-wider">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-white px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-dark uppercase tracking-wider">Subject</label>
                            <input type="text" placeholder="General Inquiry" className="w-full bg-white px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-dark uppercase tracking-wider">Message</label>
                            <textarea placeholder="How can we help you?" rows={5} className="w-full bg-white px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"></textarea>
                        </div>
                        <button className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-3xl font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
