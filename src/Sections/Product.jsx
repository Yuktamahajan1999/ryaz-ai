import { useState, useEffect, useRef } from "react";

const Product = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const products = [
        {
            title: "Impact Dashboard",
            desc: "A centralized hub to monitor your real-time philanthropic contributions and global impact metrics. Track every cent and see exactly how your money is changing lives across the globe.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "Smart Round-ups",
            desc: "Our AI engine automatically rounds up your daily transactions, turning spare change into donations. It's the simplest way to give back without even thinking about it.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "Enterprise API",
            desc: "Seamlessly integrate Ryze AI's giving infrastructure into your own business platform. Empower your customers to give back during checkout and boost social responsibility.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
        },
    ];

    return (
        <section 
            ref={sectionRef}
            id="product" 
            className="py-32 bg-linear-to-br from-[#ff5f1f] via-[#ff6a2d] to-[#ff4d00] relative overflow-hidden"
        >
            
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_50%)] animate-slow-spin" />
                
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] animate-float" />
                <div className="absolute bottom-0 left-1/4 w-125 h-125 bg-black/5 rounded-full blur-[150px] animate-pulse-slow" />
                
                <div className="absolute inset-0 opacity-[0.03] animate-grid-move" 
                     style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 text-center lg:text-left">
                    <h2 className={`text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Our{" "}
                        <span className="text-[#1a0f0a] italic drop-shadow-sm">
                            Ecosystem
                        </span>
                    </h2>
                </div>

                <div className="flex overflow-x-auto gap-10 pb-16 no-scrollbar snap-x snap-mandatory scroll-smooth">
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className={`min-w-[85vw] md:min-w-110 snap-center transition-all duration-700 ease-out`}
                            style={{ 
                                opacity: isInView ? 1 : 0, 
                                transform: isInView ? 'translateX(0)' : 'translateX(50px)',
                                transitionDelay: `${index * 200}ms` 
                            }}
                        >
                            <div className="relative group overflow-hidden rounded-[3.5rem] border border-white/10 bg-[#1a0f0a] p-5 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)]">
                                
                                <div className="relative h-72 md:h-80 overflow-hidden rounded-[2.5rem]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#1a0f0a] via-transparent to-transparent opacity-80" />
                                </div>

                                <div className="p-6 space-y-5">
                                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/50 text-base leading-relaxed line-clamp-3 font-medium">
                                        {item.desc}
                                    </p>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedProduct(item);
                                        }}
                                        className="w-full py-5 bg-[#ff5f1f] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-lg active:scale-95 cursor-pointer relative z-20"
                                    >
                                        Launch Module
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal - Themed to match */}
            {selectedProduct && (
                <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl animate-fade-in" onClick={() => setSelectedProduct(null)} />
                    <div className="relative w-full max-w-2xl bg-[#1a0f0a] border border-white/10 rounded-[3.5rem] overflow-hidden shadow-2xl z-10 animate-modal-pop">
                        <button onClick={() => setSelectedProduct(null)} className="absolute top-8 right-8 z-100 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#ff5f1f] transition-all">✕</button>
                        <div className="p-3">
                            <div className="h-64 md:h-80 rounded-[2.5rem] overflow-hidden">
                                <img src={selectedProduct.image} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="p-10 md:p-14 space-y-6">
                            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic leading-none">{selectedProduct.title}</h3>
                            <p className="text-white/60 text-lg leading-relaxed font-medium">{selectedProduct.desc}</p>
                            <button className="w-full py-6 bg-[#ff5f1f] text-white rounded-3xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Integration Ready</button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes slow-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes grid-move {
                    from { background-position: 0 0; }
                    to { background-position: 60px 60px; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-30px) scale(1.05); }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.1; transform: scale(1); }
                    50% { opacity: 0.3; transform: scale(1.1); }
                }
                @keyframes modal-pop {
                    from { opacity: 0; transform: scale(0.9) translateY(30px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-slow-spin { animation: slow-spin 40s linear infinite; }
                .animate-grid-move { animation: grid-move 4s linear infinite; }
                .animate-float { animation: float 8s ease-in-out infinite; }
                .animate-pulse-slow { animation: pulse-slow 12s infinite ease-in-out; }
                .animate-modal-pop { animation: modal-pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
                .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
};

export default Product;