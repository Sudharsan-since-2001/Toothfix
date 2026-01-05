import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';

const BlogDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // In a real app, this would be fetched from an API
    const posts = [
        {
            image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070",
            category: "Oral Health",
            title: "How to maintain a healthy smile at home",
            date: "January 5, 2026",
            author: "Dr. Sarah Mitchell",
            content: `
                <p class="mb-6">A healthy smile is not just about professional cleanings; it starts with your daily routine at home. Consistency is key when it comes to oral hygiene, and small habits can make a significant difference in preventing cavities and gum disease.</p>
                
                <h2 class="text-2xl font-bold text-dark mb-4">1. Brushing Technique Matters</h2>
                <p class="mb-6">Most people brush twice a day, but are you doing it correctly? You should brush for at least two minutes using a soft-bristled toothbrush. Hold the brush at a 45-degree angle to your gums and use gentle, circular motions.</p>
                
                <h2 class="text-2xl font-bold text-dark mb-4">2. Don't Skip the Floss</h2>
                <p class="mb-6">Flossing reaches the areas that your toothbrush simply cannot. It removes plaque and food particles from between the teeth and under the gumline. If you find traditional floss difficult, try water flossers or interdental brushes.</p>
                
                <h2 class="text-2xl font-bold text-dark mb-4">3. Watch Your Diet</h2>
                <p class="mb-6">What you eat impacts your teeth. Sugary and acidic foods can erode enamel. Try to limit snacking between meals and drink plenty of water to wash away food particles and neutralize acids.</p>
            `
        },
        {
            image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070",
            category: "Treatments",
            title: "The Importance of Regular Dental Checkups",
            date: "January 3, 2026",
            author: "Dr. James Wilson",
            content: `
                <p class="mb-6">Many people only visit the dentist when they have a toothache. However, preventive care is the most effective way to maintain oral health. Regular checkups at ToothFix allow us to catch issues before they become painful and expensive problems.</p>
                
                <h2 class="text-2xl font-bold text-dark mb-4">Professional Cleaning</h2>
                <p class="mb-6">Even with perfect home care, tartar (calcified plaque) can build up. Only a professional cleaning can remove tartar, which if left alone, can lead to gum disease.</p>
                
                <h2 class="text-2xl font-bold text-dark mb-4">Oral Cancer Screening</h2>
                <p class="mb-6">During every routine checkup, we perform a thorough screening for signs of oral cancer. Early detection is vital for successful treatment.</p>
            `
        },
        {
            image: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?q=80&w=2070",
            category: "Cosmetic",
            title: "Teeth Whitening: Professional vs Home Kits",
            date: "December 28, 2025",
            author: "Dr. Emily Chen",
            content: `
                <p class="mb-6">Everyone wants a brighter smile, but with so many options available, it's hard to know which one is best. Here at ToothFix, we offer professional whitening that delivers superior results compared to over-the-counter options.</p>
                
                <h2 class="text-2xl font-bold text-dark mb-4">Why Professional Whitening?</h2>
                <p class="mb-6">Professional treatments use higher concentrations of whitening agents while protecting your sensitive gum tissues. The results are faster, more dramatic, and last longer than drugstore kits.</p>
                
                <h2 class="text-2xl font-bold text-dark mb-4">Safety First</h2>
                <p class="mb-6">Before any whitening procedure, we ensure your teeth and gums are healthy. Whitening on top of untreated cavities can cause severe pain and damage.</p>
            `
        }
    ];

    const post = posts[Number(id)] || posts[0];

    return (
        <div className="pt-24 lg:pt-32 pb-20 lg:pb-24 px-4 md:px-12 lg:px-16 min-h-screen bg-white">
            <div className="max-w-4xl mx-auto">
                <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold mb-6 lg:mb-8 hover:gap-3 transition-all text-sm md:text-base">
                    <ArrowLeft size={18} /> BACK TO BLOG
                </Link>

                <div className="aspect-[21/9] rounded-[24px] lg:rounded-[40px] overflow-hidden mb-8 lg:mb-12 shadow-2xl">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-wrap gap-4 md:gap-6 mb-8 text-xs md:text-sm text-gray-500 font-medium">
                    <span className="flex items-center gap-2 bg-secondary px-3 md:px-4 py-1.5 md:py-2 rounded-full text-primary uppercase tracking-widest text-[10px] md:text-xs">
                        {post.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="md:w-4 md:h-4" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <User size={14} className="md:w-4 md:h-4" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock size={14} className="md:w-4 md:h-4" /> 5 min read
                    </span>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-dark mb-8 lg:mb-10 leading-[1.1] tracking-tighter uppercase">
                    {post.title}
                </h1>

                <div
                    className="prose prose-sm md:prose-lg max-w-none text-gray-600 leading-relaxed font-light"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-12 lg:mt-16 pt-8 lg:pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 lg:gap-8">
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-dark mb-2">Ready for your perfect smile?</h4>
                        <p className="text-gray-500 text-sm md:text-base">Book a consultation with our experts today.</p>
                    </div>
                    <Link to="/book" className="w-full md:w-auto bg-primary text-white px-8 lg:px-10 py-3.5 lg:py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95">
                        BOOK APPOINTMENT
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
