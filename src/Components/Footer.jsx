/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { HiOutlineArrowCircleUp } from "react-icons/hi";

const Footer = () => {
  const footerRef = useRef(null);
  const colsRef = useRef([]);
  const marqueeRef = useRef(null);
  const rotateIconRef = useRef(null);

  useGSAP(
    () => {
      // 1. Reveal Animation (Slightly slower for premium feel)
      gsap.from(colsRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });

      // 2. Dark Marquee (Background Text)
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 30,
        ease: "none",
      });

      // 3. Dark Rotating Geometry
      gsap.to(rotateIconRef.current, {
        rotate: 360,
        duration: 12,
        repeat: -1,
        ease: "none",
      });

      // 4. Smooth Floating Social Icons
      gsap.to(".social-icon", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.3, from: "center" }
      });
    },
    { scope: footerRef }
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { Icon: FaXTwitter, color: "hover:bg-black", link: "#" },
    { Icon: FaLinkedinIn, color: "hover:bg-[#0077B5]", link: "#" },
    { Icon: FaGithub, color: "hover:bg-[#333]", link: "#" },
  ];

  const floatingWords = ["PRACTICE", "UPSKILL", "PLAY", "IMPROVE", "IMPACT", "EVOLVE"];

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-transparent border-t border-black/10 pt-32 pb-12 z-20"
    >
      {/* BACKGROUND TEXT - Dark Outline for Orange contrast */}
      <div className="absolute top-10 left-0 w-full overflow-hidden opacity-[0.07] pointer-events-none select-none">
        <div ref={marqueeRef} className="flex whitespace-nowrap gap-20">
          {[...floatingWords, ...floatingWords].map((word, i) => (
            <span key={i} className="text-[14vw] font-black leading-none text-transparent" 
                  style={{ WebkitTextStroke: '1.5px black' }}>
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* ROTATING ELEMENT - Dark/Black tone */}
      <div className="absolute right-[8%] top-[15%] opacity-15 pointer-events-none">
          <div ref={rotateIconRef} className="w-44 h-44 border-2 border-dashed border-black rounded-full flex items-center justify-center">
              <div className="w-24 h-24 border border-black rotate-45 opacity-40" />
              <div className="absolute w-1 h-full bg-black/10" />
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div ref={(el) => (colsRef.current[0] = el)}>
            <div className="text-3xl font-black tracking-tighter text-white mb-6 drop-shadow-md">
              RYZE<span className="text-black/20">.AI</span>
            </div>
            <p className="text-black/60 text-sm font-semibold leading-relaxed max-w-60">
              Empowering the next generation of philanthropy through AI‑driven financial technology.
            </p>
          </div>

          {/* Links 1 */}
          <div ref={(el) => (colsRef.current[1] = el)}>
            <h4 className="text-black/40 font-black text-[10px] uppercase tracking-[0.3em] mb-8">Product</h4>
            <ul className="space-y-4 text-white font-medium">
              {["Features", "Ecosystem", "Enterprise"].map((item) => (
                <li key={item}><a href="#" className="hover:text-black hover:pl-2 transition-all duration-300 block">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div ref={(el) => (colsRef.current[2] = el)}>
            <h4 className="text-black/40 font-black text-[10px] uppercase tracking-[0.3em] mb-8">Resources</h4>
            <ul className="space-y-4 text-white font-medium">
              {["API Docs", "Impact Report", "Security"].map((item) => (
                <li key={item}><a href="#" className="hover:text-black hover:pl-2 transition-all duration-300 block">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div ref={(el) => (colsRef.current[3] = el)} className="flex flex-col items-start md:items-end">
            <h4 className="text-black/40 font-black text-[10px] uppercase tracking-[0.3em] mb-8">Connect</h4>
            <div className="flex gap-4 mb-10">
              {socialLinks.map(({ Icon, color, link }, i) => (
                <a key={i} href={link} className={`social-icon w-12 h-12 rounded-full bg-black/5 backdrop-blur-md flex items-center justify-center text-black transition-all duration-500 border border-black/10 hover:scale-110 shadow-lg ${color} hover:text-white`}>
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <button onClick={scrollToTop} className="group flex items-center gap-3 text-black hover:text-white transition-all font-black text-[10px] uppercase tracking-[0.2em]">
              Back to Top
              <div className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center group-hover:border-white group-hover:bg-black group-hover:text-white transition-all">
                <HiOutlineArrowCircleUp size={20} />
              </div>
            </button>
          </div>
        </div>

        <div className="footer-bottom pt-10 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] text-black/30 tracking-[0.4em] font-black">
          <p>© 2026 RYZE AI. BUILT FOR GLOBAL IMPACT.</p>
          <div className="flex gap-10">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a key={link} href="#" className="hover:text-black transition-colors uppercase">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;