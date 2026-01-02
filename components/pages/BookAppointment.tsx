import React from 'react';
import { Calendar, Clock, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

const BookAppointment: React.FC = () => {
    return (
        <div className="pt-32 pb-24 px-6 md:px-12 lg:px-16 min-h-screen bg-[#F0F4F4] flex items-center justify-center">
            <div className="max-w-5xl w-full bg-white rounded-[60px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row min-h-[700px]">

                {/* Left Side: Brand & Info */}
                <div className="lg:w-[40%] bg-dark p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
                    {/* Subtle decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-[10px] font-black tracking-widest uppercase mb-8 border border-white/10">
                            <Sparkles size={12} className="text-primary" />
                            Premium Care
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-none uppercase">
                            Your Journey <br />
                            <span className="text-primary italic">to a perfect</span> <br />
                            Smile
                        </h1>
                        <p className="text-gray-400 text-lg font-light leading-relaxed">
                            Experience the best in modern dentistry with our expert team and state-of-the-art technology.
                        </p>
                    </div>

                    <div className="mt-12 space-y-10 relative z-10">
                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Clock size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Duration</p>
                                <p className="font-bold text-sm">Approx. 45 - 60 Minutes</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">Availability</p>
                                <p className="font-bold text-sm">Mon - Fri: 9am - 6pm</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex-1 p-12 lg:p-16 bg-white">
                    <form className="h-full flex flex-col justify-center gap-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">First Name</label>
                                <input type="text" placeholder="John" className="w-full bg-[#F8FAFA] px-8 py-5 rounded-[24px] border border-transparent outline-none focus:border-primary/20 focus:bg-white transition-all text-dark font-medium shadow-sm hover:shadow-md" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Last Name</label>
                                <input type="text" placeholder="Doe" className="w-full bg-[#F8FAFA] px-8 py-5 rounded-[24px] border border-transparent outline-none focus:border-primary/20 focus:bg-white transition-all text-dark font-medium shadow-sm hover:shadow-md" />
                            </div>
                            <div className="md:col-span-2 space-y-3">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-[#F8FAFA] px-8 py-5 rounded-[24px] border border-transparent outline-none focus:border-primary/20 focus:bg-white transition-all text-dark font-medium shadow-sm hover:shadow-md" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Preferred Date</label>
                                <input type="date" className="w-full bg-[#F8FAFA] px-8 py-5 rounded-[24px] border border-transparent outline-none focus:border-primary/20 focus:bg-white transition-all text-dark font-medium shadow-sm hover:shadow-md appearance-none" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Select Slot</label>
                                <select className="w-full bg-[#F8FAFA] px-8 py-5 rounded-[24px] border border-transparent outline-none focus:border-primary/20 focus:bg-white transition-all text-dark font-medium shadow-sm hover:shadow-md appearance-none cursor-pointer">
                                    <option>09:00 AM</option>
                                    <option>11:00 AM</option>
                                    <option>02:00 PM</option>
                                    <option>04:00 PM</option>
                                </select>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="w-full group relative flex items-center justify-between bg-primary hover:bg-primary/95 text-white pl-10 pr-4 py-5 rounded-[30px] font-black uppercase tracking-[0.2em] text-[11px] transition-all shadow-[0_20px_40px_rgba(93,117,118,0.3)] hover:shadow-[0_25px_50px_rgba(93,117,118,0.4)] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                <span className="relative z-10">Confirm Reservation</span>
                                <span className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-all relative z-10 shadow-lg">
                                    <ChevronRight size={20} />
                                </span>
                            </button>
                            <p className="text-center text-gray-400 text-[10px] mt-6 font-medium uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                                <ShieldCheck size={12} className="text-primary" />
                                Secured & Encrypted Booking
                            </p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default BookAppointment;
