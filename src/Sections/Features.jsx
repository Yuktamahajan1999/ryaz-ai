import { useState, useEffect } from "react";
import FlipCard from "../Components/FlipCard";
import { FaGraduationCap, FaGamepad, FaChartLine, FaTimes } from "react-icons/fa";

const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ 
    title: "", description: "", icon: null, bgColor: "" 
  });

  // Modal aur Scrollbar management
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  const featureData = [
    {
      title: "LEARN",
      description: "Discover how our AI layers transform your daily interactions into growth.",
      icon: <FaGraduationCap size={24} />,
      bgColor: "bg-orange-500",
      details: "Dive deep into Ryze AI's educational content, learn step-by-step strategies, and become a pro at making impactful contributions."
    },
    {
      title: "ANALYZE MODE",
      description: "Track your philanthropic growth and tax-deductible contributions in real-time.",
      icon: <FaChartLine size={24} />,
      bgColor: "bg-orange-600",
      details: "Get detailed insights on your giving patterns, tax benefits, and track your social impact with interactive charts and reports."
    },
    {
      title: "IMPACT",
      description: "Discover how our AI layers transform your daily interactions into growth.",
      icon: <FaGamepad size={24} />,
      bgColor: "bg-orange-700",
      details: "Participate in community challenges, track progress, and see how small daily contributions aggregate into large-scale social change."
    }
  ];

  const openModal = (feature) => {
    setModalContent({ 
      title: feature.title, 
      description: feature.details,
      icon: feature.icon,
      bgColor: feature.bgColor
    });
    setIsModalOpen(true);
  };

  return (
    <section id="features" className="py-24 bg-linear-to-b from-[#ff7a33] to-[#e65c00] relative overflow-hidden no-scrollbar">
      
      {/* Background Animated Orbs for Depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-white/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-100 h-100 bg-orange-900/20 rounded-full blur-[100px] animate-bounce-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER ANIMATION: Reveal from bottom */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none animate-reveal">
            RYZE TO THE <br />
            <span className="text-white/30 italic">CHALLENGE</span>
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed opacity-0 animate-fade-in-delayed">
            Three core layers designed to turn your transaction data into 
            measurable social impact through the Ryze AI ecosystem.
          </p>
        </div>

        {/* CARDS ANIMATION: Staggered Fly-In */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-stagger-card" 
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="hover-scale-effect">
                <FlipCard 
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  bgColor={feature.bgColor}
                  onLearnMore={() => openModal(feature)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL ANIMATION: Pop and Blur */}
      {isModalOpen && (
        <div className="fixed inset-0 z-1000 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xl animate-fade-in" onClick={() => setIsModalOpen(false)} />
          
          <div className="relative bg-[#2d1606] border border-white/10 rounded-[3rem] max-w-xl w-full p-12 shadow-[0_50px_100px_rgba(0,0,0,0.5)] z-10 text-white animate-modal-pop">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-8 text-white/30 hover:text-white transition-transform hover:rotate-90 duration-300"
            >
              <FaTimes size={24} />
            </button>

            <div className={`inline-flex p-5 rounded-2xl mb-8 ${modalContent.bgColor} text-white shadow-2xl animate-float`}>
              {modalContent.icon}
            </div>

            <h3 className="text-5xl font-black uppercase italic tracking-tighter mb-6">
              {modalContent.title}
            </h3>
            
            <p className="text-white/70 text-xl leading-relaxed mb-10">
              {modalContent.description}
            </p>

            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-white text-[#2d1606] font-black uppercase tracking-widest py-5 rounded-2xl transition-all hover:bg-orange-500 hover:text-white hover:scale-[1.02] active:scale-95 shadow-xl"
            >
              Close Discovery
            </button>
          </div>
        </div>
      )}

      {/* --- ALL CUSTOM ANIMATIONS & SCROLLBAR REMOVAL --- */}
      <style jsx>{`
        /* 1. Remove Gray Scrollbar Completely */
        :global(html), :global(body) {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }
        :global(html)::-webkit-scrollbar, :global(body)::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        /* 2. Entrance Animations */
        @keyframes reveal {
          from { transform: translateY(60px); opacity: 0; filter: blur(10px); }
          to { transform: translateY(0); opacity: 1; filter: blur(0); }
        }
        .animate-reveal {
          animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes stagger-card {
          from { opacity: 0; transform: translateY(40px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-stagger-card {
          animation: stagger-card 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        @keyframes fade-in-delayed {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out 0.5s forwards;
        }

        /* 3. Interaction & Modal Animations */
        @keyframes modal-pop {
          0% { transform: scale(0.9) translateY(20px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-modal-pop {
          animation: modal-pop 0.4s cubic-bezier(0.17, 0.89, 0.32, 1.28) forwards;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s infinite ease-in-out;
        }

        .hover-scale-effect {
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .hover-scale-effect:hover {
          transform: translateY(-12px);
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Features;