import React from 'react';

const Blog: React.FC = () => {
    return (
        <div className="pt-32 pb-24 px-6 md:px-12 lg:px-16 min-h-screen bg-white">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-black text-dark mb-4 tracking-tighter uppercase">DENTAL BLOG</h1>
                <p className="text-gray-500 font-medium tracking-[0.2em] uppercase">Latest news and oral health tips</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden mb-6">
                            <img
                                src={`https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070&auto=format&fit=crop`}
                                alt="Blog"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">Oral Health</span>
                        <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">How to maintain a healthy smile at home</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                            Discover the best practices for daily oral hygiene and what you can do to prevent common dental issues before they start...
                        </p>
                        <button className="text-dark font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            READ MORE <span className="text-primary">→</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
