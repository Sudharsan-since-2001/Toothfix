import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
    const posts = [
        {
            image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070",
            category: "Oral Health",
            title: "How to maintain a healthy smile at home",
            desc: "Discover the best practices for daily oral hygiene and what you can do to prevent common dental issues before they start..."
        },
        {
            image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070",
            category: "Treatments",
            title: "The Importance of Regular Dental Checkups",
            desc: "Regular visits to the dentist are crucial for maintaining long-term oral health and catching potential problems early."
        },
        {
            image: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?q=80&w=2070",
            category: "Cosmetic",
            title: "Teeth Whitening: Professional vs Home Kits",
            desc: "Everything you need to know about different whitening options and how to choose the right one for your smile."
        }
    ];

    return (
        <div className="pt-24 lg:pt-32 pb-20 lg:pb-24 px-4 md:px-12 lg:px-16 min-h-screen bg-white">
            <div className="text-center mb-12 lg:mb-16">
                <h1 className="text-4xl sm:text-5xl font-black text-dark mb-4 tracking-tighter uppercase leading-[0.9]">DENTAL BLOG</h1>
                <p className="text-gray-500 font-medium tracking-[0.1em] md:tracking-[0.2em] uppercase text-xs md:text-sm">Latest news and oral health tips</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {posts.map((post, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="aspect-video bg-gray-100 rounded-[24px] lg:rounded-3xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <span className="text-primary text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2 block">{post.category}</span>
                        <h3 className="text-lg md:text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4 font-light">
                            {post.desc}
                        </p>
                        <Link
                            to={`/blog/${i}`}
                            className="text-dark font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all active:scale-95"
                        >
                            READ MORE <span className="text-primary">→</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
