import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const [activeModal, setActiveModal] = useState(null);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Added logic to handle the email submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // You can add your API call here
      setIsSubmitted(true);
    }
  };

  const closeModal = () => {
    setActiveModal(null);
    setIsSubmitted(false);
    setEmail("");
  };

  useGSAP(() => {
    gsap.to(".marquee-content", {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: "linear",
    });

    const tl = gsap.timeline();
    tl.from(".hero-title-span", {
      y: 100,
      skewY: 7,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "power4.out",
    })
    .from(".hero-p", { opacity: 0, y: 20, duration: 0.8 }, "-=0.8")
    .from(".hero-btn-group", { opacity: 0, scale: 0.9, duration: 0.6 }, "-=0.6");

    gsap.from(".stat-box", {
      scrollTrigger: {
        trigger: ".stats-container",
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
    });
  }, { scope: heroRef });

  return (
    <div ref={heroRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-[#ff5f1f] via-[#ff6a2d] to-[#ff4d00]">
      
      {/* Background Marquee */}
      <div className="absolute top-[30%] left-0 w-full opacity-10 pointer-events-none select-none">
        <div className="marquee-content flex whitespace-nowrap text-[20vw] font-black uppercase text-black">
          <span>RYZE AI • IMPACT • RYZE AI • IMPACT •&nbsp;</span>
          <span>RYZE AI • IMPACT • RYZE AI • IMPACT •&nbsp;</span>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-white/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-black/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-[110px] font-black tracking-tighter leading-[0.85] uppercase text-white">
            <div className="overflow-hidden">
              <span className="hero-title-span inline-block">Turn Every Cent</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-title-span inline-block text-[#1a0f0a] italic">Into Change.</span>
            </div>
          </h1>

          <p className="hero-p mt-6 text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            Ryze AI connects your daily transactions to global causes. 
            Automate philanthropy and watch your small change create massive impact.
          </p>

          <div className="hero-btn-group mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setActiveModal('giving')}
              className="px-12 py-5 bg-[#1a0f0a] text-white font-bold rounded-full hover:bg-black transition-all cursor-pointer uppercase tracking-widest text-xs shadow-xl active:scale-95 border-none"
            >
              Start Giving Now
            </button>
            <button
              onClick={() => setActiveModal('works')}
              className="px-12 py-5 bg-white/20 border border-white/40 text-white font-bold rounded-full hover:bg-white/30 transition-all cursor-pointer uppercase tracking-widest text-xs backdrop-blur-md active:scale-95"
            >
              How Ryze Works
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-container mt-24 pt-12 border-t border-white/30 flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="stat-box text-center">
            <p className="text-white font-black text-5xl md:text-7xl tracking-tighter">$2.4M+</p>
            <p className="text-[#1a0f0a] text-[10px] font-black uppercase tracking-[0.4em] mt-2">Donated</p>
          </div>
          <div className="stat-box text-center">
            <p className="text-white font-black text-5xl md:text-7xl tracking-tighter">120K+</p>
            <p className="text-[#1a0f0a] text-[10px] font-black uppercase tracking-[0.4em] mt-2">Daily Users</p>
          </div>
          <div className="stat-box text-center">
            <p className="text-white font-black text-5xl md:text-7xl tracking-tighter">500+</p>
            <p className="text-[#1a0f0a] text-[10px] font-black uppercase tracking-[0.4em] mt-2">Verified NGOs</p>
          </div>
        </div>
      </div>

      {/* Modal with Submit Logic */}
      {activeModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 backdrop-blur-xl bg-black/40">
          <div className="absolute inset-0" onClick={closeModal} />
          <div className="relative bg-[#1a0f0a] text-white rounded-[3rem] max-w-xl w-full p-12 shadow-2xl z-10 animate-in zoom-in-95 duration-300">
            <button onClick={closeModal} className="absolute top-8 right-8 text-white/40 hover:text-white text-2xl cursor-pointer">✕</button>
            
            <div className="text-center">
              {!isSubmitted ? (
                <>
                  <h2 className="text-4xl font-black uppercase mb-2 text-[#ff5f1f]">Join Ryze</h2>
                  <p className="text-white/60 mb-8">Be the first to access the impact dashboard.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email" 
                      className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-[#ff5f1f] transition-all" 
                    />
                    <button type="submit" className="w-full py-5 bg-[#ff5f1f] text-white font-bold rounded-2xl uppercase tracking-widest hover:bg-[#ff7a45] transition-all">
                      Submit
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-8">
                  <div className="w-20 h-20 bg-[#ff5f1f]/20 text-[#ff5f1f] rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
                  <h2 className="text-4xl font-black uppercase mb-2">You're on the list!</h2>
                  <p className="text-white/60 mb-8">We'll notify you as soon as we launch.</p>
                  <button onClick={closeModal} className="px-10 py-4 border-2 border-white/20 rounded-full font-bold hover:bg-white/10 transition-all">
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;