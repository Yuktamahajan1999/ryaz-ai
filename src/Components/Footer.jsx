/* eslint-disable no-unused-vars */
// Footer.jsx
import { useRef } from "react";
import { useGSAP } from "@gsap/react"; // useGSAP is the recommended React hook
import gsap from "gsap";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { HiOutlineArrowCircleUp } from "react-icons/hi";

const Footer = () => {
  // Step 1: Create a ref for the whole footer (for ScrollTrigger trigger)
  const footerRef = useRef(null);
  // Step 2: Create a ref array for the 4 columns (to animate them together)
  const colsRef = useRef([]);

  // Step 3: Use useGSAP instead of useEffect (safer, auto-cleanup, better practice)
  useGSAP(
    () => {
      // Animate all footer columns (Brand, Product, Resources, Social) when they come into view
      gsap.from(colsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          // Trigger this animation when the footer appears in the viewport
          trigger: footerRef.current,
          // Start animation when footer is 90% into the viewport
          start: "top 90%",
        },
      });

      // Optional: Add a small parallax effect to the bottom bar (extra parallax layer)
      gsap.to(".footer-bottom", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true, // Makes it smoothly follow scroll
        },
      });
    },
    // Use `scope: footerRef` so GSAP only looks inside this footer
    { scope: footerRef }
  );

  // Function to scroll back to top (smooth animation)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Social links (Twitter, LinkedIn, GitHub)
  const socialLinks = [
    { Icon: FaXTwitter, color: "hover:bg-black", link: "#" },
    { Icon: FaLinkedinIn, color: "hover:bg-[#0077B5]", link: "#" }, // LinkedIn Blue
    { Icon: FaGithub, color: "hover:bg-[#333]", link: "#" },       // GitHub Black
  ];

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-transparent border-t border-white/10 pt-20 pb-10 z-20"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/20 rounded-full blur-[100px]"
          style={{
            animation: "pulse 8s ease-in-out infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
        }
      `}</style>

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div ref={(el) => (colsRef.current[0] = el)} className="col-span-1">
            <div className="text-2xl font-black tracking-tighter text-white mb-4">
              RYZE<span className="text-orange-950">.AI</span>
            </div>
            <p className="text-orange-950/80 text-sm font-medium leading-relaxed">
              Empowering the next generation of philanthropy through AI‑driven financial technology.
            </p>
          </div>

          {/* Product Links */}
          <div ref={(el) => (colsRef.current[1] = el)} className="col-span-1">
            <h4 className="text-orange-950 font-black text-xs uppercase tracking-[0.2em] mb-6">
              Product
            </h4>
            <ul className="space-y-3 text-white/70 text-sm font-medium">
              {["Features", "Ecosystem", "Enterprise"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div ref={(el) => (colsRef.current[2] = el)} className="col-span-1">
            <h4 className="text-orange-950 font-black text-xs uppercase tracking-[0.2em] mb-6">
              Resources
            </h4>
            <ul className="space-y-3 text-white/70 text-sm font-medium">
              {["API Docs", "Impact Report", "Security"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Back to Top */}
          <div ref={(el) => (colsRef.current[3] = el)} className="col-span-1 flex flex-col items-start md:items-end">
            <h4 className="text-orange-950 font-black text-xs uppercase tracking-[0.2em] mb-6">
              Connect
            </h4>
            <div className="flex gap-4 mb-8">
              {socialLinks.map(({ Icon, color, link }, i) => (
                <a
                  key={i}
                  href={link}
                  className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 shadow-xl border border-white/10 hover:-translate-y-2 ${color}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-orange-950 hover:text-white transition-all font-black text-[10px] uppercase tracking-widest"
            >
              Back to Top
              <HiOutlineArrowCircleUp
                size={22}
                className="group-hover:-translate-y-2 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* Bottom Bar (with parallax, controlled by GSAP above) */}
        <div className="footer-bottom pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-orange-950/60 tracking-[0.3em] font-black">
          <p>© 2026 RYZE AI. BUILT FOR GLOBAL IMPACT.</p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
