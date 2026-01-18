import React, { useState } from "react";
import { FaGlobeAmericas, FaBuilding, FaHandHoldingHeart, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

const Business = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        details: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.fullName.trim() || !formData.email.trim() || !formData.details.trim()) {
            toast.error("Please fill in all fields!", {
                style: { background: "#ff4b4b", color: "#fff", fontWeight: "bold", borderRadius: "1rem" },
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Enter a valid email address.", {
                style: { background: "#ff4b4b", color: "#fff", fontWeight: "bold", borderRadius: "1rem" },
            });
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            toast.success("Request sent successfully!", {
                duration: 4000,
                position: "top-center",
                style: {
                    background: "#2d1606",
                    color: "#fff",
                    fontWeight: "bold",
                    borderRadius: "1rem",
                    fontSize: "14px",
                    padding: "16px 24px",
                },
                iconTheme: { primary: "#ff8c37", secondary: "#fff" },
            });
            setFormData({ fullName: "", email: "", details: "" });
            setIsSubmitting(false);
            setIsModalOpen(false);
        }, 1500);
    };

    const stats = [
        {
            icon: <FaGlobeAmericas size={22} />,
            title: "Global Infrastructure",
            desc: "Available in 120+ countries with Ryze AI's localized tracking engine."
        },
        {
            icon: <FaBuilding size={22} />,
            title: "Enterprise Solutions",
            desc: "SSO and advanced permissions built specifically for your corporate team."
        },
        {
            icon: <FaHandHoldingHeart size={22} />,
            title: "Verified Impact",
            desc: "100% transparency with every donation going directly to verified causes."
        },
    ];

    return (
        <section
            id="business"
            className="relative py-32 min-h-screen flex items-center font-sans overflow-hidden bg-[#2d1606]"
        >
            {/* --- 1. THE SPARK: MESH GRADIENT & NOISE --- */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A33] via-[#FF8C37] to-[#2d1606] opacity-90" />
                
                {/* Moving Background Blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#FF9F3F] rounded-full blur-[120px] animate-blob mix-blend-soft-light opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#2d1606] rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply opacity-40" />
                
                {/* Grainy Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none" 
                     style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} 
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10 animate-fadeSlideIn">
                        <div className="inline-block px-5 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white animate-pulse">
                                Enterprise Ready
                            </span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] uppercase tracking-tighter">
                            Ryze your <br />
                            <span className="text-[#2d1606] italic drop-shadow-sm">impact.</span>
                        </h2>

                        <p className="text-xl text-white/90 font-semibold leading-relaxed max-w-md">
                            We provide the infrastructure for companies to turn every transaction
                            into a <span className="bg-white/20 px-1 rounded-md">powerful engine</span> for change.
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group relative px-12 py-6 bg-[#2d1606] text-white rounded-full font-black text-xs uppercase tracking-[0.3em] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all hover:scale-105 active:scale-95"
                        >
                            <span className="relative z-10 group-hover:text-[#2d1606] transition-colors duration-300">
                                Contact Sales
                            </span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        </button>
                    </div>

                    <div className="grid gap-8">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                style={{ animationDelay: `${idx * 150}ms` }}
                                className="p-10 bg-white/5 border border-white/10 rounded-[3rem] flex gap-8 items-center 
                                           hover:bg-white transition-all duration-700 group backdrop-blur-xl shadow-2xl 
                                           hover:-translate-y-3 cursor-default relative overflow-hidden animate-cardEntrance"
                            >
                                {/* --- 2. THE SPARK: INNER SHINE EFFECT --- */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                                <div className="shrink-0 w-16 h-16 bg-[#2d1606] rounded-2xl flex items-center justify-center text-white group-hover:rotate-[360deg] group-hover:bg-orange-500 transition-all duration-700 shadow-lg relative z-10">
                                    {stat.icon}
                                </div>
                                <div className="relative z-10">
                                    <h4 className="text-2xl font-black text-white group-hover:text-[#2d1606] uppercase tracking-tight mb-2 italic transition-colors">
                                        {stat.title}
                                    </h4>
                                    <p className="text-white/70 group-hover:text-[#2d1606]/80 text-base font-bold leading-snug transition-colors">
                                        {stat.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- 3. THE SPARK: MODAL GLASS & SCALE --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center px-4 animate-fadeIn">
                    <div
                        className="absolute inset-0 bg-[#2d1606]/90 backdrop-blur-2xl transition-all"
                        onClick={() => setIsModalOpen(false)}
                    />

                    <div className="relative z-[160] bg-white w-full max-w-2xl rounded-[4rem] p-12 shadow-[0_40px_100px_rgba(0,0,0,0.5)] animate-modalIn">
                        {/* CLOSE BUTTON - Fixed & Visible */}
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-8 right-8 z-[170] p-3 text-[#2d1606]/30 hover:text-[#2d1606] hover:bg-orange-100 rounded-full transition-all duration-300 active:scale-90 shadow-sm"
                            aria-label="Close modal"
                        >
                            <FaTimes size={24} />
                        </button>

                        <form onSubmit={handleSubmit} className="relative space-y-8">
                            <h3 className="text-5xl font-black text-[#2d1606] uppercase tracking-tighter italic leading-none">
                                Scale your <br /> vision.
                            </h3>

                            <div className="grid gap-5">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full px-8 py-5 bg-orange-50 text-[#2d1606] rounded-2xl border-2 border-transparent focus:border-[#2d1606] outline-none transition-all placeholder:text-[#2d1606]/30 font-bold"
                                />
                                <input
                                    type="email"
                                    placeholder="Work Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-8 py-5 bg-orange-50 text-[#2d1606] rounded-2xl border-2 border-transparent focus:border-[#2d1606] outline-none transition-all placeholder:text-[#2d1606]/30 font-bold"
                                />
                                <textarea
                                    placeholder="Project Details"
                                    rows="4"
                                    value={formData.details}
                                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                    className="w-full px-8 py-5 bg-orange-50 text-[#2d1606] rounded-2xl border-2 border-transparent focus:border-[#2d1606] outline-none transition-all resize-none placeholder:text-[#2d1606]/30 font-bold"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-6 bg-[#2d1606] text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-xl active:scale-95 disabled:opacity-50"
                                >
                                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-blob { animation: blob 10s infinite alternate cubic-bezier(0.45, 0, 0.55, 1); }
                .animation-delay-2000 { animation-delay: 2s; }
                
                @keyframes cardEntrance {
                    from { opacity: 0; transform: translateY(30px) scale(0.9); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-cardEntrance { animation: cardEntrance 0.8s ease-out forwards; }

                @keyframes modalIn {
                    from { opacity: 0; transform: scale(0.85) translateY(40px); filter: blur(10px); }
                    to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
                }
                .animate-modalIn { animation: modalIn 0.5s cubic-bezier(0.16, 1, 0.3, 1); }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fadeIn { animation: fadeIn 0.3s ease-out; }

                .animate-fadeSlideIn {
                    animation: cardEntrance 1s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default Business;